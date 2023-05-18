import { useEffect, useState } from "react";
import "../../Styles/ComponentStyles/coursesTableStyles.css";
import CoursesTableTags from "./coursesTableTags";

export default function CoursesTable({ pieces }) {
  let stuid = pieces.stu;
  let allCoursesKey = pieces.allCoursesKey;
  console.log('inside coursesTable.js', allCoursesKey);
  // let studentName = pieces.studentName;
  const [enrolledCourses, setEnrolledCourses] = useState(0);

  return (
    <>
      <div className="table-box">
        <div className="course-descriptors">
            <h4 id="table-title" className="table-title">
                {allCoursesKey ? `User Courses` : 'Enrolled/Available Courses'}
            </h4>
            <div className="enrollment-stats">Total enrolled courses: <span>{enrolledCourses}</span></div>
        </div>

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
            <CoursesTableTags
              render={{
                courses: pieces.courses,
                filter: pieces.filter,
                num: pieces.num,
                sc: pieces.sc,
                sn: pieces.sn,
                nm: pieces.nm,
                scra: pieces.scra,
                sar1: pieces.sar1,
                sar2: pieces.sar2,
                stu: pieces.stu,
                sec: setEnrolledCourses,
              }}
            ></CoursesTableTags>
          </tbody>
        </table>
      </div>
    </>
  );
}
