
import api from "./api";

// Get all departments
export const getDepartments = async () => {
  const response = await api.get("/department");
  return response.data;
};

// Get department by ID
export const getDepartmentById = async (id) => {
  const response = await api.get(`/department/id/${id}`);
  return response.data;
};

// Get department by name
export const getDepartmentByName = async (name) => {
  const response = await api.get(
    `/department/name/${encodeURIComponent(name)}`
  );
  return response.data;
};

// Get department by code
export const getDepartmentByCode = async (code) => {
  const response = await api.get(
    `/department/code/${encodeURIComponent(code)}`
  );
  return response.data;
};

// Create department
export const createDepartment = async (departmentData) => {
  const response = await api.post("/department", departmentData);
  return response.data;
};

// Update department
export const updateDepartment = async (id, departmentData) => {
  const response = await api.put(`/department/${id}`, departmentData);
  return response.data;
};

// Delete department
export const deleteDepartment = async (id) => {
  const response = await api.delete(`/department/${id}`);
  return response.data;
};