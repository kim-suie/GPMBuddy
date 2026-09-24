const facilityServices = require("../services/facilityServices");
const success = require("../utils/successResponseUtil");
const ApiError = require("../utils/ApiError");


exports.createFacility = async (req, res) => {
        const createdFacility = await facilityServices.createFacility(req.body);

        return success(res, 201, "Facility created successfully", createdFacility);
};


exports.getFacilities = async (req, res) => {
        const facilities = await facilityServices.getFacilities();

        return success(res, 200, "Facilities fetched successfully", facilities );
};


exports.getFacilityById = async (req, res) => {
    
        const facility = await facilityServices.getFacilityById(req.params.id);

        return success(res, 200, "Facility fetched successfully", facility );

};


exports.updateFacility = async (req, res) => {
        const updatedFacility = await facilityServices.updateFacility(req);
        return success(res, 200, "Facility updated successfully", updatedFacility);
};


exports.deleteFacility = async (req, res) => {
        const deletedFacility = await facilityServices.deleteFacility(req.params.id);

        return success(res, 200, "Facility deleted successfully", deletedFacility );
};



exports.getDepartmentFacilities = async (req, res) => {
        const { departmentId } = req.params;
        const { category } = req.body;

        const departmentFacilities = await facilityServices.getDepartmentFacilities(departmentId, category);

        return success(res, 200, "Department facilities fetched successfully", departmentFacilities);
   
};


exports.searchFacilities = async (req, res) => {
        const facilities = await facilityServices.searchFacilities(req.body);

        return success(res, 200, "Facilities searched successfully", facilities );
};