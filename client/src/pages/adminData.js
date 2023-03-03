import StudentNames from "../Components/Data/studentNames";
import Navbar from "../Components/Nav/navbar";



export default function AdminDataPage() {

    //Fetch the amount of students, tuition due
    var total_students = 50;
    var total_tuition = 9999
    //Fetch the students info
    var student_names = ['Jonny', 'Jimmy', 'Jane', 'Billy', 'Bob', 'Betty'];

    return (
        <>
            <Navbar pieces={{title: 'Manage Students', msc: 'True', mc: 'True', logout: 'True'}}></Navbar>
            <div className="page-box">
                <div className="top-info">
                    <p>
                        Amount of students: {total_students}
                    </p>
                    <p>
                        Total tuition due: ${total_tuition} 
                    </p>
                </div>
                
                <div id="student-manager-container">
                    <label for="students">Student:</label>
                    <select name="students">
                        <StudentNames names={student_names}></StudentNames>
                    </select>
                </div>

            </div>
        </>
    )
}