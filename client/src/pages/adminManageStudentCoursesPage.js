import { useState, useEffect } from "react";
import Navbar from "../Components/Nav/navbar";
import StudentCourses from "./studentCoursesPage";
import StudentIDs from "../Components/Data/studentIDs";
import "../Styles/PageStyles/adminManageStudentCoursesPageStyles.css";

export default function AdminManageStudentCoursesPage() {
  let [filter, setFilter] = useState("");
  const [students, setStudents] = useState([]);
  let [stuid, setStuid] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const allCoursesKeyword = 'admin';

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
        setTimeout(() => {
            setIsLoading(false);
        }, 450);
        
        //student_IDs = data; //I'm assuming an array. Ex: [123, 432, 4654, etc.]
      });
  }, []);
  if (isLoading) {
    return (
        <>
          <div className="loader-container">
              <div className="loader"></div>
              <div className="text-white">Loading...</div>
          </div>
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
                <select name="accounts" onClick={(e) => setStuid(e.target.value)}>
                  <StudentIDs render={{ students, filter }}></StudentIDs>
                </select>
              </span>
            </span>
          </div>
          <StudentCourses adminManage={{ stu: stuid, allCoursesKeyword: allCoursesKeyword }}></StudentCourses>
        </>
    );
  }
  
}
