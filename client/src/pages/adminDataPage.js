import '../Styles/adminDataPageStyles.css'
import { useState } from "react";
import StudentIDs from "../Components/Data/studentIDs";
import Navbar from "../Components/Nav/navbar";
import UserForm from '../Components/Form/userForm';



export default function AdminDataPage() {
    const [message, setMessage] = useState('')
    let [filter, setFilter] = useState('');
    let [showChangeButton, setShowChangeButton] = useState(false)
    const [account_first_name, setaccount_first_name] = useState('');
    const [account_last_name, setaccount_last_name] = useState('');
    const [account_username, setaccount_username] = useState('');
    const [account_password, setaccount_password] = useState('');
    const [account_email, setaccount_email] = useState('');
    const [account_phone_number, setaccount_phone_number] = useState('');
    const [account_address, setaccount_address] = useState('');
    let [roll, setRoll] = useState('Student');
    //Fetch the amount of accounts, tuition due
    var total_students = 50;
    var total_tuition = 9999
    //Fetch the accounts info
    var student_IDs = [134124, 2352435, 46546, 2423, 46546, 13425];

    return (
        <>
            <Navbar pieces={{title: 'Manage accounts', msc: 'True', mc: 'True', logout: 'True'}}></Navbar>
            <div className="page-box">
                {message && <div className='server-message'>{message}</div>}
                <div className="top-info">
                    <p>
                        Amount of students: {total_students}
                    </p>
                    <p>
                        Total tuition due: ${total_tuition} 
                    </p>
                </div>
                
                {/* <div id="account-manager-container">
                    <h5>Account:</h5>
                    <input placeholder="Search by ID" onKeyUp={(e) => setFilter(e.target.value) }></input>
                    <label for="accounts" id='account-info-label'>ID:</label>
                    <select name="accounts" onClick={(e) => findaccount(e)}>
                        <StudentIDs render={{student_IDs, filter}}></StudentIDs>
                    </select>
                    <input className="account-info-input" name="account-first-name" id="account-first-name" onKeyUp={(e) => setaccount_first_name(e.target.value)} placeholder={account_first_name}></input>
                    <input className="account-info-input" name="account-last-name" id="account-last-name" onKeyUp={(e) => setaccount_last_name(e.target.value)} placeholder={account_last_name}></input>
                    <input className="account-info-input" name="account-username" id="account-username" onKeyUp={(e) => setaccount_username(e.target.value)} placeholder={account_username}></input>
                    <input className="account-info-input" name="account-password" id="account-password" onKeyUp={(e) => setaccount_password(e.target.value)} placeholder={account_password}></input>
                    <input className="account-info-input" name="account-email" id="account-email" onKeyUp={(e) => setaccount_email(e.target.value)} placeholder={account_email}></input>
                    <input className="account-info-input" name="account-phone-number" id="account-phone-number" onKeyUp={(e) => setaccount_phone_number(e.target.value)} placeholder={account_phone_number}></input>
                    <input className="account-info-input" name="account-address" id="account-address" onKeyUp={(e) => setaccount_address(e.target.value)} placeholder={account_address}></input>
                    <select name="is-admin" id="is-admin" onClick={(e) => setRoll(e.target.value)}>
                        <option>Student</option>
                        <option>Administrator</option>
                    </select>
                    {showChangeButton && <button onClick={updateUser}>Change</button>}
                </div> */}
                <div id="account-manager-container">
                    <h5>Account:</h5>
                    <input placeholder="Search by ID" onKeyUp={(e) => setFilter(e.target.value) }></input>
                    <label for="accounts" id='account-info-label'>ID:</label>
                    <select name="accounts" onClick={(e) => findaccount(e)}>
                        <StudentIDs render={{student_IDs, filter}}></StudentIDs>
                    </select>
                    <UserForm render={{attribute: 'placeholder'}}></UserForm>
                </div>
            </div>
        </>
    )

    function findaccount(e){
        //send the e.target.value to filter the right account info
        setaccount_first_name();
        setaccount_last_name();
        setaccount_username();
        setaccount_password();
        setaccount_email();
        setaccount_phone_number();
        setaccount_address();
    }

    function updateUser(){
        if(account_first_name != '' 
        && account_last_name != '' 
        && account_username != '' 
        && account_password != ''
        && account_email != ''
        && account_phone_number != ''
        && account_address != ''){
            var User = {
                    firstName: account_first_name,
                    lastName: account_last_name,
                    userName: account_username,
                    password: account_password,
                    email: account_email,
                    phoneNumber: account_phone_number,
                    address: account_address,
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
            setMessage('Please type the information into the proper fields.');
        }
    }
}