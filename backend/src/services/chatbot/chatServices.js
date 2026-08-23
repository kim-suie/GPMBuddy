// imports
const preprocessQuestion = require("./preprocessingServices");
const detectIntent = require("./intentServices");
const resolveEntity = require("./entityResolver/entityResolverServices");
const dispatchIntent = require("./dispatcherServices");
const createPrompt = require("./promptServices");
const generateAIResponse = require("./aiResponseServices");


exports.askQuestion = async (question) => {

// context.answer = await geminiService(context);
    // Step 1: Convert the user's question into
    // a structured context.
    const context = preprocessQuestion(question);
    // Step 2: Detect what the user is asking about.
    context.intentDetails = detectIntent(context.keywords);
    // Step 3: Resolve a specific entity if the
    // detected intent requires one.
    context.entity = await resolveEntity(context);
    // Step 4: Send the context to the appropriate
    // chat service according to the detected intent.
    await dispatchIntent(context);

    const prompt = createPrompt(context);
    
    context.answer = await generateAIResponse(prompt);
    
    return context;
}