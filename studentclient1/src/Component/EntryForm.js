import React,{useState}from 'react';
import './EntryForm.css'
function EntryForm(props){
    let[sName,setSName]=useState('');
    let[sDept,setSDept]=useState('');
    let[sEmail,setSEmail]=useState('');
    let[sMarks,setSMarks]=useState('');
    let[sImageFile,setSImageFile]=useState([]);
    let[sImage,setSImage]=useState([]);
    let[instud,setInStud]=useState(false);


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
    function sImageHandle(event){
        setSImageFile(event.target.files[0])
        setSImage(event.target.value)

    }

    function saveStudents(event){
        event.preventDefault();
        let students={
            stud_name:sName,
            stud_dept:sDept,
            emailid:sEmail,
            marks:sMarks,
            simage:sName+sImageFile.name
        }
        //console.log(students.simage);
        props.setStudents(students,sImageFile)
        setSName('');
        setSDept('');
        setSEmail('');
        setSMarks('');
        setInStud(props.instud)
        

    }

    return(
        <div>

        
        <form onSubmit={saveStudents}>
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
        <div className="input-group pad">
            <span className="input-group-text">Student Photo</span>
            <input type="file"aria-label="Student Marks"
             id='sImage'
             value={sImage}
             onChange={sImageHandle}/>
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
    )
}
export default EntryForm;