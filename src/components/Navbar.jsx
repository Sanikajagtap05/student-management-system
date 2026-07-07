import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          Student Management
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

           <li className="nav-item me-4">
  <Link className="nav-link" to="/">
    Home
  </Link>
</li>

<li className="nav-item me-4">
  <Link className="nav-link" to="/students">
    Students
  </Link>
</li>

<li className="nav-item me-4">
  <Link className="nav-link" to="/add-student">
    Add Student
  </Link>
</li>

<li className="nav-item">
  <Link className="nav-link" to="/about">
    About
  </Link>
</li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;