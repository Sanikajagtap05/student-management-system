function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#112D4E",
        color: "white",
        marginTop: "60px",
        padding: "40px 0 20px",
      }}
    >
      <div className="container">
        <div className="row text-center">

          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">Student Management</h4>
            <p>
              A simple React application to manage student records efficiently.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <p>🏠 Home</p>
            <p>🎓 Students</p>
            <p>➕ Add Student</p>
            <p>ℹ️ About</p>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Technologies</h5>
            <p>React + Vite</p>
            <p>Bootstrap 5</p>
            <p>React Router DOM</p>
          </div>

        </div>

        <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />

        <p
          className="text-center mb-0"
          style={{
            fontSize: "15px",
          }}
        >
          © 2026 Student Management System | Developed by <strong>Sanika Jagtap</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;