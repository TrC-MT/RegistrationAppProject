

export default function CoursesTableTags({render}){

    let num = render.num;
    let numMultiple = render.nm;
    let courses = render.courses;
    let filter = render.filter;
    let setNum = render.sn;

    let button_do = null;
    let button_text = '';
    let button_className = '';

    let matchCourses = [];
    let j = -1;
    for(let i = 0; i < courses.length; i++){
        if(((courses[i].name).toUpperCase()).includes((filter.toString()).toUpperCase())){
            j += 1
            if(courses[i].registered == true){
                button_do = drop;
                button_text = 'DROP';
                button_className = 'drop-class-button';
            }
            else{
                button_do = enroll;
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
                       <button className={`course-select-button ${button_className}`} onClick={button_do}>{button_text}</button>
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

    function drop(){
        console.log('drop')
    }
    function enroll(){
        console.log('enroll')
    }
}

