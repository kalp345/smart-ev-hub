// backend/server.js

import express from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config(); // Load Gemini API key from .env

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Store EV data
let evDataStore = [];

// Receive IoT sensor data
app.post("/ev_data", (req, res) => {
  evDataStore = req.body;
  console.log("Received EV data:", evDataStore);
  res.sendStatus(200);
});

// Get insights from Gemini API
app.get("/ev_insights", async (req, res) => {
  if (evDataStore.length === 0) {
    return res.json({ message: "No EV data available yet." });
  }

  // Prompt for Gemini 3
  const prompt = `
You are an AI assistant analyzing EV fleet data.
Vehicle data: ${JSON.stringify(evDataStore)}
Provide battery optimization, maintenance predictions, and route recommendations.
Return as JSON: [{vehicle_id, recommendation, status}].
`;

  try {
    const response = await fetch("https://api.gemini3.google.com/v1/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GEMINI_API_KEY}`
      },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();
    res.json(data);

  } catch (error) {
    console.error("Gemini API error:", error);
    res.status(500).json({ error: "Gemini API request failed" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});

