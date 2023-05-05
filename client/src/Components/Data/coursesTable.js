import { useEffect } from 'react';
import '../../Styles/ComponentStyles/coursesTableStyles.css'
import CoursesTableTags from "./coursesTableTags"

export default function CoursesTable({pieces}){    
    //let courses = [];
    // let courses = [
    //     {name: 'Web Development', description: 'One of the best classes possible. You should schedule it right away.', tuition: 1300, registered: false},
    //     {name: 'Haunted Mansion Makeover', 
    //         description: 'Learn how to be the spookiest house on Halloween. Unless someone else in your neihborhood takes this class, then you would have to share.',
    //         tuition: 5324, registered: true}, 
    //     {name: 'Water Skiing', description: 'Go to a large body of water, and ride on top of it.', tuition: 9876, registered: false},
    //     {name: 'Unknown', 
    //         description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', 
    //         tuition: 0, registered: false}, 
    //     {name: 'UnknownB', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0, registered: true}, 
    //     {name: 'UnknownC', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0, registered: false}, 
    //     {name: 'D', description: 'none', tuition: 5, registered: false}, 
    //     {name: 'e', description: 'none', tuition: 5, registered: false}, 
    //     {name: 'f', description: 'none', tuition: 5, registered: false},
    //     {name: 'UnknownD', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0, registered: true}, 
    //     {name: 'UnknownE', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0, registered: true}, 
    //     {name: 'UnknownF', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0, registered: false}, 
    //     {name: 'UnknownG', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0, registered: false}, 
    //     {name: 'UnknownH', description: 'Lengthy unknown random words that do not make sense and nobody cares, plus incorrect grammar and crazy nothingness without anything otherwise you would read this.', tuition: 0, registered: true}, 
    // ]

    
    
    
    return(
        <>
            <div className='table-box'>
                <h4 id='table-title' className="table-title">Schedule</h4>
                <table id="courses-table">
                    <thead>
                        <tr>
                            <th>Course Title</th>
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
                        <CoursesTableTags render={{courses: pieces.courses, filter: pieces.filter, num: pieces.num, sn: pieces.sn, nm: pieces.nm, scra: pieces.scra, sar1: pieces.sar1, sar2: pieces.sar2, stu: pieces.stu, setMsg: render.setMsg}}></CoursesTableTags>
                    </tbody>
                </table>
            </div>
        </>
    )
}
