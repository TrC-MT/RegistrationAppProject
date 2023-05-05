import '../Styles/PageStyles/studentCoursesPageStyles.css'

import { useState, useEffect } from 'react';
import ServerMessage from '../Components/serverMessage';
import CoursesTable from '../Components/Data/coursesTable'
import Navbar from '../Components/Nav/navbar'



export default function StudentCourses({adminManage}){
    let stu = '';
    if(adminManage?.stu){
        stu = adminManage.stu;
    }

    const [message, setMessage] = useState('');


    let [filter, setFilter] = useState('');
    const initNum = 6; //I use this initNum, and num separetly. If I set them equal to each other later in the code, or used them in place of each other (ex: set initNum = num) then things could break when num changes through opperations.
    let [num, setNum] = useState(initNum);

    let [course_results_amount, setCourse_results_amount] = useState();
    let [amount_results1, setAmount_results1] = useState(num-(initNum) +1)
    let [amount_results2, setAmount_results2] = useState(num)
    const [courses, setCourses] = useState([])
    
    //api gets called when studentCoursesPage is rendered then the result gets passed down through props all the way down to courseTableTags.js
    useEffect(() => {
        fetch('http://localhost:3000/api/courses/allCourses', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((data) => {
            setCourses(data);
        })
    }, [])

    return(
        <>
            <Navbar pieces={{title: 'Courses', logout: 'True'}}></Navbar>
            <ServerMessage Message={{message, sm: setMessage}}></ServerMessage>
            <div className="page-box">
                <div id='student-courses-page-container'>
                    <div className='controls-container'>
                        <label id='student-courses-filter-label' for='filter'>Search courses by name:</label>
                        <input id='student-courses-filter-input' name='filter' placeholder='Search course name here' onKeyUp={(e) => setFilter(e.target.value)}></input>
                        <div className="results-amount">
                            Results: {amount_results1}-{amount_results2} of {course_results_amount}
                        </div>
                        <button onClick={subNum}>&lt;</button>
                        <button onClick={incNum}>&gt;</button>
                    </div>

                    <div className='tables-container'>
                        <CoursesTable pieces={{filter: filter, courses: courses, num: num, sn: setNum, nm: initNum, sar1: setAmount_results1, sar2: setAmount_results2, cra: course_results_amount, scra: setCourse_results_amount, stu: stu, setMsg: setMessage}}></CoursesTable>
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