
function normalizeAndCleanQuestion(question){

    // Convert the question to lowercase and remove
    // unnecessary spaces from the beginning and end.
    const normalizedQuestion = question.toLowerCase().trim();
    // Replace punctuation/special characters with spaces.
    // Using " " instead of "" prevents words from getting merged.
    // Then collapse multiple spaces into one.
    const cleanedQuestion = normalizedQuestion.replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();

    return cleanedQuestion;

};


function extractKeywords(cleanedQuestion){
    // Words that generally do not help in identifying
    // the intent or relevant documents.
    const stopwords = ["can", "you", "me", "the", "a", "an", "is", "are", "about", "please", "tell", "what", "who", "where", "when", "of", "to"];
    // Split the cleaned question into individual words.
    const words = cleanedQuestion.split(" ");
    // Remove stopwords.
    const keywords = words.filter(
        word => !stopwords.includes(word)
    );
    return keywords;
};


function preprocessQuestion(question){

    const cleanedQuestion = normalizeAndCleanQuestion(question);

    const keywords = extractKeywords(cleanedQuestion);

    // Context is the object that will travel through
    // the entire chatbot pipeline.
    return {
        originalQuestion : question,
        cleanedQuestion,
        keywords
    };
};

module.exports = preprocessQuestion;