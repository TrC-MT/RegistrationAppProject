import '../Styles/PageStyles/studentCoursesPageStyles.css'

import { useState } from 'react';

import CoursesTable from '../Components/Data/coursesTable'
import Navbar from '../Components/Nav/navbar'



export default function StudentCourses(){
    let [filter, setFilter] = useState('');
    const initNum = 6; //I use this initNum, num, and numMultiple separetly. If I set them equal to each other, or used them in place of each other (ex: set numMultiple = num) then things could break when one changed through opperations.
    let [num, setNum] = useState(initNum);
    let[numMultiple, setNumMultiple] = useState(initNum); //This is redundant.

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
                        <CoursesTable pieces={{filter: filter, num: num, sn: setNum, nm: numMultiple}}></CoursesTable>
                    </div>
                </div>
            </div>
            
        </>
    )

    function subNum(){
        if(num >= (numMultiple * 2)){
            setNum(num - (numMultiple))
        }
    }
    function incNum(){
        setNum(num + (numMultiple))
    }

}