function About() {
  return (
    <div
      className="container"
      style={{
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <h1
        className="text-center"
        style={{
          color: "#0d6efd",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        About Student Management System
      </h1>

      <p
        className="text-center"
        style={{
          fontSize: "18px",
          color: "#555",
          marginBottom: "40px",
        }}
      >
        A React-based Student Management System developed to learn the
        fundamentals of React and Bootstrap.
      </p>

      <div className="row g-4">

        {/* Project */}
        <div className="col-md-4">
          <div
            className="card text-center shadow"
            style={{
              border: "none",
              borderRadius: "15px",
              padding: "20px",
            }}
          >
            <i
              className="bi bi-mortarboard-fill"
              style={{
                fontSize: "50px",
                color: "#0d6efd",
              }}
            ></i>

            <h4 className="mt-3">Project</h4>

            <p>
              Manage student records with features like Add, Edit, Delete,
              Search, Filter, and View Details.
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="col-md-4">
          <div
            className="card text-center shadow"
            style={{
              border: "none",
              borderRadius: "15px",
              padding: "20px",
            }}
          >
            <i
              className="bi bi-code-slash"
              style={{
                fontSize: "50px",
                color: "#198754",
              }}
            ></i>

            <h4 className="mt-3">Technologies</h4>

            <p>
              React, Vite, Bootstrap 5, React Router DOM, JavaScript, HTML,
              and CSS.
            </p>
          </div>
        </div>

        {/* Learning */}
        <div className="col-md-4">
          <div
            className="card text-center shadow"
            style={{
              border: "none",
              borderRadius: "15px",
              padding: "20px",
            }}
          >
            <i
              className="bi bi-lightbulb-fill"
              style={{
                fontSize: "50px",
                color: "#ffc107",
              }}
            ></i>

            <h4 className="mt-3">React Concepts</h4>

            <p>
              Components, Props, useState, map(), Routing, Forms, Search,
              Filtering, CRUD Operations and Conditional Rendering.
            </p>
          </div>
        </div>

      </div>

      <div
        className="card shadow mt-5"
        style={{
          border: "none",
          borderRadius: "15px",
          padding: "30px",
        }}
      >
        <h3
          className="text-center mb-4"
          style={{
            color: "#0d6efd",
          }}
        >
          Project Features
        </h3>

        <div className="row">

          <div className="col-md-6">
            <ul style={{ fontSize: "18px", lineHeight: "35px" }}>
              <li>Student List</li>
              <li>Add Student</li>
              <li>Edit Student</li>
              <li>Delete Student</li>
              <li>Search Student</li>
            </ul>
          </div>

          <div className="col-md-6">
            <ul style={{ fontSize: "18px", lineHeight: "35px" }}>
              <li>Department Filter</li>
              <li>Student Details</li>
              <li>Responsive Design</li>
              <li>Bootstrap 5 UI</li>
              <li>React Router Navigation</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;