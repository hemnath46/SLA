import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "20px", background: "#eee" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/doctors">Doctors</Link> |{" "}
      <Link to="/book">Book Appointment</Link> |{" "}
      <Link to="/appointments">My Appointments</Link>
    </nav>
  );
}