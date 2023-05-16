import { toast } from 'react-toastify';

export default function AdminCoursesTableTags({render}){
    let num = render.num;
    let numMultiple = render.nm;
    let courses = render.courses;
    let setCourses = render.setCourses;
    let filter = render.filter;
    let setNum = render.sn;
    let scra = render.scra;
    let sar1 = render.sar1;
    let sar2 = render.sar2;
    let triggerUpdate = render.triggerUpdate;
    let triggerDelete = render.triggerDelete;
    let setTriggerDelete = render.setTriggerDelete;
    let setTriggerUpdate = render.setTriggerUpdate;


    let matchCourses = [];
    let j = -1;
    for(let i = 0; i < courses.length; i++){
        if(((courses[i].title).toUpperCase()).includes((filter.toString()).toUpperCase())){
            j += 1
            matchCourses[j] = 
                <tr className="table-course">
                    <td className="course-name">
                        <input defaultValue={courses[i].title} onChange={(e) => courses[i].title = e.target.value}/>
                    </td>
                    <td className="course-id">
                        <input defaultValue={courses[i].id} onChange={(e) => courses[i].id = e.target.value}/>
                    </td>
                    <td className="course-desc">
                        <textarea defaultValue={courses[i].description} onChange={(e) => courses[i].description = e.target.value}/>
                    </td>
                    <td className="course-tuition">
                        <input defaultValue={courses[i].tuition_cost} onChange={(e) => courses[i].tuition_cost = Number(e.target.value)}/>
                    </td>
                    <td className="course-hours">
                        <input defaultValue={courses[i].credit_hours} onChange={(e) => courses[i].credit_hours = Number(e.target.value)}/>
                    </td>
                    <td className="course-period">
                        <input defaultValue={courses[i].schedule} onChange={(e) => courses[i].schedule = e.target.value}/>
                    </td>
                    <td className="course-room">
                        <input defaultValue={courses[i].classroom_number} onChange={(e) => courses[i].classroom_number = e.target.value}/>
                    </td>
                    <td className="course-seats">
                        <input defaultValue={courses[i].maximum_capacity} onChange={(e) => courses[i].maximum_capacity = Number(e.target.value)}/>
                    </td>
                    <td className="select-box">
                       <button className={`course-select-button`} onClick={(e) => updateCourse(i)}>UPDATE</button>
                       <button className={`course-select-button d-class-button`} onClick={(e) => delCourse(i)}>DELETE</button>
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
    scra(matchCourses.length)
    if(matchCourses.length != 0){
        sar1(num-(numMultiple) +1)
    }
    else{
        sar1(0)
    }
    if(num < matchCourses.length){
        sar2(num)
    }
    else{
        sar2(matchCourses.length)
    }
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
            (courses[i].title != '' && courses[i].title != undefined && courses[i].title != null)
            &&
            (courses[i].id != '' && courses[i].id != undefined && courses[i].id != null)
            &&
            (courses[i].description != '' && courses[i].description != undefined && courses[i].description != null)
            &&
            (courses[i].tuition_cost != '' && courses[i].tuition_cost != undefined && courses[i].tuition_cost != null)
            &&
            (courses[i].credit_hours != '' && courses[i].credit_hours != undefined && courses[i].credit_hours != null)
            &&
            (courses[i].schedule != '' && courses[i].schedule != undefined && courses[i].schedule != null)
            &&
            (courses[i].classroom_number != '' && courses[i].classroom_number != undefined && courses[i].classroom_number != null)
            &&
            (courses[i].maximum_capacity != '' && courses[i].maximum_capacity != undefined && courses[i].maximum_capacity != null)
        )
        {
            fetch('/admin/api/updateCourse', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: {
                    courseId: courses[i].course_id,
                    title: courses[i].title,
                    id: courses[i].id,
                    description: courses[i].description,
                    tuition: courses[i].tuition_cost,
                    creditHours: courses[i].credit_hours,
                    schedule: courses[i].schedule,
                    classroomNumber: courses[i].classroom_number,
                    maximumCapacity: courses[i].maximum_capacity,
                }
            })
            .then(res => res.json())
            .then(data => {
                setCourses(data);
                toast(data.message);
                setTriggerUpdate(triggerUpdate + 1);
            })
        }
    }

    function delCourse(i){
        if(window.confirm(`Are you sure you want to delete the ${courses[i].title} course?`)){
            fetch('/admin/api/deleteCourse', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    courseId: courses[i].course_id,
                    title: courses[i].title,
                    id: courses[i].id,
                    description: courses[i].description,
                    tuition: courses[i].tuition_cost,
                    creditHours: courses[i].credit_hours,
                    schedule: courses[i].schedule,
                    classroomNumber: courses[i].classroom_number,
                    maximumCapacity: courses[i].maximum_capacity,
                })
            })
            .then(res => res.json())
            .then(data => {
                setCourses(data);
                toast(data.message);
                setTriggerDelete(triggerDelete + 1);
            })
        }
        
    }
}