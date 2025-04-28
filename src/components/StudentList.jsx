import { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import { getAllStudents, deleteStudentById } from "../model/studentcrud";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  async function loadStudents() {
    const data = await getAllStudents();
    if (data.length === 0) {
      setError("No students found.");
    } else if (data === "Not Found") {
      setError("Something went wrong.");
    } else {
      setStudents(data);
    }
  }

  async function deleteStudent(id) {
    if (confirm("Do you really want to delete this student?")) {
      const data = await deleteStudentById(id);
      alert(`Student ${data.name} deleted successfully`);
      loadStudents();
    }
  }

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div className="container mt-4">
      <h4 className="text-danger">{error}</h4>
      <div className="row">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} deleteStudent={deleteStudent} />
        ))}
      </div>
    </div>
  );
}

export default StudentList;
