import '../../Styles/ComponentStyles/userFormStyles.css'

import { useState } from 'react';
import {useNavigate} from 'react-router'

import UserFormSubmitButton from './userFormSubmitButton';
import ServerMessage from '../serverMessage';

export default function UserForm({render}) {
    const flag = render.flag;
    const navigate = useNavigate();

    const [message, setMessage] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [address, setAddress] = useState('');
    const [showSubmitButton, setShowSubmitButton] = useState(false);
    
    function handleFNChange(e){
        setFirst_name(e.target.value)
        setShowSubmitButton(true)
    }
    function handleLNChange(e){
        setLast_name(e.target.value)
        setShowSubmitButton(true)
    }
    function handleUNChange(e){
        setUsername(e.target.value)
        setShowSubmitButton(true)
    }
    function handlePwChange(e){
        setPassword(e.target.value)
        setShowSubmitButton(true)
    }
    function handleEChange(e){
        setEmail(e.target.value)
        setShowSubmitButton(true)
    }
    function handlePnChange(e){
        setPhone_number(e.target.value)
        setShowSubmitButton(true)
    }
    function handleAChange(e){
        setAddress(e.target.value)
        setShowSubmitButton(true)
    }

    return(
        <>
            <ServerMessage Message={{message, sm: setMessage}}></ServerMessage>
            <div id="user-form">
            {flag ? <h4 className="update-user-header">Create New User</h4> : <h4 className="update-user-header">Update User Account</h4>}
                    <span className="form-section user-form-section">
                        <label className='user-form-label'>First name: </label>
                        <input name="first-name" type="first-name" id="first-name" {...render.attribute.fn} onChange={(e) => handleFNChange(e)}/>
                    </span>
                    <span className="form-section user-form-section">
                        <label className='user-form-label'>Last name: </label>
                        <input name="last-name" type="last-name" id="last-name" {...render.attribute.ln} onChange={(e) => handleLNChange(e)}/>
                    </span>
                    <span className="form-section user-form-section">
                        <label className='user-form-label'>Username: </label>
                        <input name="username" id="username" {...render.attribute.un} onChange={(e) => handleUNChange(e)}/>
                    </span>
                    <span className="form-section user-form-section">
                        <label className='user-form-label'>Password: </label>
                        <input name="password" type="password" id="password" {...render.attribute.pw} onChange={(e) => handlePwChange(e)}/>
                    </span>
                    <span className="form-section user-form-section">
                        <label className='user-form-label'>Email: </label>
                        <input name="email" type="email" id="email" {...render.attribute.e} onChange={(e) => handleEChange(e)}/>
                    </span>
                    <span className="form-section user-form-section">
                        <label className='user-form-label'>Phone number: </label>
                        <input name="phone-number" type="tel" id="phone-number" {...render.attribute.pn} onChange={(e) => handlePnChange(e)}/>
                    </span>
                    <span className="form-section user-form-section">
                        <label className='user-form-label'>Address: </label>
                        <input name="address" type="text" id="address" {...render.attribute.a} onChange={(e) => handleAChange(e)}/>
                    </span>
                    {/* render.click is what calls the functions defined below. */}
                    {showSubmitButton && <UserFormSubmitButton pieces={{type: {...render.attribute}, text: render.buttonText, funct: {newUser, updateUser}}}></UserFormSubmitButton>}
                </div>    
        </>
    )

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
                    if (data.status == false) {
                        setMessage(data.msg);
                    } else {
                        setMessage(data.msg);
                        
                    }
                    })
                .then(() => {
                    console.log('redirecting..')
                    return navigate("/")
                })
        }
        else{
            setMessage('Please type your information into the proper fields.');
        }
        
    }

    function updateUser(){

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

            fetch('/editUser', {
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
                    // localStorage.setItem("myToken", data.token);
                }
                });
        }
        else{
            setMessage('Please type your information into the proper fields.');
        }
    }
}