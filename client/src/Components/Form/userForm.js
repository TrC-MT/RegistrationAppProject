import '../../Styles/ComponentStyles/userFormStyles.css'

import { useState } from 'react';
import UserFormSubmitButton from './userFormSubmitButton';

export default function UserForm({render}) {

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
            <div id="user-form">
                    <span className="form-section user-form-section">
                        <label className='user-form-label'>First name: </label>
                        <input name="first-name" type="first-name" id="first-name" {...render.attribute} onChange={(e) => handleFNChange(e)}/>
                    </span>
                    <span className="form-section user-form-section">
                        <label className='user-form-label'>Last name: </label>
                        <input name="last-name" type="last-name" id="last-name" {...render.attribute} onChange={(e) => handleLNChange(e)}/>
                    </span>
                    <span className="form-section user-form-section">
                        <label className='user-form-label'>Username: </label>
                        <input name="username" id="username" {...render.attribute} onChange={(e) => handleUNChange(e)}/>
                    </span>
                    <span className="form-section user-form-section">
                        <label className='user-form-label'>Password: </label>
                        <input name="password" type="password" id="password" {...render.attribute} onChange={(e) => handlePwChange(e)}/>
                    </span>
                    <span className="form-section user-form-section">
                        <label className='user-form-label'>Email: </label>
                        <input name="email" type="email" id="email" {...render.attribute} onChange={(e) => handleEChange(e)}/>
                    </span>
                    <span className="form-section user-form-section">
                        <label className='user-form-label'>Phone number: </label>
                        <input name="phone-number" type="tel" id="phone-number" {...render.attribute} onChange={(e) => handlePnChange(e)}/>
                    </span>
                    <span className="form-section user-form-section">
                        <label className='user-form-label'>Address: </label>
                        <input name="address" type="text" id="address" {...render.attribute} onChange={(e) => handleAChange(e)}/>
                    </span>
                    {/* render.click is what calls the functions defined below. */}
                    {showSubmitButton && <UserFormSubmitButton pieces={{type: {...render.attribute}, text: render.buttonText, info: {FN: first_name, LN: last_name, UN: username, PW: password, E: email, PN: phone_number, A: address }}}></UserFormSubmitButton>}
                </div>    
        </>
    )
}