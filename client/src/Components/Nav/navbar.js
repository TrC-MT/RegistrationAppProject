import '../../Styles/ComponentStyles/navbarStyles.css'
import Link from 'react';
import BackButton from './backButton';
import LogOutButton from './logOutButton';
import DataORCoursesButton from './dataORcoursesButton';
import ManageStudentCoursesButton from './manageStudentCoursesButton';
import ManageCoursesButton from './manageCoursesButton';

export default function Navbar({pieces}){

        return(
            <>
                <nav className={pieces.cl}>
                    <h2 id="nav-title">{pieces.title}</h2>
                    <div className='nav-buttons-container'>
                            <BackButton render={pieces.back}></BackButton>

                            <DataORCoursesButton show={pieces.dOc}></DataORCoursesButton>

                            <ManageCoursesButton render={pieces.mc}></ManageCoursesButton>
                            <ManageStudentCoursesButton render={pieces.msc}></ManageStudentCoursesButton>
                            
                            <LogOutButton render={pieces.logout}></LogOutButton>
                            
                    </div>
                </nav>
            </>
        )
}

function back() {

}