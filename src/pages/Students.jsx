import { useState } from "react";
import StudentCard from "../components/StudentCard";
import SearchBar from "../components/SearchBar";
import studentsData from "../data/students";

function Students() {
  const [students] = useState(studentsData);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div
      className="container"
      style={{
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <h2
        className="text-center"
        style={{
          color: "#0d6efd",
          fontWeight: "bold",
          marginBottom: "40px",
          fontSize: "40px",
        }}
      >
        Student List
      </h2>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="row">
        {students.map((student) => (
          <div
            className="col-lg-4 col-md-6 mb-4"
            key={student.id}
          >
            <div
              style={{
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <StudentCard student={student} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;