
import { useState } from "react";
import AdminCoursesTableTags from "./adminCoursesTableTags";

export default function AdminCoursesTable(){
    let [filter, setFilter] = useState('');
    const initNum = 4;
    let [num, setNum] = useState(initNum);

    let [course_results_amount, setCourse_results_amount] = useState();

    var courses = [];

    fetch('courses/allCourses', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .then(data => courses = data)

    return(
        <>
            <div className='controls-container' id="admin-controls-container">
                <label id='student-courses-filter-label' for='filter'>Search courses by name:</label>
                <input id='student-courses-filter-input' name='filter' placeholder='Search course name here' onChange={(e) => changeFilter(e.target.value)}></input>
                <span id="admin-controls-buttons">
                    <button onClick={subNum}>&lt;</button>
                    <button onClick={incNum}>&gt;</button>
                </span>
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
                        <AdminCoursesTableTags render={{courses: courses, filter: filter, num: num, nm: initNum, sn: setNum, scra: setCourse_results_amount}}></AdminCoursesTableTags>
                    </tbody>
                    <tfoot>
                        Results: {course_results_amount}
                    </tfoot>
                </table>
            </div>
        </>
    )

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

// let courses = [
//     {name: 'Web Development', description: 'One of the best classes possible. You should schedual it right away.', tuition: 1300},
//     {name: 'Haunted Mansion Makeover', 
//         description: 'Learn how to be the spookiest house on Halloween. Unless someone else in your neighborhood takes this class, then you would have to share.',
//         tuition: 5324}, 
//     {name: 'Water Skiing', description: 'Go to a large body of water, and ride on top of it.', tuition: 9876},
//     {name: 'Unknown', 
//         description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', 
//         tuition: 0}, 
//     {name: 'UnknownB', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0}, 
//     {name: 'UnknownC', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0}, 
//     {name: 'D', description: 'none', tuition: 5}, 
//     {name: 'e', description: 'none', tuition: 5}, 
//     {name: 'f', description: 'none', tuition: 5},
//     {name: 'UnknownD', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0}, 
//     {name: 'UnknownE', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0}, 
//     {name: 'UnknownF', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0}, 
//     {name: 'UnknownG', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0}, 
//     {name: 'UnknownH', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0}, 

// ]