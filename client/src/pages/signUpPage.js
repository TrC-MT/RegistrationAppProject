import '../Styles/commonStyles.css';
import '../Styles/PageStyles/signUpPageStyles.css';

import Navbar from '../Components/Nav/navbar';
import UserForm from '../Components/Form/userForm';


export default function SignUpPage() {
    let flag = true;
    return(
        <>
            <Navbar pieces={{title: 'Create account', back: 'True', cl: 'lbnav'}}></Navbar>
            <div className='page-box' id='create-account-page-box'>
                <UserForm render={{buttonText: 'Register', attribute: {placeholder: 'Type your information here.'}, click: 'newUser', flag: flag}}></UserForm>
            </div>
        </>
    )

}
