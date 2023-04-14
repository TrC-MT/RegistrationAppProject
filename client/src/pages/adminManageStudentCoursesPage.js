import { useState } from "react";
import Navbar from "../Components/Nav/navbar";
import StudentCourses from "./studentCoursesPage";
import StudentIDs from "../Components/Data/studentIDs";
import '../Styles/PageStyles/adminManageStudentCoursesPageStyles.css'


export default function AdminManageStudentCoursesPage(){
    let [filter, setFilter] = useState('');
    let [stuid, setStuid] = useState();


    var student_IDs = [1238, 543, 234]; //No need to comment out. Will be redefined in the fetch call.
    fetch('/StuIDs', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // body: JSON.stringify({
        //     question: 'Can I get all the student IDs?
        // }),
    })
    .then((res) => res.json())
    .then((data) => {
        student_IDs = data; //I'm assuming an array. Ex: [123, 432, 4654, etc.]
    });


    return(
        <>
            <Navbar pieces={{title: 'Manage Student Courses', back: 'True', logout: 'True'}}></Navbar>
            <div id="admin-manage-student-select-student-container">
                <h5 id="admin-account-search-head2">Account:</h5>
                <span className="admin-id-search-box">
                    <input id="admin-manage-student-courses-idsearch" placeholder="Search by ID" onKeyUp={(e) => setFilter(e.target.value) }></input>
                    <span>
                        <label for="accounts" className='account-info-label'>ID:</label>
                        <select name="accounts" onClick={(e) => setStuid(e.target.value)}>
                            <StudentIDs render={{student_IDs, filter}}></StudentIDs>
                        </select>
                    </span>
                </span>
            </div>
            <StudentCourses adminManage={{stu: stuid}}></StudentCourses>
        </>
    );
}