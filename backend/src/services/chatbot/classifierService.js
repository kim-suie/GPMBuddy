const gemini = require("../../config/gemini");
const departmentServices = require("../departmentServices");

const KNOWN_TOPICS = ["department", "faculty", "event"];
const MAX_HISTORY_TURNS = 6;

const FALLBACK_CLASSIFICATION = {
    topic: "unknown",
    departmentCode: null,
    facultyNameQuery: null,
    isGreetingOrSmallTalk: false
};

// The model is asked for pure JSON, but we defensively pull out the
// first JSON object in the response in case it adds stray text, and
// validate every field before trusting it.
const parseClassification = (rawText, validDepartmentCodes) => {

    if (!rawText) {
        return FALLBACK_CLASSIFICATION;
    }

    const match = rawText.match(/\{[\s\S]*\}/);

    if (!match) {
        return FALLBACK_CLASSIFICATION;
    }

    try {
        const parsed = JSON.parse(match[0]);

        const departmentCode = validDepartmentCodes.includes(parsed.departmentCode)
            ? parsed.departmentCode
            : null;

        return {
            topic: KNOWN_TOPICS.includes(parsed.topic) ? parsed.topic : "unknown",
            departmentCode,
            facultyNameQuery: typeof parsed.facultyNameQuery === "string" && parsed.facultyNameQuery.trim()
                ? parsed.facultyNameQuery.trim()
                : null,
            isGreetingOrSmallTalk: parsed.isGreetingOrSmallTalk === true
        };
    } catch (error) {
        return FALLBACK_CLASSIFICATION;
    }
};

// Renders the last few turns as plain text so the model can resolve
// pronouns ("her", "his") and elliptical follow-ups ("and the HOD?")
// against what was actually asked and answered before.
const formatHistory = (history) => {

    if (!Array.isArray(history) || !history.length) {
        return "(this is the first message in the conversation)";
    }

    return history
        .slice(-MAX_HISTORY_TURNS)
        .map(turn => `Student: ${turn.question}\nAssistant: ${turn.answer}`)
        .join("\n\n");
};

// Understands the student's question (any wording, spelling, or
// language), using recent conversation history to resolve follow-ups,
// and maps it to the topics this backend actually has data for, plus
// any search parameters needed to fetch that data. It is only ever
// allowed to pick a department that genuinely exists.
const classifyQuestion = async (question, history = []) => {

    const departments = await departmentServices.getDepartments();
    const validDepartmentCodes = departments.map(department => department.code);

    const departmentList = departments
        .map(department => `- code: "${department.code}", name: "${department.name}"`)
        .join("\n") || "(no departments in the database yet)";

    const prompt = `
You are the routing layer for a college campus chatbot backend. You do
not answer the question yourself — you only classify it.

Available topics (this is ALL the data the backend can retrieve; do
not pick a topic just because the question sounds college-related):
- "department": a department's name, code, or head of department (HOD)
- "faculty": a faculty member/teacher/professor, either a specific person or everyone in a department
- "event": college events, seminars, workshops, fests
- "unknown": anything else, including greetings, thanks, or requests for things this backend has no data for (notices, admissions, fees, hostel, placements, etc.)

Known departments (copy a "code" EXACTLY if the question refers to one of these, otherwise use null — never invent a code):
${departmentList}

Recent conversation (use this to resolve pronouns like "her"/"his"/"its"
and short follow-ups like "and the HOD?" or "code of cse" into a full,
self-contained classification — the student is continuing the same
conversation, not starting over each time):
${formatHistory(history)}

New student question (may be in English, Hindi, Hinglish, misspelled, or abbreviated):
"""${question}"""

Respond with ONLY a single JSON object, no prose, no markdown fences, in exactly this shape:
{
  "topic": "department" | "faculty" | "event" | "unknown",
  "departmentCode": string or null,
  "facultyNameQuery": string or null,
  "isGreetingOrSmallTalk": true or false
}

Rules:
- "departmentCode" must be exactly one of the codes listed above, or null.
- "facultyNameQuery" is the name (full or partial, title like "Prof."/"Dr." removed) of a specific person, whether named in this message or carried over from the conversation above, or null if none applies.
- "isGreetingOrSmallTalk" is true only for greetings, thanks, goodbyes, or similar small talk with no factual request.
- If the new question is a short follow-up ("her designation", "and hod", "what about me"), reuse the department/person from the conversation above rather than returning null.
`;

    const response = await gemini.models.generateContent({
        model: "gemini-3.5-flash-lite",
        contents: prompt
    });

    return parseClassification(response.text, validDepartmentCodes);
};

module.exports = { classifyQuestion };