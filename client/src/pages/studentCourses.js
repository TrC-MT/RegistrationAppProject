import { useState } from 'react';
import CoursesTable from '../Components/Data/coursesTable'
import Navbar from '../Components/Nav/navbar'



export default function StudentCourses(){
    let [filter, setFilter] = useState('');
    let [num, setNum] = useState(3)

    //if(registered){
        // return(
            //the page
        // )
    // }

    return(
        <>
            <Navbar pieces={{title: 'Courses', logout: 'True'}}></Navbar>
            <div className="page-box">
                <div>
                    <label for='filter'>Name:</label>
                    <input name='filter' placeholder='Search by course name' onKeyUp={(e) => setFilter(e.target.value)}></input>
                    <button onClick={subNum}>&lt;</button>
                    <button onClick={incNum}>&gt;</button>
                </div>
                
                <CoursesTable pieces={{ID: 'Scheduled', button: 'Remove', filter: filter, num: num}}></CoursesTable>
                <CoursesTable pieces={{ID: 'UnScheduled', button: 'Add', filter: filter, num: num}}></CoursesTable>
            </div>
            
        </>
    )

    function subNum(){
        if(num >= 6){
            setNum(num - 3)
        }
    }
    function incNum(){
        setNum(num + 3)
    }
}