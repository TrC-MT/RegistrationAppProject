import { useState, useEffect } from "react";
import Navbar from "../Components/Nav/navbar";
import StudentCourses from "./studentCoursesPage";
import StudentIDs from "../Components/Data/studentIDs";
import "../Styles/PageStyles/adminManageStudentCoursesPageStyles.css";
import LoadingScreen from "../Components/Data/loadingScreen";

export default function AdminManageStudentCoursesPage() {
  let [filter, setFilter] = useState("");
  const [students, setStudents] = useState([]);
  let [stuid, setStuid] = useState('');
  let [studentName, setStudentName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const allCoursesKeyword = 'admin';
  const userRoll = 'student';

 //var student_IDs = [1238, 543, 234]; //No need to comment out. Will be redefined in the fetch call.
  useEffect(() => {
    fetch("/admin/api/getAllStudents", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        //initialize stuid on initial render so that backend will render courses correctly!
        setStuid(data[0].id);
        //setStudentName();
        setTimeout(() => {
            setIsLoading(false);
        }, 400);
        
      });
  }, []);

  if (isLoading) {
    return (
        <>
         <LoadingScreen></LoadingScreen>
        </>
    )
  } else {
    return (
        <>
          <Navbar
            pieces={{
              title: "Manage Student Courses",
              back: "True",
              logout: "True",
            }}
          ></Navbar>
          <div id="admin-manage-student-select-student-container">
            <h5 id="admin-account-search-head2">Account:</h5>
            {/* {stuid} */}
            <span className="admin-id-search-box">
              <input
                id="admin-manage-student-courses-idsearch"
                placeholder="Search by ID"
                onKeyUp={(e) => setFilter(e.target.value)}
              ></input>
              <span>
                <label htmlFor="accounts" className="account-info-label">
                  Name:
                </label>
                <select name="accounts" onChange={(e) => setStuid(e.target.value)}>
                  <StudentIDs render={{ students, filter, setStuid, stuid, userRoll }}></StudentIDs>
                </select>
              </span>
            </span>
          </div>
          <StudentCourses adminManage={{ stu: stuid, allCoursesKeyword: allCoursesKeyword, studentName: studentName, setStudentName: setStudentName}}></StudentCourses>
        </>
    );
  }
}
