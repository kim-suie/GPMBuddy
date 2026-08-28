const departmentServices = require("../departmentServices");

async function departmentChatService(context) {

    const { entity } = context;

    // No specific department was identified.
    // Therefore, retrieve all departments.
    if (entity.type === null) {
        context.retrievedData = await departmentServices.getDepartments();
        return context;
    }

    // Retrieve department using its code.
    if (entity.type === "code") {
        context.retrievedData =
            await departmentServices.getDepartmentsByCode({
                code: entity.value
            });

        return context;
    }

    // Retrieve department using its name.
    if (entity.type === "name") {
        context.retrievedData =
            await departmentServices.getDepartmentsByName({
                name: entity.value
            });

        return context;
    }

    // Unknown entity type.
    context.retrievedData = null;

    return context;
}

module.exports = departmentChatService;