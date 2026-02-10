import Resume from "../models/Resume.js";
import { analyzeResume } from "../services/mlService.js";

export const uploadResume = async (req,res)=>{
  try{
    const fileText = "dummy resume text"; // Day 2 placeholder

    const analysis = await analyzeResume(fileText);

    const resume = await Resume.create({
      filename: req.file.filename,
      text: fileText,
      analysis
    });

    res.json(resume);

  }catch(err){
    res.status(500).json({error:"Upload failed"});
  }
};
