const gemini = require("../../config/gemini");
const departmentServices = require("../departmentServices");
const facultyServices = require("../facultyServices");

const KNOWN_TOPICS = ["department", "faculty", "event", "aboutUs"];
const MAX_HISTORY_TURNS = 6;
const MAX_REQUESTS = 4;

const FALLBACK_CLASSIFICATION = {
    requests: [],
    isGreetingOrSmallTalk: false
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

// Validates one entry of the "requests" array against real DB values,
// discarding anything that doesn't check out rather than trusting it.
const sanitizeRequest = (raw, validDepartmentCodes, validDesignations) => {

    if (!raw || typeof raw !== "object") {
        return null;
    }

    const topic = KNOWN_TOPICS.includes(raw.topic) ? raw.topic : null;

    if (!topic) {
        return null;
    }

    const departmentCode = validDepartmentCodes.includes(raw.departmentCode)
        ? raw.departmentCode
        : null;

    const designationQuery = validDesignations.includes(raw.designationQuery)
        ? raw.designationQuery
        : null;

    const facultyNameQuery = typeof raw.facultyNameQuery === "string" && raw.facultyNameQuery.trim()
        ? raw.facultyNameQuery.trim()
        : null;

    return { topic, departmentCode, facultyNameQuery, designationQuery };
};

// The model is asked for pure JSON, but we defensively pull out the
// first JSON object in the response in case it adds stray text, and
// validate every field before trusting it.
const parseClassification = (rawText, validDepartmentCodes, validDesignations) => {

    if (!rawText) {
        return FALLBACK_CLASSIFICATION;
    }

    const match = rawText.match(/\{[\s\S]*\}/);

    if (!match) {
        return FALLBACK_CLASSIFICATION;
    }

    try {
        const parsed = JSON.parse(match[0]);

        const rawRequests = Array.isArray(parsed.requests) ? parsed.requests : [];

        const requests = rawRequests
            .map(raw => sanitizeRequest(raw, validDepartmentCodes, validDesignations))
            .filter(Boolean)
            .slice(0, MAX_REQUESTS);

        return {
            requests,
            isGreetingOrSmallTalk: parsed.isGreetingOrSmallTalk === true
        };
    } catch (error) {
        return FALLBACK_CLASSIFICATION;
    }
};

// Understands the student's question — which may ask about MORE THAN
// ONE thing at once (e.g. "the principal and the college name") — and
// breaks it into one request per distinct thing, using recent
// conversation history to resolve follow-ups. Only ever allowed to
// pick a department or designation that genuinely exists.
const classifyQuestion = async (question, history = []) => {

    const [departments, designations] = await Promise.all([
        departmentServices.getDepartments(),
        facultyServices.getDesignations()
    ]);

    const validDepartmentCodes = departments.map(department => department.code);
    const validDesignations = designations.filter(Boolean);

    const departmentList = departments
        .map(department => `- code: "${department.code}", name: "${department.name}"`)
        .join("\n") || "(no departments in the database yet)";

    const designationList = validDesignations
        .map(designation => `- "${designation}"`)
        .join("\n") || "(no faculty designations in the database yet)";

    const prompt = `
You are the routing layer for a college campus chatbot backend. You do
not answer the question yourself — you only classify it.

A single student question can ask about MORE THAN ONE thing at once
(e.g. "tell me about the principal and the college name" asks about
BOTH a faculty designation AND general college info). Break the
question into one entry per distinct thing being asked, in the
"requests" array below — do not squash a compound question into a
single topic, and do not silently drop part of it.

Available topics (this is ALL the data the backend can retrieve; do
not pick a topic just because a part of the question sounds college-related):
- "department": a department's name, code, or head of department (HOD)
- "faculty": a faculty member/teacher/professor/principal, either a specific person, everyone in a department, or everyone with a given designation/role
- "event": college events, seminars, workshops, fests
- "aboutUs": general information about the college itself — its name, history, establishment year, address, vision/mission, accreditation, etc.
(If part of the question is about something NOT in this list — notices, admissions, fees, hostel, placements, etc. — simply omit that part; do not invent a topic for it.)

Known departments (copy a "code" EXACTLY if a part of the question refers to one of these, otherwise use null — never invent a code):
${departmentList}

Known faculty designations/roles actually used in the database (copy one EXACTLY if a part of the question asks about a role such as "professors", "the principal", "HOD", "assistant professors", etc., otherwise use null — never invent one):
${designationList}

Recent conversation (use this to resolve pronouns like "her"/"his"/"its"
and short follow-ups like "and the HOD?" or "code of cse" into full,
self-contained requests — the student is continuing the same
conversation, not starting over each time):
${formatHistory(history)}

New student question (may be in English, Hindi, Hinglish, misspelled, or abbreviated):
"""${question}"""

Respond with ONLY a single JSON object, no prose, no markdown fences, in exactly this shape:
{
  "requests": [
    {
      "topic": "department" | "faculty" | "event" | "aboutUs",
      "departmentCode": string or null,
      "facultyNameQuery": string or null,
      "designationQuery": string or null
    }
  ],
  "isGreetingOrSmallTalk": true or false
}

Rules:
- Include one object in "requests" per distinct thing being asked about. A question about just one thing gets exactly one entry. A purely greeting/small-talk message with no factual request gets an empty "requests" array.
- "departmentCode" must be exactly one of the codes listed above, or null.
- "facultyNameQuery" is the name (full or partial, title like "Prof."/"Dr." removed) of a SPECIFIC person, or null if that part of the question is about a role/group rather than one named person.
- "designationQuery" must be exactly one of the designations listed above, or null. Only set this for a role/title/group question, not a named individual.
- "isGreetingOrSmallTalk" is true only for greetings, thanks, goodbyes, or similar small talk with no factual request.
- If the new question is a short follow-up ("her designation", "and hod", "what about me"), reuse the department/person/designation/topic from the conversation above rather than returning an empty "requests" array.
`;

    const response = await gemini.models.generateContent({
        model: "gemini-3.5-flash-lite",
        contents: prompt
    });

    return parseClassification(response.text, validDepartmentCodes, validDesignations);
};

module.exports = { classifyQuestion };