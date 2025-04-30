import { Button } from "@mui/material";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ mainheading }) {
  let [cookie, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();

  function logout() {
    removeCookie("admin");
    alert("You are logged out.");
    navigate("/home");
  }

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="home">{mainheading || "STUDENT CRUD"}</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="home">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="showstudents">SHOW STUDENTS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="addstudent">ADD STUDENT</Link>
            </li>
            <li className="nav-item">
              {
                ('admin' in cookie)
                  ? <Button onClick={logout}>LOGOUT</Button>
                  : <Link className="nav-link" to="adminlogin">ADMIN LOGIN</Link>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
