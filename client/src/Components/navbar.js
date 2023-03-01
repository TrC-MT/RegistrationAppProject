import '../Styles/ComponentStyles/navbarStyles.css'
import Link from 'react';
import BackButton from './backButton';
import LogOutButton from './logOutButton';
import DataORCoursesButton from './dataORcoursesButton';

export default function Navbar({pieces}){

        return(
            <>
                <nav>
                    <h2 id="nav-title">{pieces.title}</h2>
                    <div className='nav-buttons-container'>
                            <BackButton render={pieces.back}></BackButton>

                            <DataORCoursesButton show={pieces.dOc}></DataORCoursesButton>
                            
                            <LogOutButton render={pieces.logout}></LogOutButton>
                            
                    </div>
                </nav>
            </>
        )
}

function back() {

}