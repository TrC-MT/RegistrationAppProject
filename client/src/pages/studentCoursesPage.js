import '../Styles/PageStyles/studentCoursesPageStyles.css'

import { useState } from 'react';

import CoursesTable from '../Components/Data/coursesTable'
import Navbar from '../Components/Nav/navbar'



export default function StudentCourses(){
    let [filter, setFilter] = useState('');
    const initNum = 6; //I use this initNum, and num separetly. If I set them equal to each other later in the code, or used them in place of each other (ex: set initNum = num) then things could break when num changes through opperations.
    let [num, setNum] = useState(initNum);
    
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
                        <CoursesTable pieces={{filter: filter, num: num, sn: setNum, nm: initNum}}></CoursesTable>
                    </div>
                </div>
            </div>
            
        </>
    )

    function subNum(){
        if(num >= (initNum * 2)){
            setNum(num - (initNum))
        }
    }
    function incNum(){
        setNum(num + (initNum))
    }

}