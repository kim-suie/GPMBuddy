
import api from "./api";

// Get all faculty
export const getFaculty = async () => {
  const response = await api.get("/faculty");
  return response.data;
};

// Get faculty by ID
export const getFacultyById = async (id) => {
  const response = await api.get(`/faculty/id/${id}`);
  return response.data;
};

// Create faculty
export const createFaculty = async (facultyData) => {
  const response = await api.post("/faculty", facultyData);
  return response.data;
};

// Update faculty
export const updateFaculty = async (id, facultyData) => {
  const response = await api.put(`/faculty/${id}`, facultyData);
  return response.data;
};

// Delete faculty
export const deleteFaculty = async (id) => {
  const response = await api.delete(`/faculty/${id}`);
  return response.data;
};

