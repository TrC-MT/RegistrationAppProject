import '../../Styles/ComponentStyles/coursesTableStyles.css'
import { useState } from 'react';
import CoursesTableTags from "./coursesTableTags"

export default function CoursesTable({pieces}){

    let [course_results_amount, setCourse_results_amount] = useState();


    // useEffect(() => {
    //     fetch('/courses/allCourses')
    //       .then(data => data.json())
    //       .then(result => console.log(result))
    // }, [])
    // let courses = [];

    // fetch('/courses/allCourses', {
    //     method: 'GET',
    //     headers: {
    //         "Content-Type": "application/json",
    //     }
    // })
    // .then((res) => res.json())
    // .then((data) => {
    //     courses = data;
    // })
    
    return(
        <>
            <div className='table-box'>
                <h4 id='table-title' className="table-title">Schedule</h4>
                <table id="courses-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Identifier</th>
                            <th>Description</th>
                            <th>Tuition</th>
                            <th>Credit hours</th>
                            <th>Period</th>
                            <th>Classroom</th>
                            <th>Max capacity</th>
                            <th>
                                <h5>Enroll/Drop</h5>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <CoursesTableTags render={{courses: courses, filter: pieces.filter, num: pieces.num, sn: pieces.sn, nm: pieces.nm, scra: setCourse_results_amount}}></CoursesTableTags>
                    </tbody>
                    <tfoot>
                        Results: {course_results_amount}
                    </tfoot>
                </table>
            </div>
        </>
    )
}

let courses = []
//     {name: 'Web Development', description: 'One of the best classes possible. You should schedual it right away.', tuition: 1300},
//     {name: 'Haunted Mansion Makeover', 
//         description: 'Learn how to be the spookiest house on Halloween. Unless someone else in your neihborhood takes this class, then you would have to share.',
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
