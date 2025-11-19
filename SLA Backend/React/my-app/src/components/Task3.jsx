import { useState } from "react";

function Task3() {
  const [speed, setSpeed] = useState("");

  const checkSpeed = () => {
    const value = Number(speed);

    if (value > 80) {
      alert("Over Speed ");
    } else if (value >= 40 && value <= 80) {
      alert("Normal Speed ");
    } else if (value > 0 && value < 40) {
      alert("Too Slow ");
    } else {
      alert("Invalid Speed");
    }
  };

  return (
    <>
      <h2>Vehicle Speed Check</h2>
      <input
        type="number"
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
        placeholder="Enter speed"
      />
      <button onClick={checkSpeed}>Check</button>
    </>
  );
}

export default Task3;
