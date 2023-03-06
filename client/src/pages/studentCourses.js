import LogOutButton from '../Components/Nav/logOutButton'
import Navbar from '../Components/Nav/navbar'




export default function StudentCourses(){

    //if(registered){
        // return(
            //the page
        // )
    // }

    return(
        <>
            <Navbar pieces={{title: 'Courses',logout: 'True'}}></Navbar>
            <div className="page-box">

            </div>
            
        </>
    )
}