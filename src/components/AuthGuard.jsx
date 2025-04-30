import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


function AuthGuard({children}){
    const navigate=useNavigate();
    const [cookie, setCookie, removeCookie]=useCookies();
    console.log(cookie); 

    
    useEffect(()=>{
      
       if(!('admin' in cookie)){
            alert("Please login first.....");
            navigate("/adminlogin"); 
       }
        
    },[]);
    
    return (
        <div>
            {'admin' in cookie && children}
        </div>
    );
   
}

export default AuthGuard;