import '../Styles/studentCoursesPageStyles.css'
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
                <div id='student-courses-page-container'>
                    <div className='controls-container'>
                        <label id='student-courses-filter-label' for='filter'>Search courses by name:</label>
                        <input id='student-courses-filter-input' name='filter' placeholder='Search course name here' onKeyUp={(e) => setFilter(e.target.value)}></input>
                        <button onClick={subNum}>&lt;</button>
                        <button onClick={incNum}>&gt;</button>
                    </div>
                        
                    <div className='tables-container'>
                        <CoursesTable pieces={{ID: 'Scheduled', button: 'Remove', filter: filter, num: num, sn: setNum}}></CoursesTable>
                        <CoursesTable pieces={{ID: 'UnScheduled', button: 'Add', filter: filter, num: num, sn: setNum}}></CoursesTable>
                    </div>
                </div>
            </div>
            
        </>
    )

    function subNum(){
        console.log('subNum')
        if(num >= 6){
            setNum(num - 3)
            console.log('num - 3 == ' + num)
        }
    }
    function incNum(){
        console.log('incNum')
        setNum(num + 3)
        console.log('num + 3 == ' + num)

    }
}