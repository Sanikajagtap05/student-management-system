import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h1
          className="display-4 fw-bold text-primary"
          style={{ marginBottom: "20px" }}
        >
          Student Management System
        </h1>

        <p className="lead mt-3">
          Manage student records easily with React.
        </p>

        <Link
          to="/students"
          className="btn btn-primary btn-lg mt-3"
          style={{
            padding: "12px 30px",
            borderRadius: "10px",
            transition: "0.3s",
          }}
        >
          View Students
        </Link>
      </div>

      <div className="row g-4">

        <div className="col-md-4">
          <div
            className="card shadow border-0 h-100"
            style={{
              borderRadius: "15px",
              transition: "0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div className="card-body text-center">
              <h2 style={{ fontSize: "50px" }}>👨‍🎓</h2>
              <h4>Total Students</h4>
              <p>Manage all student records in one place.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card shadow border-0 h-100"
            style={{
              borderRadius: "15px",
              transition: "0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div className="card-body text-center">
              <h2 style={{ fontSize: "50px" }}>➕</h2>
              <h4>Add Students</h4>
              <p>Add new student details using a React form.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card shadow border-0 h-100"
            style={{
              borderRadius: "15px",
              transition: "0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div className="card-body text-center">
              <h2 style={{ fontSize: "50px" }}>🔍</h2>
              <h4>Search & Filter</h4>
              <p>Find students by name and department.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;