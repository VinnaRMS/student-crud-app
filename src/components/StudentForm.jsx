import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams, useLocation } from "react-router-dom";
import { addStudent, updateStudent } from "../model/studentcrud";

function StudentForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const param = useParams();

  const grades = [
    { gradeId: "1", gradeName: "Grade 1" },
    { gradeId: "2", gradeName: "Grade 2" },
    { gradeId: "3", gradeName: "Grade 3" },
    { gradeId: "4", gradeName: "Grade 4" },
    { gradeId: "5", gradeName: "Grade 5" },
    { gradeId: "6", gradeName: "Grade 6" },
    { gradeId: "7", gradeName: "Grade 7" },
    { gradeId: "8", gradeName: "Grade 8" }
  ];
  
  const sections = ["A", "B", "C", "D"];
  const studentData = useLoaderData(); // Available when updating

  function getInitialState() {
    if (location.pathname.includes("add")) {
      return {
        studentName: "",
        rollNo: "",
        grade: grades[0].gradeId,
        section: sections[0],
        admissionDate: "",
        profilePic: ""
      };
    } else {
      return studentData;
    }
  }

  const [student, setStudent] = useState(() => getInitialState());

  function handleInputChange(event) {
    setStudent({
      ...student,
      [event.target.id]: event.target.value
    });
  }

  async function addNewStudent(event) {
    event.preventDefault();
    const data = await addStudent(student);
    if (data === "Not Found")
      alert("Something went wrong while adding student.");
    else {
      alert(`Student added successfully!`);
      navigate("/showstudents");
    }
  }

  async function updateExistingStudent(event) {
    event.preventDefault();
    const data = await updateStudent(student);
    if (data === "Not Found")
      alert("Something went wrong while updating student.");
    else {
      alert(`Student updated successfully!`);
      navigate("/showstudents");
    }
  }

  return (
    <>
      <h4 className="text-center">
        {location.pathname.includes("add") ? "ADD STUDENT" : "UPDATE STUDENT"}
      </h4>
      <div className="d-flex justify-content-center p-3">
        <form
          className="bg-info w-50 p-3 text-white rounded"
          onSubmit={location.pathname.includes("add") ? addNewStudent : updateExistingStudent}
        >
          {/* Input Fields */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" id="studentName" value={student.studentName} onChange={handleInputChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Roll Number</label>
            <input type="number" id="rollNo" value={student.rollNo} onChange={handleInputChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Grade</label>
            <select id="grade" value={student.grade} onChange={handleInputChange} className="form-select" required>
              {grades.map((g, idx) => (
                <option key={idx} value={g.gradeId}>
                  {g.gradeName}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Section</label>
            <select id="section" value={student.section} onChange={handleInputChange} className="form-select" required>
              {sections.map((sec, idx) => (
                <option key={idx} value={sec}>
                  {sec}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Admission Date</label>
            <input type="date" id="admissionDate" value={student.admissionDate} onChange={handleInputChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Profile Picture URL</label>
            <input type="text" id="profilePic" value={student.profilePic} onChange={handleInputChange} className="form-control" required />
          </div>

          <button type="submit" className="btn btn-primary mx-3">
            {location.pathname.includes("add") ? "ADD" : "UPDATE"}
          </button>
          <button type="reset" className="btn btn-warning">RESET</button>
        </form>
      </div>
    </>
  );
}

export default StudentForm;
