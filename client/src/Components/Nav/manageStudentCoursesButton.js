import {useNavigate} from 'react-router'


export default function ManageStudentCoursesButton({render}){
    const navigate = useNavigate();

    if(render == 'True'){
        return(
            <>
                <button className="nav-button" onClick={MStuCourses}>Manage student courses</button>
            </>
        )
    }

    function MStuCourses(){
        return navigate("/userProfile/adminData/manageStudentCourses")
    }
    
}

