

import { configureStore } from "@reduxjs/toolkit";
import { studentsReducer } from "./studentsstore/studentsSlice";


const store=configureStore({
    
   reducer: 
    {
    stdcounter:studentsReducer
    } 

});


export default store;

