1️⃣ frontend/package.json
{
  "name": "frontend",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.6.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^3.1.0",
    "vite": "^5.0.0"
  }
}

2️⃣ frontend/index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Smart EV Hub</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

3️⃣ frontend/src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./Dashboard.jsx";
import "./index.css"; // optional, you can create an empty file

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);

4️⃣ frontend/src/Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Gemini insights from backend
  const fetchInsights = async () => {
    try {
      const response = await axios.get("http://localhost:5000/ev_insights");
      setInsights(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching insights:", error);
      setLoading(false);
    }
  };

  // Fetch every 10 seconds
  useEffect(() => {
    fetchInsights();
    const interval = setInterval(fetchInsights, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Smart EV Hub Dashboard</h1>
      {loading ? (
        <p>Loading insights...</p>
      ) : insights.length === 0 ? (
        <p>No EV data available yet.</p>
      ) : (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Vehicle ID</th>
              <th>Status</th>
              <th>Recommendation</th>
            </tr>
          </thead>
          <tbody>
            {insights.map((ev, idx) => (
              <tr key={idx}>
                <td>{ev.vehicle_id}</td>
                <td>{ev.status}</td>
                <td>{ev.recommendation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;

5️⃣ Optional: frontend/src/index.css
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
}
table {
  border-collapse: collapse;
  width: 100%;
}
th {
  background-color: #007bff;
  color: white;
}
td, th {
  padding: 10px;
  text-align: left;
}
