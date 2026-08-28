// imports 
const intentKeywords = require("../../utils/intentKeywordsUtil");

function detectIntent(extractedKeywords){
    // Calculate how many keywords from the question
    // match each known intent.
    const intentsWithScore = Object.entries(intentKeywords).map(([intentName, intentWords]) => {

        const matchedKeywords = extractedKeywords.filter(keyword => intentWords.includes(keyword));

        const score = matchedKeywords.length;

        return {
            intent: intentName,
            score,
            matchedKeywords
        };
    });

    // Highest-scoring intent comes first.
    const rankedIntents = intentsWithScore.sort((a,b) => b.score - a.score);
    
    // No useful intent was detected.
    if(!rankedIntents.length || (rankedIntents[0].score)===0){
        return null;
    }
    
    return rankedIntents[0];
}

module.exports =  detectIntent;