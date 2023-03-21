
import { useState } from "react";
import AdminCoursesTableTags from "./adminCoursesTableTags";

export default function AdminCoursesTable(){
    let [filter, setFilter] = useState('');
    const initNum = 4;
    let [num, setNum] = useState(initNum);

    // var courses = [];

    // fetch('/getAllCourses', {
    //     method: 'GET',
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: {
    //         question: 'Can I get all of the courses please?'
    //     }
    // })
    // .then(res => res.json())
    // .then(data => courses = data)

    return(
        <>
            <div className='controls-container' id="admin-controls-container">
                <label id='student-courses-filter-label' for='filter'>Search courses by name:</label>
                <input id='student-courses-filter-input' name='filter' placeholder='Search course name here' onKeyUp={(e) => setFilter(e.target.value)}></input>
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
                        </tr>
                    </thead>    
                    <tbody>
                        <AdminCoursesTableTags render={{courses: courses, filter: filter, num: num, nm: initNum, sn: setNum}}></AdminCoursesTableTags>
                    </tbody>
                </table>
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

let courses = [
    {name: 'Web Development', description: 'One of the best classes possible. You should schedual it right away.', tuition: 1300},
    {name: 'Haunted Mansion Makeover', 
        description: 'Learn how to be the spookiest house on Halloween. Unless someone else in your neighborhood takes this class, then you would have to share.',
        tuition: 5324}, 
    {name: 'Water Skiing', description: 'Go to a large body of water, and ride on top of it.', tuition: 9876},
    {name: 'Unknown', 
        description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', 
        tuition: 0}, 
    {name: 'UnknownB', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0}, 
    {name: 'UnknownC', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0}, 
    {name: 'D', description: 'none', tuition: 5}, 
    {name: 'e', description: 'none', tuition: 5}, 
    {name: 'f', description: 'none', tuition: 5},
    {name: 'UnknownD', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0}, 
    {name: 'UnknownE', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0}, 
    {name: 'UnknownF', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0}, 
    {name: 'UnknownG', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0}, 
    {name: 'UnknownH', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0}, 

]