import { useState, useEffect } from "react";

export default function MyAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(data);
  }, []);

  const cancelAppt = (id) => {
    const updated = appointments.filter(a => a.id !== id);
    localStorage.setItem("appointments", JSON.stringify(updated));
    setAppointments(updated);
  };

  return (
    <div>
      <h2>My Appointments</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Slot</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map(a => (
            <tr key={a.id}>
              <td>{a.doctor}</td>
              <td>{a.slot}</td>
              <td>
                <button onClick={() => cancelAppt(a.id)}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}