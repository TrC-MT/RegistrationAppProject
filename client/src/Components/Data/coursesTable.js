import { useEffect } from 'react';
import '../../Styles/ComponentStyles/coursesTableStyles.css'
import CoursesTableTags from "./coursesTableTags"

export default function CoursesTable({pieces}){    
    
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
                        <CoursesTableTags render={{courses: pieces.courses, filter: pieces.filter, num: pieces.num, sn: pieces.sn, nm: pieces.nm, scra: pieces.scra, sar1: pieces.sar1, sar2: pieces.sar2, stu: pieces.stu}}></CoursesTableTags>
                    </tbody>
                </table>
            </div>
        </>
    )
}
