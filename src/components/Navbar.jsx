import React from 'react';
import { Link } from 'react-router-dom'; 
// h4 : JSX, {heading } : javascript intergration in jsx
function Navbar(){
  const heading="navbar";
    return(
      <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">STUDENT CRUD</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link" href="#">HOME</a> */}
              <Link className="nav-link" to="home">HOME</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">SHOW STUDENTS</a> */}
              <Link className="nav-link" to="showstudents">SHOW STUDENTS</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">ADD STUDENT</a> */}
              <Link className="nav-link" to="addstudent">ADD STUDENTS</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">ADMIN LOGIN</a> */}
              <Link className="nav-link" to="adminlogin">ADMIN LOGIN</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
  export default Navbar;

