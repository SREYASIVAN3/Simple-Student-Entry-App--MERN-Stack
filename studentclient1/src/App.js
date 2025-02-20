import axios from "axios";
import Header from "./Component/Header";
//import  Content from "./Component/Content";
//import Footer from "./Component/Footer";
import { useEffect,useState } from "react";
function App()
    {
        const [students,setStudents]=useState([])
        const [instud,setInstud]=useState(false)
        useEffect(()=>{
           getStudents();
    },[])
    const getStudents=async()=>{
        const res=await axios.get("http://127.0.0.1:4000/students")
        //console.log(res.data.students);
        setStudents(res.data.students);
    }
    //console.log(students);
    const insertToDB= async (students,file)=>{

        let formdata=new FormData();
        formdata.append("file",file)
        const res=await axios.post("http://127.0.0.1:4000/students",students)
        console.log(res);
        
        const res1=await axios.post("http://127.0.0.1:4000/student/upload",formdata)
        console.log(res.data.msg);
        console.log(res1.data.msg);
        if(res.data.msg==="Created" && res1.data.msg==="Uploaded")
            setInstud(true)
        getStudents();
    }
    const updateStudent=async (student)=>{
        const res=await axios.put(`http://127.0.0.1:4000/student/${student._id}`,student)
        console.log(res);
        getStudents();
        
    }

    const deleteStudent=async(id)=>{
        const res=await axios.delete(`http://127.0.0.1:4000/student/${id}`);
       // console.log(res);
        getStudents();
        if(res.data.message==="Deleted")
           alert("Student Deleted");
        
        
    }
        return (
            <div>
                <Header stud={students} instud={instud}insertToDB={insertToDB} updateStudent={updateStudent} getStudID={deleteStudent}></Header>
                
            </div>
        )
    }
export default App;