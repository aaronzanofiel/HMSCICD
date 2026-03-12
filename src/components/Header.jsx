import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1>Hospital Management System</h1>
      <nav>
        <button className="nav-btn" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="nav-btn" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </nav>
    </header>
  );
};

export default Header;