# Smart EV Hub

AI-powered EV fleet management system using Gemini 3 and IoT simulation.  
Smart EV Hub integrates IoT sensor data from electric vehicles (EVs) with the Gemini 3 API to optimize battery usage, maintenance, and route planning. It provides actionable insights through a real-time dashboard and natural language queries.

## Features
- **IoT Sensor Integration:** Tracks battery levels, motor status, temperature, and location for EVs.
- **Predictive Maintenance:** Gemini 3 predicts potential vehicle issues before they occur.
- **Smart Charging Optimization:** Recommends optimal charging times and routes based on battery health and traffic.
- **Interactive Dashboard:** Visualizes EV status, energy consumption, and recommendations.
- **Natural Language Queries:** Ask questions like “Which vehicle needs charging today?” and receive AI-generated insights.

## Backend Setup

### 1. Install Dependencies
```bash
cd backend
npm init -y
npm install express body-parser node-fetch dotenv
