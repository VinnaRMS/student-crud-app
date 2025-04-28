import axios  from "axios";

const url="http://localhost:3000/students";

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
