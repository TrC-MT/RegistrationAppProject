import '../Styles/loginPageStyles.css';
import {Link} from 'react-router-dom';


export default function LoginPage() {

    
    return(
        <>
            <div id='abb-1' className='animate-background-box'></div>
            <div id='abb-2' className='animate-background-box'></div>
            <div id='abb-3' className='animate-background-box'></div>

            <div id="crecent-box">
                <div id='image-helper'>
                    <img src={require("../Images/logo192.png")} id="react-logo" alt='react-logo-green'/>
                    <div id="loginContainer">
                        <h2>Login</h2>
                        <form id="login-form">
                            <span className="form-section">
                                <label>Username: </label>
                                <input name="username" id="username" placeholder="Type your username here."/>
                            </span>
                            <span className="form-section">
                                <label>Password: </label>
                                <input name="password" type="password" id="password" placeholder="Type your password here."/>
                            </span>
                            <span className="form-section">
                                <button onClick={studentLogin()}>Login as a student</button>
                                <button onClick={adminLogin()}>Login as an administrator</button>
                            </span>
                        </form>
                        <Link to="/signUp" id="sign-up-button">New user?</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

function studentLogin() {
    // fetch('/studentLogin', {})
}

function adminLogin() {
        // fetch('/adminLogin', {})

}