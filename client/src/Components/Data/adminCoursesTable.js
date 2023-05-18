
import { useState, useEffect } from "react";
import AdminCoursesTableTags from "./adminCoursesTableTags";
import '../../App.css';
import LoadingScreen from "./loadingScreen";

export default function AdminCoursesTable(props){
    let trigger = props.trigger
    let [filter, setFilter] = useState('');
    const initNum = 4;
    let [num, setNum] = useState(initNum);

    let [course_results_amount, setCourse_amount_results] = useState();
    let [amount_results1, setAmount_results1] = useState(num-(initNum) +1);
    let [amount_results2, setAmount_results2] = useState(num);
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isTableLoading, setIsTableLoading] = useState(false);
    const [triggerUpdate, setTriggerUpdate] = useState(0);
    const [triggerDelete, setTriggerDelete] = useState(0);

    // initially renders courses upon initial render
    function rerenderCourses() {
        fetch(`/api/allCourses`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            setCourses(data);
            console.log('Inside triggerDelete effect fetch', data);
            //trigger table rendering from the load screen
            setTimeout(() => {
                setIsTableLoading(false)}, 400)
            });
    }

    useEffect(() => {
        fetch('/api/allCourses', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            setCourses(data);
            setTimeout(setIsLoading(false), 400);
        })
    }, [])

    // courses get updated after new course gets successfully added to backend
    useEffect(() => {
        fetch('/api/allCourses', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            setCourses(data);
        })
    }, [trigger])

    useEffect(() => {
        rerenderCourses();
    }, [triggerDelete])

    useEffect(() => {
        rerenderCourses();
    }, [triggerUpdate])

    if (isLoading) {
        return (
            <>
                <LoadingScreen></LoadingScreen>
            </>
        )
  } else {

          if (isTableLoading) {
            return (
            <>
                <LoadingScreen></LoadingScreen>
            </>
            );
          } else {
            return (
                <>
                <div className="controls-container" id="admin-controls-container">
                <label id="student-courses-filter-label" htmlFor="filter">
                  Search courses by name:
                </label>
                <input
                  id="student-courses-filter-input"
                  name="filter"
                  placeholder="Search course name here"
                  onChange={(e) => changeFilter(e.target.value)}
                ></input>
              </div>
              <div id="admin-table-container">
                <table id="admin-courses-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Identifier</th>
                      <th>Description</th>
                      <th>Tuition ($)</th>
                      <th>Credit hours</th>
                      <th>Period</th>
                      <th>Classroom</th>
                      <th>Max capacity</th>
                      <th>Controls</th>
                    </tr>
                  </thead>
                  <tbody>
                      <AdminCoursesTableTags
                        render={{
                          courses: courses,
                          setCourses: setCourses,
                          filter: filter,
                          num: num,
                          nm: initNum,
                          sn: setNum,
                          scra: setCourse_amount_results,
                          sar1: setAmount_results1,
                          sar2: setAmount_results2,
                          triggerUpdate: triggerUpdate,
                          setTriggerUpdate: setTriggerUpdate,
                          setTriggerDelete: setTriggerDelete,
                          triggerDelete: triggerDelete,
                          ITL: isTableLoading,
                          SITL: setIsTableLoading,
                        }}
                      ></AdminCoursesTableTags>
                  </tbody>
                </table>
                <span className="results-amount">
                  Results: {amount_results1}-{amount_results2} of{" "}
                  {course_results_amount}
                </span>
                <div id="admin-controls-buttons">
                  <button onClick={subNum}>&lt;</button>
                  <button onClick={incNum}>&gt;</button>
                </div>
              </div>
              <div className="filler"></div>
            </>
          );
        }
    }          
           

    function changeFilter(target_value){
        setFilter(target_value)
        incNum()
        subNum()
    }


    function subNum(){
        if(num >= (initNum * 2)){
            setNum(num - (initNum))
        }
    }
    function incNum(){
        setNum(num + (initNum))
    }
}