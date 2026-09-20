const departmentServices = require("../departmentServices");
const facultyServices = require("../facultyServices");
const Event = require("../../models/event");

// Fetches real data for the classified topic using the project's
// existing CRUD services only. Returns null when nothing relevant
// exists, so the response layer can say so instead of guessing.
const retrieveData = async (classification) => {

    const { topic, departmentCode, facultyNameQuery } = classification;

    switch (topic) {

        case "department":
            return departmentCode
                ? await departmentServices.getDepartmentsByCode({ code: departmentCode })
                : await departmentServices.getDepartments();

        case "faculty": {
            // facultyServices.searchFaculty does a case-insensitive,
            // partial match on name, so "sweta" finds "Prof. Sweta
            // Kumari" regardless of title or exact phrasing.
            if (facultyNameQuery) {
                return await facultyServices.searchFaculty({ search: facultyNameQuery });
            }

            if (departmentCode) {
                return await facultyServices.searchFaculty({ department: departmentCode });
            }

            return await facultyServices.getFaculties();
        }

        case "event":
            return await Event.find().sort({ date: 1 });

        // "unknown" covers greetings, small talk, and anything this
        // project has no data model for (notices, admissions, etc).
        default:
            return null;
    }
};

module.exports = { retrieveData };
