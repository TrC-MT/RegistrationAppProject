import '../Styles/commonStyles.css';
import '../Styles/signUpPageStyles.css';
import Navbar from '../Components/navbar';
import { useState } from 'react';


export default function SignUpPage() {
    const [message, setMessage] = useState('');

    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [address, setAddress] = useState('');



    return(
        <>
            <Navbar pieces={{title: 'Create account', back: 'True'}}></Navbar>
            <div className='page-box' id='create-account-page-box'>
                <form id="sign-up-form">
                    {message && <div className='server-message'>{message}</div>}
                    <span className="form-section sign-up-form-section">
                        <label className='sign-up-form-label'>First name: </label>
                        <input name="first-name" type="first-name" id="first-name" placeholder="Type your first name here." onChange={(e) => setFirst_name(e.target.value)}/>
                    </span>
                    <span className="form-section sign-up-form-section">
                        <label className='sign-up-form-label'>Last name: </label>
                        <input name="last-name" type="last-name" id="last-name" placeholder="Type your last name here." onChange={(e) => setLast_name(e.target.value)}/>
                    </span>
                    <span className="form-section sign-up-form-section">
                        <label className='sign-up-form-label'>Username: </label>
                        <input name="username" id="username" placeholder="Type your username here." onChange={(e) => setUsername(e.target.value)}/>
                    </span>
                    <span className="form-section sign-up-form-section">
                        <label className='sign-up-form-label'>Password: </label>
                        <input name="password" type="password" id="password" placeholder="Type your password here." onChange={(e) => setPassword(e.target.value)}/>
                    </span>
                    <span className="form-section sign-up-form-section">
                        <label className='sign-up-form-label'>Email: </label>
                        <input name="email" type="email" id="email" placeholder="Type your email here." onChange={(e) => setEmail(e.target.value)}/>
                    </span>
                    <span className="form-section sign-up-form-section">
                        <label className='sign-up-form-label'>Phone number: </label>
                        <input name="phone-number" type="tel" id="phone-number" placeholder="Type your phone number here." onChange={(e) => setPhone_number(e.target.value)}/>
                    </span>
                    <span className="form-section sign-up-form-section">
                        <label className='sign-up-form-label'>Address: </label>
                        <input name="address" type="text" id="address" placeholder="Type your address here." onChange={(e) => setAddress(e.target.value)}/>
                    </span>
                    <button id='sign-up-form-submit' onClick={newUser}>Register</button>
                </form>
            </div>
        </>
    )
        //-----------------
    function newUser(){
        if(first_name != '' 
        && last_name != '' 
        && username != '' 
        && password != ''
        && email != ''
        && phone_number != ''
        && address != ''){
            var User = {
                    firstName: first_name,
                    lastName: last_name,
                    userName: username,
                    password: password,
                    email: email,
                    phoneNumber: phone_number,
                    address: address,
            }

            fetch('/userRegistration', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    newUser: User
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                if (data.errorMessage) {
                    setMessage(data.errorMessage)
                } else {
                    setMessage(data.message)
                    localStorage.setItem("myToken", data.token);
                }
                });
        }
        else{
            setMessage('Please type your information into the proper fields.');
        }
        
    }

}
