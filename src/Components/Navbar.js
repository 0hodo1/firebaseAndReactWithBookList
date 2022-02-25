import { Link } from "react-router-dom";
import { useLogout } from "../Hooks/useLogout";

function Navbar() {
  const { logout } = useLogout();

  return (
    <nav>
      <h1>Book List Firebase</h1>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
      <li onClick={logout}>Çıkış</li>
    </nav>
  );
}

export default Navbar;
