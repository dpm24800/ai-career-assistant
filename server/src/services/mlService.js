import axios from "axios";

export const testML = async () => {
  const res = await axios.get("http://localhost:8000/");
  return res.data;
};
