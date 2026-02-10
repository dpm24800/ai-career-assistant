import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { testML } from "./services/mlService.js";
import { connectDB } from "./config/db.js";
import resumeRoutes from "./routes/resumeRoutes.js";

dotenv.config();
connectDB();

const app = express();   // ✅ create app FIRST

app.use(cors());
app.use(express.json());

app.use("/api/resume", resumeRoutes);   // ✅ now valid

app.get("/", (req,res)=>{
  res.send("Node API running");
});

app.get("/ml-test", async (req,res)=>{
  const result = await testML();
  res.json(result);
});

app.listen(5000, ()=>{
  console.log("Server running on port 5000");
});
