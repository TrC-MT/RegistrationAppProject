import '../Styles/adminManageCoursesPageStyles.css'
import Navbar from "../Components/Nav/navbar";
import { useState } from 'react';
import ServerMessage from '../Components/serverMessage';

export default function AdminManageCoursesPage(){
    const [message, setMessage] = useState('');
    const [showSubmitButton, setShowSubmitButton] = useState(false);
    const [addName, setAddName] = useState('');
    const [addDesc, setAddDesc] = useState('');
    const [addTuition, setAddTuition] = useState();

    function handleAddTuition(target_value){
        setAddTuition(Number(target_value))
        setShowSubmitButton(true)
    }

    return(
        <>
            <Navbar pieces={{title: 'Manage Courses', back: 'True', logout: 'True'}}></Navbar>
            <div className="page-box">
            <ServerMessage Message={{message, sm: setMessage}}></ServerMessage>
                <div id="add-course-container">
                    <span className="add-course-section">
                        <label for="course-name-input">Course name</label>
                        <input type='text' name="course-name-input" onKeyUp={(e) => setAddName(e.target.value)}></input>
                    </span>
                    <span className="add-course-section">
                        <label for="course-description-input">Course description</label>
                        <textarea type='text' id='course-description-input' name="course-description-input" onKeyUp={(e) => setAddDesc(e.target.value)}></textarea>
                    </span>
                    <span className="add-course-section">
                        <label for="course-tuition-input">Course tuition ($)</label>
                        <input type='text' name="course-tuition-input" onKeyUp={(e) => handleAddTuition(e.target.value)} />
                    </span>
                    {showSubmitButton && <button onClick={addCourse}>Add course</button>}
                </div>
                
            </div>
        </>
    )

    function addCourse(){
        fetch('/addCourse', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: {
                name: addName,
                desc: addDesc,
                tuition: addTuition,
            }
        })
        .then((res) => res.json())
        .then(data => {
            setMessage(data.message)
        })
    }
}