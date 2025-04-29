import { useEffect, useState, useRef } from "react";
import StudentCard from "./StudentCard";
import { getAllStudents, deleteStudentById } from "../model/studentcrud";
import { MenuItem, Select, TextField, Typography } from "@mui/material";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  let originalStudents=useRef([]);
    let searchQuery=useRef();
    let [searchKey, setKey]=useState("id");

  async function loadStudents() {
    const data = await getAllStudents();
    if (data.length === 0) {
      setError("No students found.");
    } else if (data === "Not Found") {
      setError("Something went wrong.");
    } else {
      setStudents(data);
      originalStudents.current=data;
    }
  }

  async function deleteStudent(id) {
    if (confirm("Do you really want to delete this student?")) {
      const data = await deleteStudentById(id);
      alert(`Student ${data.name} deleted successfully`);
      loadStudents();
    }
  }

  function searchStudent(){
    
    const filteredStudents=originalStudents.current.filter((student)=>
        student[searchKey].toLowerCase().includes(searchQuery.current.value.toLowerCase())
    );
    setStudents(filteredStudents); 
}

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <>
    <div className="bg-success p-2">
            <label>Search Students By :   </label>
           
            <Select value={searchKey} onChange={(e)=>setKey(e.target.value)}>
                <MenuItem value="studentName">Student Name</MenuItem>
                <MenuItem value="rollNo">Roll No</MenuItem>
                <MenuItem value="id">ID</MenuItem>
                <MenuItem value="admissionDate">Admission Date</MenuItem>
                <MenuItem value="grade">Grade</MenuItem>
                <MenuItem value="section">Section</MenuItem>
            </Select>
          {/*  use inputRef attribute instead of ref  for below MUI component */}
            <TextField variant="standard"  inputRef={searchQuery} onKeyUp={searchStudent}></TextField>

        </div>
    <div className="container mt-4">
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
