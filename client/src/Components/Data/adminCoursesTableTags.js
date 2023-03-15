import { useState } from "react";


export default function AdminCoursesTableTags({render}){
    let num = render.num;
    let numMultiple = render.nm;
    let courses = render.courses;
    let filter = render.filter;
    let setNum = render.sn;

    const [nName, setNName] = useState('');
    const [nIdent, setNIdent] = useState();
    const [nDesc, setNDesc] = useState('');
    const [nTuit, setNTuit] = useState();
    const [nCH, setNCH] = useState();
    const [nP, setNP] = useState();
    const [nCr, setNCr] = useState();
    const [nMC, setNMC] = useState();




    let matchCourses = [];
    let j = -1;
    for(let i = 0; i < courses.length; i++){
        if(((courses[i].name).toUpperCase()).includes((filter.toString()).toUpperCase())){
            j += 1
            matchCourses[j] = 
                <tr className="table-course">
                    <td className="course-name">
                        <input defaultValue={courses[i].name} onChange={(e) => setNName(e.target.value)}/>
                    </td>
                    <td className="course-id">
                        <input defaultValue={courses[i].id} onChange={(e) => setNIdent(e.target.value)}/>
                    </td>
                    <td className="course-desc">
                        <input defaultValue={courses[i].description} onChange={(e) => setNDesc(e.target.value)}/>
                    </td>
                    <td className="course-tuition">
                        <input defaultValue={courses[i].tuition} onChange={(e) => setNTuit(e.target.value)}/>
                    </td>
                    <td className="course-hours">
                        <input defaultValue={courses[i].creditHours} onChange={(e) => setNCH(e.target.value)}/>
                    </td>
                    <td className="course-period">
                        <input defaultValue={courses[i].period} onChange={(e) => setNP(e.target.value)}/>
                    </td>
                    <td className="course-room">
                        <input defaultValue={courses[i].room} onChange={(e) => setNCr(e.target.value)}/>
                    </td>
                    <td className="course-seats">
                        <input defaultValue={courses[i].seats} onChange={(e) => setNMC(e.target.value)}/>
                    </td>
                    <td className="select-box">
                       <button className={`course-select-button`} onClick={updateCourse}>UPDATE</button>
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

    function updateCourse(){
        if(
            nName != ''
            && nIdent != undefined
            && nDesc != ''
            && nTuit != undefined
            && nCH != undefined
            && nP != undefined
            && nCr != undefined
            && nMC != undefined
        )
        {
            
            fetch('/updateCourse', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
                body: {
                    name: nName,
                    ID: nIdent,
                    description: nDesc,
                    tuition: nTuit,
                    creditHours: nCH,
                    period: nP,
                    classroom: nCr,
                    maxCapacity: nMC,
                }
            })
            .then(res => res.json())
            .then(data => data)
            
        }
    }
}