import { useEffect, useState, useRef } from "react";
import StudentCard from "./StudentCard";
import { getAllStudents, deleteStudentById } from "../model/studentcrud";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loadCount } from "../studentsstore/studentsSlice";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");

  const dispatch=useDispatch();
  const stdcount=useSelector((state)=>state.stdcounter.value);

  const originalStudents = useRef([]);
  const searchQuery = useRef();

  async function loadStudents() {
    const data = await getAllStudents();
    if (data.length === 0) {
      setError("No students found.");
      setStudents(data);
      originalStudents.current=data;
      dispatch(loadCount(data.length))
    } else if (data === "Not Found") {
      setError("Something went wrong.");
    } else {
      setStudents(data);
      originalStudents.current = data;
      dispatch(loadCount(data.length))
    }
  }

  async function deleteStudent(id) {
    if (confirm("Do you really want to delete this student?")) {
      const data = await deleteStudentById(id);
      alert(`Student ${data.studentName} deleted successfully`);
      loadStudents();
    }
  }

  function searchStudent() {
    const query = searchQuery.current.value.toLowerCase();

    const filteredStudents = originalStudents.current.filter(student => {
      return Object.values(student).some(val =>
        String(val).toLowerCase().includes(query)
      );
    });

    setStudents(filteredStudents);
  }

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <>
      <div className="bg-success p-2 d-flex align-items-center gap-3">
        <label className="text-white">Search Students:</label>
        <TextField
          variant="standard"
          placeholder="Search by any field..."
          inputRef={searchQuery}
          onKeyUp={searchStudent}
          fullWidth
        />
      </div>

      <div className="container mt-4">
      <div>
            <label> Number of Students :</label>
            <b > {stdcount}</b>
        </div>
        <h4 className="text-danger">{error}</h4>
        <div className="row">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} deleteStudent={deleteStudent} />
          ))}
        </div>
      </div>
    </>
  );
}

export default StudentList;
