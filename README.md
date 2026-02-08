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
2. Add Gemini API Key

Create a .env file in /backend with:

GEMINI_API_KEY=your_gemini_api_key_here


Make sure .env is listed in .gitignore so your API key isn’t public.

3. Run Backend
node server.js


The backend runs at http://localhost:5000
.
It receives IoT data via POST /ev_data and returns Gemini insights via GET /ev_insights.

Frontend Setup

Navigate to the frontend folder:

cd frontend
npm install
npm run dev


Open http://localhost:5173
 in your browser to view the dashboard.

Simulate IoT EV Data

Run the Python script to send simulated EV data to the backend:

python simulate_ev_data.py

Notes

The backend communicates with Gemini 3 using the API key in .env.

Frontend dashboard fetches live insights from the backend.

Ensure both backend and frontend are running for full functionality.

The simulator script generates sample EV data for demonstration.

License

MIT License

---

### ✅ **Instructions:**
1. Go to your repo → `README.md` → click **pencil icon** to edit.  
2. Delete old content and **paste the above text**.  
3. Scroll down → **Commit changes** → commit directly to **main branch**.  

---

After this, your README will be **complete and fully submission-ready**.  

If you want, I can **also write the ready-to-paste Devpost “Gemini 3 Integration Description” and submission summary** next, so your project is completely ready for the hackathon.  

Do you want me to do that?


---

### ✅ **Instructions:**
1. Go to your repo → `README.md` → click **pencil icon** to edit.  
2. Delete old content and **paste the above text**.  
3. Scroll down → **Commit changes** → commit directly to **main branch**.  

---

After this, your README will be **complete and fully submission-ready**.  

If you want, I can **also write the ready-to-paste Devpost “Gemini 3 Integration Description” and submission summary** next, so your project is completely ready for the hackathon.  

Do you want me to do that?
