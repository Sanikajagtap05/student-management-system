function StudentCard({ student }) {
  return (
    <div className="card shadow h-100">
      <img
        src={student.image}
        className="card-img-top"
        alt={student.name}
        style={{ height: "250px", objectFit: "cover" }}
      />

      <div className="card-body">

        <h4>{student.name}</h4>

        <p><strong>Roll No:</strong> {student.rollNo}</p>

        <p><strong>Department:</strong> {student.department}</p>

        <p><strong>Age:</strong> {student.age}</p>

        <p><strong>Marks:</strong> {student.marks}</p>

        <h5>
          Status :
          {student.marks >= 35 ? (
            <span className="text-success"> PASS</span>
          ) : (
            <span className="text-danger"> FAIL</span>
          )}
        </h5>

        <button className="btn btn-primary me-2">
          View
        </button>

        <button className="btn btn-warning me-2">
          Edit
        </button>

        <button className="btn btn-danger">
          Delete
        </button>

      </div>
    </div>
  );
}

export default StudentCard;