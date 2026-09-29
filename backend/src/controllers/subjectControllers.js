const subjectServices = require("../services/subjectServices");
const success = require("../utils/successResponseUtil");
const ApiError = require("../utils/ApiError");


exports.createSubject = async (req, res) => {
        const createdSubject = await subjectServices.createSubject(req.body);

        return success(res, 201, "Subject created successfully", createdSubject);
};


exports.getSubjects = async (req, res) => {
        const subjects = await subjectServices.getSubjects();

        return success(res, 200, "Subjects fetched successfully", subjects );
};

exports.getDepartmentNames = async (req, res) => {
        const departments = await subjectServices.getDepartmentNames();

        return success(res, 200, "Department names fetched successfully", departments );
};

exports.getSubjectTypes = async (req, res) => {
        const subjectTypes = await subjectServices.getSubjectTypes();

        return success(res, 200, "SubjectTypes fetched successfully", subjectTypes );
};


exports.getSubjectById = async (req, res) => {
    
        const subject = await subjectServices.getSubjectById(req.params.id);

        return success(res, 200, "Subject fetched successfully", subject );

};


exports.updateSubject = async (req, res) => {
        const updatedSubject = await subjectServices.updateSubject(req);
        return success(res, 200, "Subject updated successfully", updatedSubject);
};


exports.deleteSubject = async (req, res) => {
        const deletedSubject = await subjectServices.deleteSubject(req.params.id);

        return success(res, 200, "Subject deleted successfully", deletedSubject );
};




exports.searchSubjects = async (req, res) => {
        const subjects = await subjectServices.searchSubjects(req.body);

        return success(res, 200, "Subjects searched successfully", subjects );
};