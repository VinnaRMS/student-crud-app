import { Link, Outlet } from "react-router-dom";


function Dashboard(){
    return (
        <div className="p-6 max-w-3xl mx-auto  rounded shadow">
          <h1 className="text-3xl font-bold mb-4">👨‍💼 Student CRUD Dashboard</h1>
          
          <p className="mb-4">
            This dashboard allows you to manage students with the following features:
          </p>
    
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li><strong>Login:</strong> Secure access to the dashboard.</li>
            <li><strong>Create:</strong> Add new student records using a form.</li>
            <li><strong>Read:</strong> View all students in a dynamic table.</li>
            <li><strong>Update:</strong> Edit student details directly from the list.</li>
            <li><strong>Delete:</strong> Remove students with a single click.</li>
          </ul>
    
          <p className="mb-2">
            Built using <strong><a target="_blank" href="https://react.dev/">React</a></strong>, this dashboard provides a simple and efficient interface
            to perform all basic student management operations.
          </p>
          {/* <h4>Employees currently working</h4>
          <nav>
            <Link to="reactemployees">PRIMARY STUDENTS</Link>
            <Link to="angularemployees">SECONDARY STUDENTS</Link>
          </nav>
          <div>
            <h3>Outlet for Childs of home route</h3>
            <Outlet></Outlet>
          </div> */}
        </div>

      );
}

export default Dashboard;
