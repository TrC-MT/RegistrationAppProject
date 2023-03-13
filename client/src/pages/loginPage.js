import '../Styles/PageStyles/loginPageStyles.css';

import {Link, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import ServerMessage from '../Components/serverMessage';

//======================
export default function LoginPage() {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [login_username, setLogin_username] = useState('');
    const [login_password, setLogin_password] = useState('');
    
    //-----------------------

    return(
        <>
            <div id='abb-1' className='animate-background-box'></div>
            <div id='abb-2' className='animate-background-box'></div>
            <div id='abb-3' className='animate-background-box'></div>

            <ServerMessage Message={{message, sm: setMessage}}></ServerMessage>

            <div id="crecent-box">
                <div id='image-helper'>
                    <img src={require("../Images/logo192.png")} id="react-logo" alt='react-logo-green'/>
                    <div id="loginContainer">
                        <h2>Registration Capstone Login</h2>
                        <div id="login-form">
                            <span className="form-section">
                                <label>Username: </label>
                                <input name="username" id="username" placeholder="Type your username here." onChange={(e) => setLogin_username(e.target.value)}/>
                            </span>
                            <span className="form-section">
                                <label>Password: </label>
                                <input name="password" type="password" id="password" placeholder="Type your password here." onChange={(e) => setLogin_password(e.target.value)}/>
                            </span>
                            <span className="form-section">
                                <button className="login-button" onClick={studentLogin}>Student login</button>
                                <button className="login-button" onClick={adminLogin}>Admin login</button>
                            </span>
                        </div>
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
                    username: login_username,
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
                    console.log(data);
                    setMessage(data.errorMessage)
                } else {
                    console.log(data);
                    // localStorage.setItem("myToken", data.token);
                    navigate('/userProfile')
                    setMessage(data.successMessage)
                }
                });
        }
        else{
            setMessage('Please type your information into the proper fields.');
        }
        
    }

    //----------  Yes, they are the same thing. If this were a different application, and/or we were using tokens, they would need to be different.
    
    function adminLogin() {
        if(login_username != '' && login_password != ''){
            var loginUser = {
                    userName: login_username,
                    password: login_password,
            }

            fetch('/adminLogin', {
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
                    // setMessage(data.successMessage);
                    navigate('/userProfile')
                }
                });
        }
        else{
            setMessage('Please type your information into the proper fields.');
        }

    }

}

//--------------

//=================

