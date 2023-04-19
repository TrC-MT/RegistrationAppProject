
export default function CoursesTableTags({render}){

    let num = render.num;
    const numMultiple = render.nm;
    let courses = render.courses;
    let filter = render.filter;
    let setNum = render.sn;
    let scra = render.scra;
    let sar1 = render.sar1;
    let sar2 = render.sar2;

    const stu = '';
    if(render?.stu){
        stu = render.stu;
    }
    else{
        
    }

    let button_do = null;
    let button_text = '';
    let button_className = '';

    let matchCourses = [];
    let j = -1;
    for(let i = 0; i < courses.length; i++){
        if(((courses[i].name).toUpperCase()).includes((filter.toString()).toUpperCase())){
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
                        {courses[i].name}
                    </td>
                    <td className="course-id">
                        {courses[i].id}
                    </td>
                    <td className="course-desc">
                        {courses[i].description}
                    </td>
                    <td className="course-tuition">
                        ${courses[i].tuition}
                    </td>
                    <td className="course-hours">
                        {courses[i].creditHours}
                    </td>
                    <td className="course-period">
                        {courses[i].period}
                    </td>
                    <td className="course-room">
                        {courses[i].room}
                    </td>
                    <td className="course-seats">
                        {courses[i].seats}
                    </td>
                    <td className="select-box">
                       <button className={`course-select-button ${button_className}`} onClick={(e) => courses[i].button_do(courses[i].name, i)}>{button_text}</button>
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

    function drop(course_name, i){
        console.log('drop, ' + course_name + ', ' + i)
        // courses[i].registered = false;
        
        fetch('/courses/drop', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                courseName: course_name,
                place: i,
                possibleStudentID: stu
                //The course[i].registered for that student should become false
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            courses = data;
            //should rerender the table with the correct button
        })
    }
    function enroll(course_name, i){
        console.log('enroll, ' + course_name + ', ' + i)
        fetch('/courses/enroll', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                courseName: course_name,
                place: i,
                possibleStudentID: stu
                //The course[i].registered for that student should become true
            }),
        
        })
        .then((res) => res.json())
        .then((data) => {
            courses = data;
            //should rerender the table with the correct button
        })
    }
}

