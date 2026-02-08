import requests
import time
import random

# Backend URL
BACKEND_URL = "http://localhost:5000/ev_data"

# Example fleet of 5 EVs
vehicle_ids = ["EV001", "EV002", "EV003", "EV004", "EV005"]

def generate_ev_data():
    ev_data = []
    for vid in vehicle_ids:
        ev_data.append({
            "vehicle_id": vid,
            "battery_level": random.randint(20, 100),  # percentage
            "temperature": random.randint(20, 45),    # °C
            "motor_status": random.choice(["OK", "Check"]),
            "location": {
                "lat": round(random.uniform(12.90, 13.10), 5),
                "lon": round(random.uniform(77.55, 77.70), 5)
            }
        })
    return ev_data

if __name__ == "__main__":
    while True:
        data = generate_ev_data()
        try:
            response = requests.post(BACKEND_URL, json=data)
            if response.status_code == 200:
                print("Sent EV data successfully.")
            else:
                print("Failed to send data:", response.status_code)
        except Exception as e:
            print("Error:", e)
        time.sleep(5)  # send data every 5 seconds
