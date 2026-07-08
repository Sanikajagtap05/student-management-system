import { useParams, Link } from "react-router-dom";
import students from "../data/students";

function StudentDetails() {

  const { id } = useParams();

  const student = students.find((s) => s.id === Number(id));

  if (!student) {
    return (
      <div className="container py-5 text-center">
        <h2>Student Not Found</h2>

        <Link
          to="/students"
          className="btn btn-primary mt-3"
        >
          Back
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <div className="card shadow-lg border-0">

        <div className="row g-0">

          <div className="col-md-4 text-center p-4">

            <img
              src={student.image}
              alt={student.name}
              className="img-fluid rounded-circle border border-3 border-primary"
              style={{
                width: "220px",
                height: "220px",
                objectFit: "cover"
              }}
            />

            <h3 className="mt-3">{student.name}</h3>

            <span
              className={`badge ${
                student.status === "Pass"
                  ? "bg-success"
                  : "bg-danger"
              }`}
            >
              {student.status}
            </span>

          </div>

          <div className="col-md-8 p-4">

            <h3 className="text-primary mb-4">
              Student Information
            </h3>

            <table className="table">

              <tbody>

                <tr>
                  <th>Roll Number</th>
                  <td>{student.roll}</td>
                </tr>

                <tr>
                  <th>Department</th>
                  <td>{student.department}</td>
                </tr>

                <tr>
                  <th>Semester</th>
                  <td>{student.semester}</td>
                </tr>

                <tr>
                  <th>Age</th>
                  <td>{student.age}</td>
                </tr>

                <tr>
                  <th>Gender</th>
                  <td>{student.gender}</td>
                </tr>

                <tr>
                  <th>Email</th>
                  <td>{student.email}</td>
                </tr>

                <tr>
                  <th>Phone</th>
                  <td>{student.phone}</td>
                </tr>

                <tr>
                  <th>Address</th>
                  <td>{student.address}</td>
                </tr>

                <tr>
                  <th>Attendance</th>
                  <td>{student.attendance}</td>
                </tr>

                <tr>
                  <th>Marks</th>
                  <td>{student.marks}</td>
                </tr>

              </tbody>

            </table>

            <Link
              to="/students"
              className="btn btn-primary mt-3"
            >
              ← Back
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default StudentDetails;