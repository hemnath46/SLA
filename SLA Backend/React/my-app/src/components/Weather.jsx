import { useState } from "react";

function Weather() {
  const [temperature, setTemperature] = useState("");
  const [message, setMessage] = useState("");

  const checkWeather = () => {
    if (temperature === "") {
      setMessage("Please enter temperature");
    } else if (temperature > 30) {
      setMessage("Hot");
    } else {
      setMessage("Cold");
    }
  };

  return (
    <div>
      <h1>{message || "Enter temperature below"}</h1>
      <input
        type="number"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        placeholder="Enter temperature"
      />
      <button onClick={checkWeather}>Check</button>
    </div>
  );
}

export default Weather;
