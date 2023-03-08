import { useNavigate } from "react-router-dom"

export default function DataORCoursesButton({show}){
    const navigate = useNavigate();

    if(show != undefined){
        if(show.render == true){
            if(show.userType == 'Student'){
                return(
                    <>
                        <button className="nav-button dOC-button" onClick={toStudentCourses}>Courses</button>
                    </>
                )
            }
            else if(show.userType == 'Admin'){
                return(
                    <>
                        <button className="nav-button dOC-button" onClick={toAdminData}>Data</button>
                    </>
                )
            }
        }

    }

    function toStudentCourses() {
        return navigate('/userProfile/courses')
    }
    
    function toAdminData() {
        return navigate('/userProfile/adminData')
    }
}

