import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import './Header.css'
import Home from './Home';
import Info from './Info';
import EntryForm from './EntryForm';
function Header (props){
    //console.log(props.stud);

    function insertStudent(students,file){
        //console.log(students);
        props.insertToDB(students,file)
    }
    function updateStudent(student){
       props.updateStudent(student)   
    }         
    function getStudID(id)
    {
        //console.log(id);
        props.getStudID(id)
    }

    return (
    <BrowserRouter>
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/students">Student Details</Link></li>
            <li><Link to="/studentsForm">Entry Form</Link></li>

        </ul>
        <Routes>
            <Route exact path='/'element={<Home/>}></Route>
            <Route exact path='/students' element={<Info stud={props.stud} getStudID={getStudID} updateStudent={updateStudent} />}></Route>
            <Route exact path='/studentsForm' element={<EntryForm instud={props.instud}setStudents={insertStudent}/>}></Route>
        </Routes>
    </div>
    </BrowserRouter>
        
)
}
export default Header;
