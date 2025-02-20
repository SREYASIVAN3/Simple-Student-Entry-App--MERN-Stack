import React,{useState} from 'react';
import './Info.css'
function Info(props){
    //console.log(props.stud);
    const[studEdit,setStudEdit]=useState(false)
    let [_id,setID]=useState('');
    let[sName,setSName]=useState('');
    let[sDept,setSDept]=useState('');
    let[sEmail,setSEmail]=useState('');
    let[sMarks,setSMarks]=useState('');
    let[instud,setInStud]=useState(false);
    function deleteAStud(id){
        //console.log(id);
        props.getStudID(id);
    }
    function updateAStud(stud){
       setStudEdit(true)
       setSName(stud.stud_name)
       setSDept(stud.stud_dept)
       setSEmail(stud.emailid)
       setSMarks(stud.marks)
       setID(stud._id)
        
    }
    

    function sNameHandle(event){
        setSName(event.target.value)
        setInStud(false)

    }
    function sDeptHandle(event){
       setSDept(event.target.value)

    }
    function sEmailHandle(event){
        setSEmail(event.target.value)

    }
    function sMarksHandle(event){
       setSMarks(event.target.value)

    }
   

    

    function updateStudents(event){
        event.preventDefault();
        let students={
            _id:_id,
            stud_name:sName,
            stud_dept:sDept,
            emailid:sEmail,
            marks:sMarks,
            
        }
        console.log(students);
        props.updateStudent(students)
        setSName('');
        setSDept('');
        setSEmail('');
        setSMarks('');
       setInStud(props.instud)
       setStudEdit(false)
        

    }
    return(
        <div>
            <table className="t1 t3">
                <thead>
                <tr className="t1 t3">
                    <th>Student Name</th><th>Student Department</th><th>Student Mail Id </th><th>Student Marks</th><th>Student Photo</th><th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                    props.stud.map(s=>{
                    return(
                   
                    <tr className="t2" key={s._id}>
                    <td>{s.stud_name}</td>
                    <td>{s.stud_dept}</td>
                    <td>{s.emailid}</td>
                    <td>{s.marks}</td>
                    <td>
                        <img src={`http://127.0.0.1:4000/${s.simage}`}alt='No preview'></img>
                        </td>
                        <td>
                            <button type="button" className="btn btn-outline-warning  btn-sm" onClick={()=>updateAStud(s)}>Update</button>
                        </td>
                    <td> 
                        <button type="button" className="btn btn-outline-danger btn-sm" onClick={()=>deleteAStud(s._id)}>Delete</button>
                    </td>
                </tr>
                    )
                 })
                }
                </tbody>
            </table>
            { studEdit &&
                <div>

        
                <form onSubmit={updateStudents}>
                    <div className="ef border border-primary rounded">
                    <fieldset>
                        <legend>Studnt Entry Form</legend>
                        <div className="input-group pad">
                    <span className="input-group-text">Student Name</span>
                    <input type="text"aria-label="Student name"
                id='sName'
                value={sName}
                onChange={sNameHandle}/>
                </div>
                <div className="input-group pad">
                    <span className="input-group-text">Student Department</span>
                    <input type="text"aria-label="Student Department"
                     id='sDept'
                     value={sDept}
                     onChange={sDeptHandle}/>
                </div>
                <div className="input-group pad">
                    <span className="input-group-text">Student Mail ID</span>
                    <input type="text"aria-label="Student Mailid"
                     id='sEmail'
                     value={sEmail}
                     onChange={sEmailHandle}/>
                </div>
                <div className="input-group pad">
                    <span className="input-group-text">Student Marks</span>
                    <input type="text"aria-label="Student Marks"
                     id='sMarks'
                     value={sMarks}
                     onChange={sMarksHandle}/>
                </div>
                
                <div className="btdiv">
                    <button className="btn btn-primary me-md-2"type="clear">Clear</button>
                    <button className="btn btn-primary me-md-2"type="submit">Submit</button>
                </div>
        
                </fieldset>
             </div>
             </form>
             {
                instud &&
                <div className='msg'>
                    <label>STUDENT INSERTED</label>
                </div>
             }
             </div>
            }
        </div>
    )
}
export default Info;