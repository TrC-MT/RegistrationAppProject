


export default function CoursesTableTags({render}){

    let num = render.num;
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
                        {courses[i].name}
                    </td>
                    <td className="course-desc">
                        {courses[i].description}
                    </td>
                    <td className="course-tuition">
                        ${courses[i].tuition}
                    </td>
                    <td className="select-box">
                        <input type='checkbox'></input>
                    </td>
                </tr>
        }
    };

    console.log('num == ' + num)
    console.log('matchCourses.length == ' + matchCourses.length)

    if(num > matchCourses.length){
        console.log('num > matchCourses.length')
        findNum(matchCourses.length)
    }
    if((num - 3) > matchCourses.length){
        console.log('(num - 3) > matchCourses.length')
        findNum(matchCourses.length)
    }
    let results = [];
    for(let i = num - 3; i < num && i < matchCourses.length; i++){
        results[i] = matchCourses[i]

    };
    return results;

    function findNum(mCLen){
        let r = 0;
        let n = 0;
        console.log('findNum')
        if(mCLen == 0){
            setNum(3)
        }
        else if(mCLen % 3 === 0){
            console.log('Setting num = mCLen')
            setNum(mCLen)
        }
        else{
            r = mCLen % 3
            console.log('r == ' + r)
            n = 3 - r
            setNum(mCLen + n)
        }
    }
}

