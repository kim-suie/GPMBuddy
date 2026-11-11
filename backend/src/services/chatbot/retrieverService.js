const departmentServices = require("../departmentServices");
const facultyServices = require("../facultyServices");
const aboutUsServices = require("../aboutUsServices");
const facilityServices = require("../facilityServices");
const subjectServices = require("../subjectServices");
const Event = require("../../models/event");
const academicServices = require("../../services/academicServices");

// Long syllabus lists for dozens of subjects would bloat the answer
// prompt for no benefit, so once a result set is larger than this the
// syllabus is dropped. Narrow queries usually stay under the limit.
const MAX_SUBJECTS_WITH_SYLLABUS = 8;

// A subject with an empty "departments" array is common to every
// department, so it's labelled explicitly.
const prepareSubjects = (subjects) => {
    const dropSyllabus = subjects.length > MAX_SUBJECTS_WITH_SYLLABUS;

    return subjects.map(subject => {
        const plain =
            typeof subject.toObject === "function"
                ? subject.toObject()
                : { ...subject };

        plain.departments =
            plain.departments && plain.departments.length
                ? plain.departments
                : ["All departments"];

        if (dropSyllabus) {
            delete plain.syllabus;
        }

        return plain;
    });
};

// Fetches real data for ONE classified request.
const retrieveOne = async (request) => {
    const {
        topic,
        departmentCode,
        facultyNameQuery,
        designationQueries,
        facilityCategoryQuery,
        facilityNameQuery,
        subjectNameQuery,
        subjectTypeQuery,
        subjectDepartmentQuery
    } = request;

    switch (topic) {
        case "department":
            return departmentCode
                ? await departmentServices.findDepartment(departmentCode)
                : await departmentServices.getDepartments();

        case "faculty": {
            const hasDesignations = Array.isArray(designationQueries) && designationQueries.length > 0;
 
            // facultyServices.searchFaculty combines name (partial
            // match), department, and designation tags together —
            // e.g. "HODs in mechanical" uses department + the "HOD"
            // tag at once. A faculty member holds several independent
            // tags (e.g. ["Lecturer", "HOD"]), and the search matches
            // anyone whose tags CONTAIN any requested one, so there's
            // no compound-string handling needed anywhere in this
            // pipeline.
            if (facultyNameQuery || departmentCode || hasDesignations) {
                return await facultyServices.searchFaculty({
                    search: facultyNameQuery || undefined,
                    department: departmentCode || undefined,
                    designations: hasDesignations ? designationQueries : undefined
                });
            }
 
            return await facultyServices.getFaculties();
        }


        case "event":
            return await Event.find().sort({ date: 1 });

        case "academic":
            return await academicServices.getAcademicInfo();

        case "aboutUs":
            return await aboutUsServices.getAboutUs();

        case "facility": {
            if (
                facilityNameQuery ||
                facilityCategoryQuery ||
                departmentCode
            ) {
                return await facilityServices.searchFacilities({
                    search: facilityNameQuery || undefined,
                    category: facilityCategoryQuery || undefined,
                    department: departmentCode || undefined
                });
            }

            return await facilityServices.getFacilities();
        }

        case "subject": {
            const hasFilter =
                subjectNameQuery ||
                subjectTypeQuery ||
                subjectDepartmentQuery;

            const subjects = hasFilter
                ? await subjectServices.searchSubjects({
                    search: subjectNameQuery || undefined,
                    department: subjectDepartmentQuery || undefined,
                    type: subjectTypeQuery || undefined
                })
                : await subjectServices.getSubjects();

            return prepareSubjects(subjects);
        }

        default:
            return null;
    }
};

// A question can ask about several things at once.
const retrieveData = async (requests) => {
    return await Promise.all(
        requests.map(async request => ({
            topic: request.topic,
            data: await retrieveOne(request)
        }))
    );
};

// Scans the already-retrieved results for real, existing images
// (a faculty member's uploaded photo, a facility's uploaded photos)
// and returns them as a flat, vetted list. This is the ONLY source the
// answer step is allowed to pull an image URL from — it never lets
// the model type out a URL itself, the same "ground real data, don't
// trust free text" rule used everywhere else in this pipeline.
const collectImageCandidates = (results) => {

    const candidates = [];

    for (const result of results) {

        const items = Array.isArray(result.data)
            ? result.data
            : (result.data ? [result.data] : []);

        for (const item of items) {

            if (result.topic === "faculty" && item?._id && item?.profileImage?.contentType) {
                candidates.push({
                    label: `Photo of ${item.name}`,
                    url: `/faculty/id/${item._id}/image`
                });
            }

            // A department's headOfDepartment is itself a (populated)
            // faculty record, carrying its own profileImage — this is
            // a different data path from the "faculty" topic above, so
            // it needs its own check rather than being covered by it.
            if (result.topic === "department") {
                const hod = item?.headOfDepartment;
                if (hod?._id && hod?.profileImage?.contentType) {
                    candidates.push({
                        label: `Photo of ${hod.name} (HOD, ${item.name})`,
                        url: `/faculty/id/${hod._id}/image`
                    });
                }
            }

            // A facility has up to 3 uploaded photos, each served at
            // its own position. ?v=<updatedAt> changes whenever the
            // facility is edited, so a replaced photo never shows a
            // stale cached copy (the image route is cached for a day).
            if (result.topic === "facility" && item?._id && Array.isArray(item.images)) {

                const version = item.updatedAt ? `?v=${new Date(item.updatedAt).getTime()}` : "";
                const photoCount = item.images.length;

                item.images.forEach((image, index) => {

                    if (!image?.contentType) {
                        return;
                    }

                    candidates.push({
                        label: photoCount > 1
                            ? `Photo ${index + 1} of ${photoCount} of ${item.name}`
                            : `Photo of ${item.name}`,
                        url: `/facility/${item._id}/images/${index}${version}`
                    });
                });
            }
        }
    }

    return candidates;
};

module.exports = {
    retrieveData,
    collectImageCandidates
};