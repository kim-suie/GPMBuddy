function assignScore(documents, extractedKeywords, field="keywords"){

    const documentsWithScore = documents.map(document => {

        // Find the keywords from the question that also
        // exist in this document.
        const matchedKeywords = extractedKeywords.filter(keyword => document[field].includes(keyword));
        
        return {
            ...document,
            score : matchedKeywords.length
        };
    });

    return documentsWithScore;
}


function rankDocuments(documentsWithScore){
    // Sort from highest score to lowest score.
     return documentsWithScore.sort((a,b) => b.score - a.score);
}


function getBestMatch(rankedDocuments){

    if(!rankedDocuments.length){
        return null;
    }
    return rankedDocuments[0];
}

function rank(documents, extractedKeywords, field="keywords"){

    const documentsWithScore = assignScore(documents, extractedKeywords, field);
    const rankedDocuments = rankDocuments(documentsWithScore);
    
    // Return only the best matching document.
    return getBestMatch(rankedDocuments);
}

module.exports = rank;