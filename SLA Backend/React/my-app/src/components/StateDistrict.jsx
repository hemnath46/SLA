import { useState } from "react";

function StateDistrict() {
  const data = {
    TamilNadu: ["Chennai", "Vellore", "Madurai", "Coimbatore"],
    Karnataka: ["Bengaluru", "Mysuru", "Mangaluru"],
    Kerala: ["Kochi", "Trivandrum", "Kollam"],
  };

  const [state, setState] = useState("");
  const [districts, setDistricts] = useState([]);

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setState(selectedState);
    setDistricts(data[selectedState] || []);
  };

  return (
    <>
      <h2>State & District Selector</h2>

      {/* State Dropdown */}
      <select onChange={handleStateChange}>
        <option value="">-- Select State --</option>
        {Object.keys(data).map((st, index) => (
          <option key={index} value={st}>
            {st}
          </option>
        ))}
      </select>

      <br /><br />

      {/* District Dropdown */}
      <select>
        <option value="">-- Select District --</option>
        {districts.map((dist, index) => (
          <option key={index} value={dist}>
            {dist}
          </option>
        ))}
      </select>
    </>
  );
}

export default StateDistrict;
