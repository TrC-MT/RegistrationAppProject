export default function ManageStudentCoursesButton({render}){

    if(render == 'True'){
        return(
            <>
                <button className="nav-button" onClick={MStuCourses()}>Manage student courses</button>
            </>
        )
    }
    
}

function MStuCourses(){
    
}