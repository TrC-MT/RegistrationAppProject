import StudentIDs from "../Components/Data/studentIDs";
import Navbar from "../Components/Nav/navbar";



export default function AdminDataPage() {
    let filter = 1;
    //Fetch the amount of students, tuition due
    var total_students = 50;
    var total_tuition = 9999
    //Fetch the students info
    var student_IDs = [134124, 2352435, 46546, 2423, 46546, 13425];

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
                    <input placeholder="Search by ID" onKeyUp={(e) => (filter = e.target.value)}></input>
                    <label for="students">Student:</label>
                    <select name="students" onClick={(e) => sendvalue(e)}>
                        <StudentIDs render={{student_IDs, filter}}></StudentIDs>
                    </select>
                </div>

            </div>
        </>
    )

    function sendvalue(e){
       console.log(e.target.value);
    }
}