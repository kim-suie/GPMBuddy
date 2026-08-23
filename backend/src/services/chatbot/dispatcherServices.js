// Chat Services
const faqChatServices = require("./faqChatServices");
const departmentChatServices = require("./departmentChatServices");

async function dispatch(context) {

    const { intentDetails } = context;

    // Intent detection failed.
    if (!intentDetails) {
        return {
            answer: "Sorry, I couldn't understand your question."
        };
    }

    switch (intentDetails.intent) {

        case "department":
            return await departmentChatServices(context);

        case "faq":
            return await faqChatServices(context);

        // case "faculty":
        //     return await facultyChatService(context);

        // case "notice":
        //     return await noticeChatService(context);

        // case "event":
        //     return await eventChatService(context);

        default:
            context.retrievedData = null;
            return context;
    }
}

module.exports = dispatch;