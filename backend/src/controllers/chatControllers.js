const chatServices = require("../services/chatbot/chatServices");
const success = require("../utils/successResponseUtil");
const ApiError = require("../utils/ApiError");

exports.askQuestion = async (req, res) => {
    const question = req.body.question;
    const generatedAnswer = await chatServices.askQuestion(question);
    success(res, 200, "Answer generated", generatedAnswer);
}