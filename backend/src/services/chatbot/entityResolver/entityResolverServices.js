const resolveDepartment = require("./departmentEntityResolver");

async function resolveEntity(context){

    const intent = context.intentDetails?.intent;

    switch (intent){

        case "department":
            return await resolveDepartment(context);

        // case "faq":
        //     return await resolveFAQ(context);

        default:
            return null;
    }
}

module.exports = resolveEntity;