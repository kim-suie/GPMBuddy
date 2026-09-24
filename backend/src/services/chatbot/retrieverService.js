const departmentServices = require("../departmentServices");
const facultyServices = require("../facultyServices");
const aboutUsServices = require("../aboutUsServices");
const facilityServices = require("../facilityServices");
const Event = require("../../models/event");

// Fetches real data for ONE classified request, using the project's
// existing CRUD services only. Returns null when nothing relevant
// exists, so the response layer can say so instead of guessing.
const retrieveOne = async (request) => {

    const {
        topic,
        departmentCode,
        facultyNameQuery,
        designationQuery,
        facilityCategoryQuery,
        facilityNameQuery
    } = request;

    switch (topic) {

        case "department":
            return departmentCode
                ? await departmentServices.findDepartment(departmentCode)
                : await departmentServices.getDepartments();

        case "faculty": {
            // facultyServices.searchFaculty combines name (partial
            // match), department, and designation (exact match)
            // filters together — e.g. "principal of mechanical
            // department" uses department + designation at once.
            if (facultyNameQuery || departmentCode || designationQuery) {
                return await facultyServices.searchFaculty({
                    search: facultyNameQuery || undefined,
                    department: departmentCode || undefined,
                    designation: designationQuery || undefined
                });
            }

            return await facultyServices.getFaculties();
        }

        case "event":
            return await Event.find().sort({ date: 1 });

        case "aboutUs":
            // Singleton document, no filters needed.
            return await aboutUsServices.getAboutUs();

        case "facility": {
            // facilityServices.searchFacilities combines name (partial
            // match), category, and department filters together —
            // e.g. "labs in the CSE department" uses category +
            // department at once.
            if (facilityNameQuery || facilityCategoryQuery || departmentCode) {
                return await facilityServices.searchFacilities({
                    search: facilityNameQuery || undefined,
                    category: facilityCategoryQuery || undefined,
                    department: departmentCode || undefined
                });
            }

            return await facilityServices.getFacilities();
        }

        default:
            return null;
    }
};

// A question can ask about several things at once (e.g. "the
// principal and the college name"); classifierService breaks it into
// one request per distinct thing, and this fetches each one
// independently, in parallel.
const retrieveData = async (requests) => {

    return await Promise.all(
        requests.map(async request => ({
            topic: request.topic,
            data: await retrieveOne(request)
        }))
    );
};

module.exports = { retrieveData };