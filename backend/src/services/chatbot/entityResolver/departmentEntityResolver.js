const departmentServices = require("../../departmentServices");

async function resolveDepartment(context){

    const { cleanedQuestion, intentDetails } = context;

    // This resolver only handles department intent.
    if(!intentDetails || intentDetails.intent !== "department"){
        return null;
    }

     // Fetch departments so we can check their names and codes.
    const departments = await departmentServices.getDepartments();

    // Try to identify the department using its code first.
    const departmentByCode = departments.find(department => cleanedQuestion.includes(department.code.toLowerCase()));
    if (departmentByCode){
        return {
            type: "code",
            value: departmentByCode.code
        };
    }

    // If the code was not found, try the full department name.
    const departmentByName = departments.find(department => cleanedQuestion.includes(department.name.toLowerCase()));
    if (departmentByName){
        return {
            type: "name",
            value: departmentByName.name
        };
    }

    // Department intent was detected, but no specific
    // department was mentioned.
    return {
        type: null,
        value: null
    };
}

module.exports = resolveDepartment;