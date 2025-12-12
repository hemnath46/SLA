import { useEffect, useState } from "react";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("/doctors.json") // dummy API
      .then(res => res.json())
      .then(data => setDoctors(data));
  }, []);

  return (
    <div>
      <h2>Available Doctors</h2>
      <ul>
        {doctors.map(doc => (
          <li key={doc.id}>
            {doc.name} - {doc.speciality}
          </li>
        ))}
      </ul>
    </div>
  );
}