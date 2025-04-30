import { useRef, useState } from "react";
import { checkLogin } from "../model/AdminLogin";
import  Button  from "@mui/material/Button";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";


function AdminLogin(){
    let emailRef=useRef();
    let passwordRef=useRef();
    let navigate=useNavigate();
    const [loginStatus, setStatus]=useState("");
    const[cookie, setCookie, removeCookie]=useCookies();
    function collectDetails(event){
        event.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        const flag=checkLogin(emailRef.current.value,passwordRef.current.value);
        if(flag){
            setCookie("admin", emailRef.current.value);
            setStatus("");
            alert("you are logged in successfully....");
            navigate(-1); 
        }
        else {
            setStatus("incorrect username or password");
        }
    }

    return(
        <>
         <h4 className="text-center">ADMIN LOGIN FORM</h4>
        <h5 className="text-center text-danger"><small>{loginStatus}</small></h5>
         <div className="d-flex justify-content-center p-2 ">
          
            <form className="bg-secondary w-50 p-3" onSubmit={collectDetails}>
                <div className="mb-3">
                    <label htmlFor="emailRef" className="form-label">Email address</label>
                    <input type="email" ref={emailRef} className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="passwordRef" className="form-label">Password</label>
                    <input type="password" ref={passwordRef} className="form-control" />
                </div>
                <Button type="submit" variant="contained" color="success" className="m-2" >LOGIN</Button>
                <Button type="reset" variant="contained" color="success" className="m-2">RESET</Button>
            </form>
        </div>
        </>
    
    );  
}

export default AdminLogin;

