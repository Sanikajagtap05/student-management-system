import { useState } from "react";

function AddStudent() {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    department: "",
    year: "",
    marks: "",
    image: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(student);

    alert("Student Added Successfully!");

    setStudent({
      name: "",
      age: "",
      department: "",
      year: "",
      marks: "",
      image: "",
    });
  };

  return (
    <div
      className="container"
      style={{
        maxWidth: "700px",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <div
        className="card shadow"
        style={{
          borderRadius: "15px",
          padding: "30px",
        }}
      >
        <h2
          className="text-center"
          style={{
            color: "#0d6efd",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          Add New Student
        </h2>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="mb-3">
            <label className="form-label fw-bold">
              Student Name
            </label>

            <input
              type="text"
              className="form-control"
              name="name"
              value={student.name}
              onChange={handleChange}
              placeholder="Enter student name"
              required
            />
          </div>

          {/* Age */}
          <div className="mb-3">
            <label className="form-label fw-bold">
              Age
            </label>

            <input
              type="number"
              className="form-control"
              name="age"
              value={student.age}
              onChange={handleChange}
              placeholder="Enter age"
              required
            />
          </div>

          {/* Department */}
          <div className="mb-3">
            <label className="form-label fw-bold">
              Department
            </label>

            <select
              className="form-select"
              name="department"
              value={student.department}
              onChange={handleChange}
              required
            >
              <option value="">Select Department</option>
              <option>Computer</option>
              <option>IT</option>
              <option>Mechanical</option>
              <option>Civil</option>
              <option>Electronics</option>
            </select>
          </div>

          {/* Year */}
          <div className="mb-3">
            <label className="form-label fw-bold">
              Year
            </label>

            <select
              className="form-select"
              name="year"
              value={student.year}
              onChange={handleChange}
              required
            >
              <option value="">Select Year</option>
              <option>First Year</option>
              <option>Second Year</option>
              <option>Third Year</option>
              <option>Final Year</option>
            </select>
          </div>

          {/* Marks */}
          <div className="mb-3">
            <label className="form-label fw-bold">
              Marks
            </label>

            <input
              type="number"
              className="form-control"
              name="marks"
              value={student.marks}
              onChange={handleChange}
              placeholder="Enter marks"
              required
            />
          </div>

          {/* Image */}
          <div className="mb-4">
            <label className="form-label fw-bold">
              Image URL
            </label>

            <input
              type="text"
              className="form-control"
              name="image"
              value={student.image}
              onChange={handleChange}
              placeholder="Paste image URL"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{
              fontSize: "18px",
              padding: "10px",
            }}
          >
            Add Student
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddStudent;