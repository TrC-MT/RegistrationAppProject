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

    var accounts = [ //No need to comment this out. It gets redefined when the fetch runs.
        {id: 1234, fn: 'Joe', ln: 'Boon', un: 'Jboon', pswd: '134lj1235', 
        email: 'Jboon@testing.nully', pn: '555-555-5555', adrs: 'homeless', roll: 'Student'
        },
        {id: 5332, fn: 'Dalton', ln: 'Rasin', un: 'DRassin', pswd: '5039adsfl2345',
        email: 'Drasin@debugg.undefined', pn: '888-888-8888', adrs: '234 oak ln', roll: 'Admin'
        },
        {id: 364, fn: 'Gary', ln: 'winters', un: 'unrealated', pswd: 'adfs3w5adsf4',
        email: 'Nevermessageme@no.haha', pn: '123-321-4321', adrs: 'Ion 65 fl2', roll: 'Student'
        },
    ];
    
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
        accounts = data; //I'm assuming an array of objects. Ex: [{id: blah, fn: blah, ln: blah, un: blah, pswd: blah, etc.}]
    });

    var student_IDs = [];
    for(let i = 0; i < accounts.length; i++){
        student_IDs[i] = accounts[i].id
    }


    function handleRoll(target_value){
        setRoll(target_value)
        setShowChangeButton(true)
    }
    function handleFilter(target_value){
        setFilter(target_value)
        findaccount(target_value)
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
                    <input placeholder="Search by ID" onKeyUp={(e) => handleFilter(e.target.value) }></input>
                    <label for="accounts" className='account-info-label'>ID:</label>
                    <select name="accounts" onClick={(e) => findaccount(e.target.value)}>
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
                    {showChangeButton && <button onClick={updateUser}>Update</button>}
                </div>

            </div>
        </>
    )

    function findaccount(target_value){
        //send the e.target.value to filter the right account info
        for(let i = 0; i < accounts.length; i++){
            if(accounts[i].id == target_value){
                setaccount_first_name(accounts[i].fn);
                setaccount_last_name(accounts[i].ln);
                setaccount_username(accounts[i].un);
                setaccount_password(accounts[i].pswd);
                setaccount_email(accounts[i].email);
                setaccount_phone_number(accounts[i].pn);
                setaccount_address(accounts[i].adrs);
            }
        }
        
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