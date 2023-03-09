import {useNavigate} from 'react-router'
import { useState } from 'react';

export default function UserFormSubmitButton({pieces}){

    const navigate = useNavigate();

    const [message, setMessage] = useState('')

    if(pieces.type.placeholder){
        return (
            <>
                {message && <div className='server-message'>{message}</div>}
                <button id='user-form-submit' onClick={newUser}>{pieces.text}</button>
            </>
        )
    }
    else if(pieces.type.defaultValue == ''){
        return (
            <>
                {message && <div className='server-message'>{message}</div>}
                <button id='user-form-submit' onClick={updateUser}>{pieces.text}</button>
            </>
        )
    }
    
    let first_name = pieces.FN;
    let last_name = pieces.LN;
    let username = pieces.UN;
    let password = pieces.PW;
    let email = pieces.E
    let phone_number = pieces.PN;
    let address = pieces.A;

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
        console.log('first_name = ' + first_name)

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