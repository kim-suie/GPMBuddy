const gemini = require("../../config/gemini");

async function generateAIResponse(prompt) {

    const response = await gemini.models.generateContent({
        model: "gemini-3.5-flash-lite",
        contents: prompt
    });

    return response.text;
}

module.exports = generateAIResponse;