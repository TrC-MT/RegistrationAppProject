import '../Styles/ComponentStyles/navbarStyles.css'
import Link from 'react';

export default function Navbar(){

    var navTitle = 'Create account';

    return(
        <>
            <nav>
                <h2 id="nav-title">{navTitle}</h2>
                <div className='nav-buttons-container'>
                    <button className='nav-button' onClick={back()}>Back</button>
                </div>
            </nav>
        </>
    )
}

function back() {

}