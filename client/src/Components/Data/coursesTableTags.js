import { toast } from 'react-toastify';
import { useState } from 'react';
// import 'react-toastify/dist/ReactToastify.css';

export default function CoursesTableTags({render}){

    let num = render.num;
    const numMultiple = render.nm;
    let courses = render.courses;
    let setCourses = render.sc;
    //let uniqueCourseId = courses.course_id;
    let filter = render.filter;
    let setNum = render.sn;
    let scra = render.scra;
    let sar1 = render.sar1;
    let sar2 = render.sar2;
    let setEnrolledCourses = render.sec;
    const [rerenderCount, setRerenderCount] = useState(0);

    let stu = '';
    if(render?.stu){
        stu = render.stu;
    }
    else{}

    const original_courses = courses;

    let registeredCourses = [];
    let notRegisteredCourses = [];
    for(let i = 0; i < courses.length; i++){
        if(courses[i].registered == true){
            // console.log(`Course ${courses[i].title} registered`)
            registeredCourses.push(courses[i])
        }
        else{
            // console.log(`Course ${courses[i].title} NOT registered`)
            notRegisteredCourses.push(courses[i])
        }
    }
    //Update the total number of registered courses displayed above courses table!
    setEnrolledCourses(registeredCourses.length);

    courses = [];
    for(let i = 0; i < registeredCourses.length; i++){
        courses.push(registeredCourses[i])
    }
    for(let i = 0; i < notRegisteredCourses.length; i++){
        courses.push(notRegisteredCourses[i])
    }


    let button_do = null;
    let button_text = '';
    let button_className = '';

    let matchCourses = [];
    let j = -1;
    for(let i = 0; i < courses.length; i++){
        if(((courses[i].title).toUpperCase()).includes((filter.toString()).toUpperCase())){
            j += 1
            if(courses[i].registered == true){
                courses[i].button_do = drop;
                button_text = 'DROP';
                button_className = 'd-class-button';
            }
            else{
                courses[i].button_do = enroll;
                button_text = 'ENROLL';
                button_className = 'enroll-class-button';
            }
            matchCourses[j] = 
                <tr className="table-course">
                    <td className="course-name">
                        {courses[i].title}
                    </td>
                    <td className="course-id">
                        {courses[i].id}
                    </td>
                    <td className="course-desc">
                        {courses[i].description}
                    </td>
                    <td className="course-tuition">
                        ${courses[i].tuition_cost}
                    </td>
                    <td className="course-hours">
                        {courses[i].credit_hours}
                    </td>
                    <td className="course-period">
                        {courses[i].schedule}
                    </td>
                    <td className="course-room">
                        {courses[i].classroom_number}
                    </td>
                    <td className="course-seats">
                        {courses[i].maximum_capacity}
                    </td>
                    <td className="select-box">
                       <button className={`course-select-button ${button_className}`} onClick={(e) => courses[i].button_do(courses[i].course_id, i)}>{button_text}</button>
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


    function findOriginalCourse(L){
        for(let i = 0; i < original_courses.length; i++){
            if(courses[L].course_id == original_courses[i].course_id){
                return i;
            }
        }
    }

    function drop(course_id, i){
        const coursesIndex = findOriginalCourse(i);
        let droppedCourseTitle = original_courses[coursesIndex].title;
                
        fetch('/student/api/drop', {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                courseId: course_id,
                id: stu,
                //The course[i].registered for that student should become false
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            //spread operator performs shallow copy of original_courses
            //then changes registered property of the selected course.
            //setRerenederCount() then rerenders the coursesTableTags page.
            let clone = [...original_courses];
            clone[data.courseId - 1].registered = false;
            toast(data.message + '\'' + droppedCourseTitle + '\'' + ' course!');
            setRerenderCount(rerenderCount + 1);
            //toast(data.message);
            //should rerender the table with the correct button
            setNum(numMultiple)
            setMsg('Course dropped.')
        })
    }
    function enroll(course_id, i){
        const coursesIndex = findOriginalCourse(i);
        let enrollCourseTitle = original_courses[coursesIndex].title;

        fetch('/student/api/enroll', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                courseId: course_id,
                id: stu,
                //The course[i].registered for that student should become true
            }),
        
        })
        .then((res) => res.json())
        .then((data) => {
            //spread operator performs shallow copy of original_courses
            //then changes registered property of the selected course.
            //setRerenederCount() then rerenders the coursesTableTags page.
            let clone = [...original_courses];
            clone[data.courseId - 1].registered = true;
            toast(data.message + '\'' + enrollCourseTitle + '\'' + '!');
            setRerenderCount(rerenderCount + 1);
            //should rerender the table with the correct button
            setNum(numMultiple)
            setMsg('Course enrolled.')
        })
    }
}

