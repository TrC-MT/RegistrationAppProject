import '../Styles/commonStyles.css';
import '../Styles/signUpPageStyles.css';
import Navbar from '../Components/Nav/navbar';
import { useState } from 'react';
import UserForm from '../Components/Form/userForm';


export default function SignUpPage() {

    return(
        <>
            <Navbar pieces={{title: 'Create account', back: 'True'}}></Navbar>
            <div className='page-box' id='create-account-page-box'>
                <UserForm render={{buttonText: 'Register', attribute: {placeholder: 'Type your information here.'}}}></UserForm>
            </div>
        </>
    )

}
