import '../Styles/commonStyles.css';
import '../Styles/PageStyles/signUpPageStyles.css';
import '../Styles/PageStyles/profilePageStyles.css'
import Navbar from '../Components/Nav/navbar';
import SideStudentProfileInfo from '../Components/Data/sideStudentProfileInfo';
import UserForm from '../Components/Form/userForm';


export default function ProfilePage() {
    let flag = false;
    //call a fetch to get the user info
    let user_attributes = {};
    fetch('/userInformation', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        // fill in the attribute.value object with that info
        user_attributes = {
            fn: `defaultValue: ${data.fn}`,
            ln: `defaultValue: ${data.ln}`,
            un: `defaultValue: ${data.un}`,
            pw: `defaultValue: ${data.pw}`,
            e: `defaultValue: ${data.e}`,
            pn: `defaultValue: ${data.pn}`,
            a: `defaultValue: ${data.a}`,
        }
    })



    var user_type = 'Admin';
    //Uncomment line below to see student view, comment line below to see admin view.
    user_type = 'Student';
    //Check if the user is a student or admin
    //if user is a student, set user_type to 'Student'; if user is admin, set user_type to 'Admin'.
    fetch('/isAdmin', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(res => res.json())
    .then(data => {
        user_type = data;
    })

    

    return(
        <>
            <Navbar pieces={{title: 'Profile', logout: 'True', dOc: {render: true, userType: user_type}, cl: 'lbnav'}}></Navbar>
            <div className='page-box' id='create-account-page-box'>
                <UserForm render={{buttonText: 'Update', attribute: user_attributes, flag: flag}}></UserForm>
                <SideStudentProfileInfo render={user_type}></SideStudentProfileInfo>
            </div>
        </>
    )
}