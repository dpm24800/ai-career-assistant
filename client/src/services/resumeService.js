import { api } from "./api";

export const uploadResume = (formData)=>{
  return api.post("/api/resume/upload", formData);
};
