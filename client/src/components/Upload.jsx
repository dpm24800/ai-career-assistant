import { useState } from "react";
import { uploadResume } from "../services/resumeService";

export default function Upload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("resume", file);

    const res = await uploadResume(formData);
    console.log(res.data);
  };

  return (
    <>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleUpload}>Upload Resume</button>
    </>
  );
}
