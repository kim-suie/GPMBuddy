
import api from "./api";

// Get all uploads
export const getUploads = async () => {
  const response = await api.get("/uploads");
  return response.data;
};

// Get upload by ID
export const getUploadById = async (id) => {
  const response = await api.get(`/uploads/id/${id}`);
  return response.data;
};

// Create upload record
export const createUpload = async (uploadData) => {
  const response = await api.post("/uploads", uploadData);
  return response.data;
};

// Delete upload
export const deleteUpload = async (id) => {
  const response = await api.delete(`/uploads/${id}`);
  return response.data;
};
