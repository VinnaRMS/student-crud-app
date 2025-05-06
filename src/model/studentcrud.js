import axios  from "axios";

const url="http://localhost:3000/students";

// request interceptors
axios.interceptors.request.use(
    (request)=>{
        console.log("in request interectpor:", request);
        return request;
    },
    (error)=>{
        console.log("in request interectpor:", error);
        return Promise.reject(error);
    }
);
//response interceptors
axios.interceptors.response.use(
    (response)=>{
        if(Array.isArray(response.data)){
            response.data.sort((std1,std2)=>std1.studentName.localeCompare(std2.studentName));
        }
        console.log("in response interectpor after sorting the array:", response);
        return response;
    },
    (error)=>{
        console.log("in response interectpor:", error);
        return Promise.reject(error);
    }
);

export  async function getAllStudents(){
    try {
        const response=await axios.get(url);
        return response.data;
    } catch(error) {
        console.log(error);
        return error.response.data;
    }
}

export async function deleteStudentById(id){
    try {
        const response=await axios.delete(`${url}/${id}`);
        return response.data;
    } catch(error) {
        console.log(error);
        return error.response.data;
    }
}

export async function addStudent(student){
    try {
        const response=await axios.post(url, student);
        return response.data;
    } catch(error) {
        console.log(error);
        return error.response.data;
    }
}

export async function updateStudent(student){
    try {
        const response=await axios.put(`${url}/${student.id}`, student);
        return response.data;
    } catch(error) {
        console.log(error);
        return error.response.data;
    }
}

export async function getStudentById(id){
    try {
        const response=await axios.get(`${url}/${id}`);
        return response.data;
    } catch(error) {
        console.log(error);
        return error.response.data;
    }
}
