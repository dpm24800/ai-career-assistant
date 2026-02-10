import axios from "axios";

export const testML = async () => {
  const res = await axios.get("http://localhost:8000/");
  return res.data;
};

export const analyzeResume = async (text) => {
  const res = await axios.post("http://localhost:8000/analyze", {
    text
  });
  return res.data;
};