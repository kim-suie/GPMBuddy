
import api from "./api";

// Send a question to GPM Buddy
export const askQuestion = async (question) => {
  const response = await api.post("/chat", {
    question: question,
  });

  return response.data;
};