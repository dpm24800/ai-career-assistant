import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
  filename: String,
  text: String,
  analysis: Object,
},{timestamps:true});

export default mongoose.model("Resume", ResumeSchema);
