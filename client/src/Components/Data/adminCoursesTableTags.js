import { useState } from "react";


export default function AdminCoursesTableTags({render}){
    let num = render.num;
    let numMultiple = render.nm;
    let courses = render.courses;
    let filter = render.filter;
    let setNum = render.sn;

    let matchCourses = [];
    let j = -1;
    for(let i = 0; i < courses.length; i++){
        if(((courses[i].name).toUpperCase()).includes((filter.toString()).toUpperCase())){
            j += 1
            matchCourses[j] = 
                <tr className="table-course">
                    <td className="course-name">
                        <input defaultValue={courses[i].name} onChange={(e) => courses[i].name = e.target.value}/>
                    </td>
                    <td className="course-id">
                        <input defaultValue={courses[i].id} onChange={(e) => courses[i].id = e.target.value}/>
                    </td>
                    <td className="course-desc">
                        <textarea defaultValue={courses[i].description} onChange={(e) => courses[i].description = e.target.value}/>
                    </td>
                    <td className="course-tuition">
                        <input defaultValue={courses[i].tuition} onChange={(e) => courses[i].tuition = Number(e.target.value)}/>
                    </td>
                    <td className="course-hours">
                        <input defaultValue={courses[i].creditHours} onChange={(e) => courses[i].creditHours = Number(e.target.value)}/>
                    </td>
                    <td className="course-period">
                        <input defaultValue={courses[i].period} onChange={(e) => courses[i].period = e.target.value}/>
                    </td>
                    <td className="course-room">
                        <input defaultValue={courses[i].room} onChange={(e) => courses[i].room = e.target.value}/>
                    </td>
                    <td className="course-seats">
                        <input defaultValue={courses[i].seats} onChange={(e) => courses[i].seats = Number(e.target.value)}/>
                    </td>
                    <td className="select-box">
                       <button className={`course-select-button`} onClick={(e) => updateCourse(i)}>UPDATE</button>
                    </td>
                </tr>
        }
    };


    if(num > matchCourses.length){
        findNum(matchCourses.length)
    }
    if((num - numMultiple) > matchCourses.length){
        findNum(matchCourses.length)
    }
    let results = [];
    for(let i = num - numMultiple; i < num && i < matchCourses.length; i++){
        results[i] = matchCourses[i]

    };
    return results;

    function findNum(mCLen){
        let r = 0;
        let n = 0;
        if(mCLen == 0){
            setNum(numMultiple)
        }
        else if(mCLen % numMultiple === 0){
            setNum(mCLen)
        }
        else{
            r = mCLen % numMultiple
            n = numMultiple - r
            setNum(mCLen + n)
        }
    }

    function updateCourse(i){
        console.log(courses[i])
        if(
            (courses[i].name != '' && courses[i].name != undefined && courses[i].name != null)
            &&
            (courses[i].id != '' && courses[i].id != undefined && courses[i].id != null)
            &&
            (courses[i].description != '' && courses[i].description != undefined && courses[i].description != null)
            &&
            (courses[i].tuition != '' && courses[i].tuition != undefined && courses[i].tuition != null)
            &&
            (courses[i].creditHours != '' && courses[i].creditHours != undefined && courses[i].creditHours != null)
            &&
            (courses[i].period != '' && courses[i].period != undefined && courses[i].period != null)
            &&
            (courses[i].room != '' && courses[i].room != undefined && courses[i].room != null)
            &&
            (courses[i].seats != '' && courses[i].seats != undefined && courses[i].seats != null)
        )
        {
            fetch('/updateCourse', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
                body: {
                    name: courses[i].name,
                    ID: courses[i].id,
                    description: courses[i].description,
                    tuition: courses[i].tuition,
                    creditHours:  courses[i].creditHours,
                    period: courses[i].period,
                    classroom:  courses[i].room,
                    maxCapacity:  courses[i].seats,
                }
            })
            .then(res => res.json())
            .then(data => data)
        }
        
    }
}