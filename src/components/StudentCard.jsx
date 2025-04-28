import { Link } from "react-router-dom";

function StudentCard({ student, deleteStudent }) {
  const fallbackImage = "https://picsum.photos/64?grayscale";
  const imageId = student.id % 20;
  const imageUrl = student.profilePic || `https://randomuser.me/api/portraits/thumb/men/${imageId}.jpg`;

  return (
    <div className="col-md-4 mb-4">
      <div className="card text-dark bg-light h-100 text-center p-2">
        <img
          src={imageUrl}
          alt={student.studentName}
          className="rounded-circle mx-auto mt-3"
          style={{ width: "120px", height: "120px", objectFit: "cover" }}
          onError={(e) => (e.target.src = fallbackImage)}
        />
        <div className="card-body">
          <h5 className="card-title">{student.studentName}</h5>
          <p className="card-text">Roll No: {student.rollNo}</p>
          <p className="card-text">Grade: {student.grade}</p>
          <p className="card-text">Section: {student.section}</p>
        </div>
        <div className="card-body">
          <Link to={`/updatestudent/${student.id}`} className="card-link">EDIT</Link>
          <button onClick={() => deleteStudent(student.id)} className="btn btn-link">DELETE</button>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
