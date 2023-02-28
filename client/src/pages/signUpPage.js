import '../Styles/commonStyles.css';
import '../Styles/signUpPageStyles.css';
import Navbar from '../Components/navbar';


export default function SignUpPage() {
    

    return(
        <>
            <Navbar></Navbar>
            <div className='page-box' id='create-account-page-box'>
            <form id="sign-up-form">
                        <span className="form-section sign-up-form-section">
                            <label>First name: </label>
                            <input name="first-name" type="first-name" id="first-name" placeholder="Type your first name here."/>
                        </span>
                        <span className="form-section sign-up-form-section">
                            <label>Last name: </label>
                            <input name="last-name" type="last-name" id="last-name" placeholder="Type your last name here."/>
                        </span>
                        <span className="form-section sign-up-form-section">
                            <label>Username: </label>
                            <input name="username" id="username" placeholder="Type your username here."/>
                        </span>
                        <span className="form-section sign-up-form-section">
                            <label>Password: </label>
                            <input name="password" type="password" id="password" placeholder="Type your password here."/>
                        </span>
                        <span className="form-section sign-up-form-section">
                            <label>Email: </label>
                            <input name="email" type="email" id="email" placeholder="Type your email here."/>
                        </span>
                        <span className="form-section sign-up-form-section">
                            <label>Address: </label>
                            <input name="address" type="text" id="address" placeholder="Type your address here."/>
                        </span>
                        <button id='sign-up-form-submit' onClick={newUser()}>Register</button>
                    </form>
            </div>
        </>
    )
}

function newUser(){

}