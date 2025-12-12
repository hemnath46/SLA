import { useState, useEffect } from "react";

export default function BookAppointment() {
  const [doctors, setDoctors] = useState([]);
  const [doctor, setDoctor] = useState("");
  const [slot, setSlot] = useState("");

  useEffect(() => {
    fetch("/doctors.json")
      .then(res => res.json())
      .then(data => setDoctors(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAppt = {
      id: Date.now(),
      doctor,
      slot
    };

    const oldData = JSON.parse(localStorage.getItem("appointments")) || [];
    oldData.push(newAppt);

    localStorage.setItem("appointments", JSON.stringify(oldData));

    alert("Appointment Booked!");
  };

  return (
    <div>
      <h2>Book Appointment</h2>

      <form onSubmit={handleSubmit}>
        <label>Choose Doctor:</label>
        <select value={doctor} onChange={(e) => setDoctor(e.target.value)}>
          <option value="">Select</option>
          {doctors.map(d => (
            <option key={d.id} value={d.name}>
              {d.name}
            </option>
          ))}
        </select>

        <br /><br />

        <label>Choose Slot:</label>
        <select value={slot} onChange={(e) => setSlot(e.target.value)}>
          <option value="">Select</option>
          <option>10:00 AM</option>
          <option>12:00 PM</option>
          <option>3:00 PM</option>
          <option>6:00 PM</option>
        </select>

        <br /><br />
        <button>Book Now</button>
      </form>
    </div>
  );
}