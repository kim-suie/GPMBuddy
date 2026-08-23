const faq = require("../../models/faq");
const rankDocuments = require("./documentRankingServices");

async function faqChatService(context) {

    const { keywords } = context;

    // Retrieve FAQ documents that contain at least one
    // keyword from the user's question.
    const faqs = await faq.find({
        keywords: {
            $in: keywords
        }
    }).lean();

    // No matching FAQ was found.
    if (!faqs.length) {
        context.retrievedData = null;
        return context;
    }

     // Rank the retrieved FAQs and select the best match.
    const bestFAQ = rankDocuments(faqs, keywords);

    context.retrievedData = bestFAQ;

    return context;
}

module.exports = faqChatService;