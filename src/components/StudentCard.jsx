import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material";
import { useCookies } from "react-cookie";

function StudentCard({ student, deleteStudent }) {
  const fallbackImage = "https://picsum.photos/64?grayscale";
  const imageId = student.id % 20;
  const imageUrl = student.profilePic || `https://randomuser.me/api/portraits/thumb/men/${imageId}.jpg`;

  const [cookie] = useCookies();
  const navigate = useNavigate();

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
          <p className="card-title">ID: {student.id}</p>
          <p className="card-text">Roll No: {student.rollNo}</p>
          <p className="card-text">Grade: {student.grade}</p>
          <p className="card-text">Section: {student.section}</p>
          <p className="card-text">Admission Date: {student.admissionDate}</p>
        </div>

        {
          'admin' in cookie ? (
            <div className="card-body">
              <Button
                color="secondary"
                className="mx-2"
                variant="contained"
                to={`/updatestudent/${student.id}`}
                component={Link}
                startIcon={<EditIcon />}
              >
                EDIT
              </Button>
              <Button
                onClick={() => deleteStudent(student.id)}
                color="error"
                variant="contained"
                startIcon={<DeleteIcon />}
              >
                DELETE
              </Button>
            </div>
          ) : (
            <div className="card-body">
              <p className="text-info"><small>Please login to update/delete the student</small></p>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default StudentCard;
