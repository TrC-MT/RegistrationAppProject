import '../Styles/loginPageStyles.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';

//======================
export default function LoginPage() {
    const [message, setMessage] = useState('');
    const [login_username, setLogin_username] = useState('');
    const [login_password, setLogin_password] = useState('');
    
    //-----------------------

    return(
        <>
            <div id='abb-1' className='animate-background-box'></div>
            <div id='abb-2' className='animate-background-box'></div>
            <div id='abb-3' className='animate-background-box'></div>

            {message && <div className='server-message'>{message}</div>}

            <div id="crecent-box">
                <div id='image-helper'>
                    <img src={require("../Images/logo192.png")} id="react-logo" alt='react-logo-green'/>
                    <div id="loginContainer">
                        <h2>Login</h2>
                        <form id="login-form">
                            <span className="form-section">
                                <label>Username: </label>
                                <input name="username" id="username" placeholder="Type your username here." onChange={(e) => setLogin_username(e.target.value)}/>
                            </span>
                            <span className="form-section">
                                <label>Password: </label>
                                <input name="password" type="password" id="password" placeholder="Type your password here." onChange={(e) => setLogin_password(e.target.value)}/>
                            </span>
                            <span className="form-section">
                                <button className="login-button" onClick={studentLogin}>Login as a student</button>
                                <button className="login-button" onClick={adminLogin}>Login as an administrator</button>
                            </span>
                        </form>
                        <Link to="/signUp" id="sign-up-button">New user?</Link>
                    </div>
                </div>
            </div>
        </>
    )
    //-----------------------------------------------------

    function studentLogin() {
        if(login_username != '' && login_password != ''){
            var loginUser = {
                    userName: login_username,
                    password: login_password,
            }

            fetch('/studentLogin', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Credentials: loginUser
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                if (data.errorMessage) {
                    setMessage(data.errorMessage)
                } else {
                    setMessage(data.message)
                    // localStorage.setItem("myToken", data.token);
                }
                });
        }
        else{
            setMessage('Please type your information into the proper fields.');
        }
        
    }

    //----------
    
    function adminLogin() {
        // fetch('/adminLogin', {})

    }

}
//=================

