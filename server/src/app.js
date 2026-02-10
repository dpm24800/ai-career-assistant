import express from "express";
import cors from "cors";
import { testML } from "./services/mlService.js";

const app = express();

app.use(cors());
app.use(express.json());

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
