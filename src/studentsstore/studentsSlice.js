import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const studentsSlice=createSlice({
    name:'studentscount',
    initialState:{
        value: 0
    },
    
    reducers:{
        loadCount:(state, action)=>{
            state.value=action.payload;
        },
    }
});

export const {loadCount}=studentsSlice.actions;
export const studentsReducer=studentsSlice.reducer;