


export default function CoursesTableTags({render}){

    /*


    Problem:
        With only 3 courses being rendered,
        the search is not usefull.
    
    Solution:
        Make the search work to
        render 3 courses that match the search

    Reason:
        Right now it's rendering 3, then searching.
        Needs to be vice-versa.

        
    */
    let num = render.num;

    let results = [];
    let j = -1;
    if(num > render.courses.length){
        num = render.courses.length
    }
    if((num - 3) > render.courses.length){
        num = render.courses.length
    }
    for(let i = num - 3; i < num && i < render.courses.length; i++){
        j += 1
        if(((render.courses[i].name).toUpperCase()).includes((render.filter.toString()).toUpperCase())){
            results[j] = 
            <tr className="table-course">
                <td className="course-name">
                    {render.courses[i].name}
                </td>
                <td className="course-desc">
                    {render.courses[i].description}
                </td>
                <td className="course-tuition">
                    ${render.courses[i].tuition}
                </td>
                <td className="select-box">
                    <input type='checkbox'></input>
                </td>
            </tr>
        }
        else{
            j -= 1
        }
        
    }

    

    return results;

}


