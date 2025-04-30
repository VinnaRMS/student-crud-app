import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CookiesProvider } from 'react-cookie';

import StudentForm from './components/StudentForm.jsx';
import Dashboard from './components/Dashboard.jsx';
import StudentList from './components/StudentList.jsx';
import AdminLogin from './components/AdminLogin.jsx';
import { getStudentById } from './model/studentcrud'; 
import AuthGuard from './components/AuthGuard.jsx'; // You need to create this if not existing

let routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', loader: () => redirect("home") },
      { path: 'home', element: <Dashboard /> },
      { path: 'showstudents', element: <StudentList /> },
      { path: 'adminlogin', element: <AdminLogin /> },
      {
        path: 'addstudent',
        element: (
          <AuthGuard>
            <StudentForm />
          </AuthGuard>
        )
      },
      {
        path: 'updatestudent/:studentId',
        element: <StudentForm />,
        loader: ({ params }) => {
          return getStudentById(params.studentId);
        }
      }
    ]
  }
];

const crudrouter = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <CookiesProvider>
    <RouterProvider router={crudrouter} />
  </CookiesProvider>
);
