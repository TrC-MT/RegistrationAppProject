export default function ManageCoursesButton({render}){

    if(render == 'True'){
        return(
            <>
                <button className="nav-button" onClick={MCourses()}>Manage Courses</button>
            </>
        )
    }
    
}

function MCourses(){
    
}