import api from "./api";

// Send a question to GPM Buddy, optionally with recent conversation
// history so follow-up questions ("her designation", "and hod") can
// be understood. `history` is an array of { question, answer } pairs,
// oldest first.
export const askQuestion = async (question, history = []) => {
  const response = await api.post("/chat", {
    question: question,
    history: history,
  });

  return response.data;
};