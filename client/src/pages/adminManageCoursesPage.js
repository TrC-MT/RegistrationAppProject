import '../Styles/PageStyles/adminManageCoursesPageStyles.css'
import Navbar from "../Components/Nav/navbar";
import { useState } from 'react';
import ServerMessage from '../Components/serverMessage';

export default function AdminManageCoursesPage(){
    const [message, setMessage] = useState('');
    const [showSubmitButton, setShowSubmitButton] = useState(false);
    const [addName, setAddName] = useState('');
    const [addDesc, setAddDesc] = useState('');
    const [addTuition, setAddTuition] = useState();
    const [addCreditHours, setAddCreditHours] = useState();
    const [addPeriod, setAddPeriod] = useState();
    const [addClassroom, setAddClassroom] = useState();
    const [addMaxCapacity, setAddMaxCapacity] = useState();

    function handleAddMC(target_value){
        setAddMaxCapacity(Number(target_value))
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
                        <label for="course-description-input">Description</label>
                        <textarea type='text' id='course-description-input' name="course-description-input" onKeyUp={(e) => setAddDesc(e.target.value)}></textarea>
                    </span>
                    <span className="add-course-section">
                        <label for="course-tuition-input">Tuition ($)</label>
                        <input type='text' name="course-tuition-input" onKeyUp={(e) => setAddTuition(e.target.value)} />
                    </span>
                    <span className="add-course-section">
                        <label for="course-credit-hours-input">Credit hours</label>
                        <input type='text' name="course-credit-hours-input" onKeyUp={(e) => setAddCreditHours(e.target.value)} />
                    </span>
                    <span className="add-course-section">
                        <label for="course-period-input">Period</label>
                        <input type='text' name="course-period-input" onKeyUp={(e) => setAddPeriod(e.target.value)} />
                    </span>
                    <span className="add-course-section">
                        <label for="course-classroom-input">Classroom</label>
                        <input type='text' name="course-classroom-input" onKeyUp={(e) => setAddClassroom(e.target.value)} />
                    </span>
                    <span className="add-course-section">
                        <label for="course-max-capacity-input">Max capacity</label>
                        <input type='text' name="course-max-capacity-input" onKeyUp={(e) => handleAddMC(e.target.value)} />
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