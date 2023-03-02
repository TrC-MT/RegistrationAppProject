import '../Styles/commonStyles.css';
import '../Styles/signUpPageStyles.css';
import '../Styles/profilePageStyles.css'
import Navbar from '../Components/navbar';
import SideStudentProfileInfo from '../Components/sideStudentProfileInfo';


export default function ProfilePage() {
    
    //call a fetch to get the user info
    // fill in the values with that info

    var val = 'Loading...';

    //Check if the user is a student or admin
    //if user is a student, set user_type to 'Student'; if user is admin, set user_type to 'Admin'.

    var user_type = 'Admin';
    //Uncomment line below to see student view, comment line below to see admin view.
    user_type = 'Student';

    return(
        <>
            <Navbar pieces={{title: 'Profile', logout: 'True', dOc: {render: true, userType: user_type}}}></Navbar>
            <div className='page-box' id='create-account-page-box'>
                <form id="sign-up-form">
                    <span className="form-section sign-up-form-section">
                        <label className='sign-up-form-label'>First name: </label>
                        <input name="first-name" type="first-name" id="first-name" value={val}/>
                    </span>
                    <span className="form-section sign-up-form-section">
                        <label className='sign-up-form-label'>Last name: </label>
                        <input name="last-name" type="last-name" id="last-name" value={val}/>
                    </span>
                    <span className="form-section sign-up-form-section">
                        <label className='sign-up-form-label'>Username: </label>
                        <input name="username" id="username" value={val}/>
                    </span>
                    <span className="form-section sign-up-form-section">
                        <label className='sign-up-form-label'>Password: </label>
                        <input name="password" type="password" id="password" value={val}/>
                    </span>
                    <span className="form-section sign-up-form-section">
                        <label className='sign-up-form-label'>Email: </label>
                        <input name="email" type="email" id="email" value={val}/>
                    </span>
                    <span className="form-section sign-up-form-section">
                        <label className='sign-up-form-label'>Phone number: </label>
                        <input name="phone-number" type="tel" id="phone-number" value={val}/>
                    </span>
                    <span className="form-section sign-up-form-section">
                        <label className='sign-up-form-label'>Address: </label>
                        <input name="address" type="text" id="address" value={val}/>
                    </span>
                    <button id='sign-up-form-submit' onClick={updateUser}>Update</button>
                </form>
                <SideStudentProfileInfo render={user_type}></SideStudentProfileInfo>
            </div>
        </>
    )
}

function updateUser(){

    // fetch('/userRegistration', {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         first_name: document.getElementById('first-name').value,
    //         last_name: document.getElementById('last-name').value,
    //         user_name: document.getElementById("username").value,
    //         password: document.getElementById("password").value,
    //         email: document.getElementById('email').value,
    //         address: document.getElementById('address').value,
    //     }),
    // })
        // .then((res) => res.json())
        // .then((data) => {
        // if (data.errorMessage) {
        //     document.getElementById("serverMessage").innerHTML = data.errorMessage;
        // } else {
        //     document.getElementById("serverMessage").innerHTML = data.message;
        //     localStorage.setItem("myToken", data.token);
        // }
        // });


}