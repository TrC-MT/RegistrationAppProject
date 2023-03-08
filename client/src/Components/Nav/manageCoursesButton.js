import {useNavigate} from 'react-router'

export default function ManageCoursesButton({render}){
    const navigate = useNavigate();


    if(render == 'True'){
        return(
            <>
                <button className="nav-button" onClick={MCourses}>Manage Courses</button>
            </>
        )
    }

    function MCourses(){
        console.log('Nav')
        return navigate("/userProfile/adminData/manageCourses")
    }
}

