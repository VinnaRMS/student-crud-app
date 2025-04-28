import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import StudentForm from './components/StudentForm.jsx';
import Dashboard from './components/Dashboard.jsx';
import StudentList from './components/StudentList.jsx';
import AdminLogin from './components/AdminLogin.jsx';
import { getStudentById } from './model/studentcrud'; 

let routes=[
  {
      path :'/',
      element:<App></App>,
      children:[
          { path:'', loader:()=>redirect("home") },
          { path:'home', element:<Dashboard></Dashboard> },
          { path:'showstudents', element:<StudentList></StudentList> },
          { path:'adminlogin', element:<AdminLogin></AdminLogin> },
          { path:'addstudent', element:<StudentForm></StudentForm> },
          {
            path:'updatestudent/:studentId', 
            element:<StudentForm></StudentForm>,
            loader: ({params}) => {
                return getStudentById(params.studentId); 
            }
          }
      ]
  }
];


const crudrouter=createBrowserRouter(routes); //Router

// js - DOM : methods
// in strictmode components is getting mounted 2 times for resolving issues may occur in first render
createRoot(document.getElementById('root')).render(
  <RouterProvider router={crudrouter}>
  </RouterProvider>
);