const chatServices = require("../services/chatbot/chatServices");
const success = require("../utils/successResponseUtil");
const ApiError = require("../utils/ApiError");

exports.askQuestion = async (req, res) => {
    const question = req.body.question;
    const history = req.body.history;

    if (!question || typeof question !== "string" || !question.trim()) {
        throw new ApiError(400, "Question is required!");
    }

    if (history !== undefined && !Array.isArray(history)) {
        throw new ApiError(400, "History must be an array of { question, answer } turns!");
    }

    const generatedAnswer = await chatServices.askQuestion(question, history || []);
    success(res, 200, "Answer generated", generatedAnswer);
}