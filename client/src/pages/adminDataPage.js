import '../Styles/PageStyles/adminDataPageStyles.css'
import { useState } from "react";
import StudentIDs from "../Components/Data/studentIDs";
import Navbar from "../Components/Nav/navbar";
import ServerMessage from '../Components/serverMessage';

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

    var total_students = 50;
    var total_tuition = 9999
    //Fetch the amount of accounts, tuition due
    fetch('/totalStuTuit', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // body: JSON.stringify({
        //     question: 'Can I get the total students and total tuition?'
        // }),
    })
    .then((res) => res.json())
    .then((data) => {
        total_students = data.ts
        total_tuition = data.tt
    });
    
    //Fetch the accounts info
    fetch('/AllAccountsInfo', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        // body: JSON.stringify({
        //     question: 'Can I get all the Accounts information?
        // }),
    })
    .then((res) => res.json())
    .then((data) => {
        let accounts = data; //I'm assuming an array of objects. Ex: [{id: blah, fn: blah, ln: blah, un: blah, pswd: blah, etc.}]
    });

    var student_IDs = [134124, 2352435, 46546, 2423, 46546, 13425];

    function handleRoll(target_value){
        setRoll(target_value)
        setShowChangeButton(true)
    }

    return (
        <>
            <Navbar pieces={{title: 'Manage accounts', msc: 'True', mc: 'True', logout: 'True'}}></Navbar>
            <div className="page-box">
            <ServerMessage Message={{message, sm: setMessage}}></ServerMessage>
                <div className="top-info">
                    <p>
                        Amount of students: {total_students}
                    </p>
                    <p>
                        Total tuition due: ${total_tuition} 
                    </p>
                </div>
                
                <div id="account-manager-container">
                    <h5>Account:</h5>
                    <input defaultValue="Search by ID" onKeyUp={(e) => setFilter(e.target.value) }></input>
                    <label for="accounts" className='account-info-label'>ID:</label>
                    <select name="accounts" onClick={(e) => findaccount(e)}>
                        <StudentIDs render={{student_IDs, filter}}></StudentIDs>
                    </select>
                    <label for="account-first-name" className='account-info-label'>First name:</label>
                    <input className="account-info-input" name="account-first-name" id="account-first-name" onKeyUp={(e) => setaccount_first_name(e.target.value)} defaultValue={account_first_name}></input>
                    <label for="account-last-name" className='account-info-label'>Last name:</label>
                    <input className="account-info-input" name="account-last-name" id="account-last-name" onKeyUp={(e) => setaccount_last_name(e.target.value)} defaultValue={account_last_name}></input>
                    <label for="account-username" className='account-info-label'>Username:</label>
                    <input className="account-info-input" name="account-username" id="account-username" onKeyUp={(e) => setaccount_username(e.target.value)} defaultValue={account_username}></input>
                    <label for="account-password" className='account-info-label'>Password:</label>
                    <input className="account-info-input" name="account-password" id="account-password" onKeyUp={(e) => setaccount_password(e.target.value)} defaultValue={account_password}></input>
                    <label for="account-email" className='account-info-label'>Email:</label>
                    <input className="account-info-input" name="account-email" id="account-email" onKeyUp={(e) => setaccount_email(e.target.value)} defaultValue={account_email}></input>
                    <label for="account-phone-number" className='account-info-label'>Phone number:</label>
                    <input className="account-info-input" name="account-phone-number" id="account-phone-number" onKeyUp={(e) => setaccount_phone_number(e.target.value)} defaultValue={account_phone_number}></input>
                    <label for="account-address" className='account-info-label'>Address:</label>
                    <input className="account-info-input" name="account-address" id="account-address" onKeyUp={(e) => setaccount_address(e.target.value)} defaultValue={account_address}></input>
                    <label for="is-admin" className='account-info-label'>Role:</label>
                    <select name="is-admin" id="is-admin" onClick={(e) => handleRoll(e.target.value)}>
                        <option>Student</option>
                        <option>Administrator</option>
                    </select>
                    {showChangeButton && <button onClick={updateUser}>Change</button>}
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
                    role: roll,
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
                }
                });
        }
        else{
            setMessage('Please type the information into the proper fields.');
        }
    }
}