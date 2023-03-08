

export default function DataORCoursesButton({show}){

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

    }
    
    function toAdminData() {
    
    }
}

