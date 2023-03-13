import '../Styles/commonStyles.css';
import '../Styles/PageStyles/signUpPageStyles.css';
import '../Styles/PageStyles/profilePageStyles.css'
import Navbar from '../Components/Nav/navbar';
import SideStudentProfileInfo from '../Components/Data/sideStudentProfileInfo';
import UserForm from '../Components/Form/userForm';


export default function ProfilePage() {
    
    //call a fetch to get the user info
    // fill in the attribute.value object with that info

    //Check if the user is a student or admin
    //if user is a student, set user_type to 'Student'; if user is admin, set user_type to 'Admin'.

    var user_type = 'Admin';
    //Uncomment line below to see student view, comment line below to see admin view.
    user_type = 'Student';

    return(
        <>
            <Navbar pieces={{title: 'Profile', logout: 'True', dOc: {render: true, userType: user_type}, cl: 'lbnav'}}></Navbar>
            <div className='page-box' id='create-account-page-box'>
                <UserForm render={{buttonText: 'Update', attribute: {defaultValue: ''}}}></UserForm>
                <SideStudentProfileInfo render={user_type}></SideStudentProfileInfo>
            </div>
        </>
    )
}