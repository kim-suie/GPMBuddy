const { classifyQuestion } = require("./classifierService");
const { retrieveData } = require("./retrieverService");
const { generateAnswer } = require("./responseService");

// `history` is an optional array of prior turns in this conversation:
// [{ question: "...", answer: "..." }, ...], oldest first. The client
// is responsible for sending it back each request (no server-side
// session storage exists in this project yet).
exports.askQuestion = async (question, history = []) => {

    const classification = await classifyQuestion(question, history);
    const retrievedData = await retrieveData(classification);
    const answer = await generateAnswer(question, classification, retrievedData, history);

    return {
        question,
        topic: classification.topic,
        retrievedData,
        answer
    };
};