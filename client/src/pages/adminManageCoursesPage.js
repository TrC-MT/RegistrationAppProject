import Navbar from "../Components/Nav/navbar";


export default function AdminManageCoursesPage(){

    return(
        <>
            <Navbar pieces={{title: 'Manage Courses', back: 'True', logout: 'True'}}></Navbar>
            <div className="page-box">
                
            </div>
        </>
    )
}