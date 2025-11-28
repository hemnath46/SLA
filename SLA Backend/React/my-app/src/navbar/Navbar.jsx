import { Link } from "react-router-dom";
function Navbar() {
return (
<nav className="flex gap-6 bg-white p-4 shadow-md text-lg font-semibold">
<Link to="/home">Home</Link>
<Link to="/profile">Profile</Link>
<Link to="/about">About</Link>
</nav>
);
}
export default Navbar;