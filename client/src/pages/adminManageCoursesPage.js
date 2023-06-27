import "../Styles/PageStyles/adminManageCoursesPageStyles.css";
import Navbar from "../Components/Nav/navbar";
import { useState } from "react";
import ServerMessage from "../Components/serverMessage";
import AdminCoursesTable from "../Components/Data/adminCoursesTable";
import { ToastContainer, toast } from "react-toastify";

const initialState = {
    title: '',
    id: '',
    description: '',
    tuition: '',
    creditHours: '',
    schedule: '',
    classroomNumber: '',
    maximumCapacity: '',
}

export default function AdminManageCoursesPage() {
  const [message, setMessage] = useState("");
  //counter triggers getCourses api call when updated
  const [trigger, setTrigger] = useState(0);
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [addMaxCapacity, setAddMaxCapacity] = useState();

  const [form, setForm] = useState({});

  function handleAddMC(event) {
    setForm(form => ({ ...form, maximumCapacity: event.target.value }));
    setShowSubmitButton(true);
  }

  const updateField = (e) => {
    //console.log('here\'s your event obj.', e.target.value);
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  }

  return (
    <>
      <Navbar
        pieces={{ title: "Manage Courses", back: "True", logout: "True" }}
      ></Navbar>
      <ToastContainer />
      <div className="page-box">
        {/* <ServerMessage Message={{message, sm: setMessage}}></ServerMessage> */}

        <div id="admin-manage-courses-page-box">
          <div id="add-course-container">
            <span className="add-course-section">
              <h5 id="add-course-title">Add a course</h5>
            </span>
            <span className="add-course-section">
              <label htmlFor="title">Course name</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={updateField}
              />
            </span>
            <span className="add-course-section">
              <label htmlFor="id">Identifier</label>
              <input
                type="text"
                name="id"
                value={form.id}
                onChange={updateField}
              ></input>
            </span>
            <span className="add-course-section">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                id="course-description-input"
                name="description"
                value={form.description}
                onChange={updateField}
              ></textarea>
            </span>
            <span className="add-course-section">
              <label htmlFor="course-tuition-input">Tuition ($)</label>
              <input
                type="text"
                name="tuition"
                value={form.tuition}
                onChange={updateField}
              />
            </span>
            <span className="add-course-section">
              <label htmlFor="course-credit-hours-input">Credit hours</label>
              <input
                type="text"
                name="creditHours"
                value={form.creditHours}
                onChange={updateField}
              />
            </span>
            <span className="add-course-section">
              <label htmlFor="course-period-input">Period</label>
              <input
                type="text"
                name="schedule"
                value={form.schedule}
                onChange={updateField}
              />
            </span>
            <span className="add-course-section">
              <label htmlFor="course-classroom-input">Classroom</label>
              <input
                type="text"
                name="classroomNumber"
                value={form.classroomNumber}
                onChange={updateField}
              />
            </span>
            <span className="add-course-section">
              <label htmlFor="maximumCapacity">Max capacity</label>
              <input
                type="text"
                name="maximumCapacity"
                value={form.maximumCapacity}
                onChange={(e) => handleAddMC(e)}
              />
            </span>
            {showSubmitButton && (
              <button onClick={addCourse} id="add-course-button">
                Add course
              </button>
            )}
          </div>
          {/* <pre>{JSON.stringify(form)}</pre> */}
          <div className="courses-edit-container">
            <AdminCoursesTable trigger={trigger}></AdminCoursesTable>
          </div>
        </div>
      </div>
    </>
  );

  function addCourse() {
    if (
      form.title != "" &&
      form.id != "" &&
      form.description != "" &&
      form.tuition != undefined &&
      form.creditHours != undefined &&
      form.schedule != undefined &&
      form.classroomNumber != undefined &&
      form.maximumCapacity != undefined
    ) {
      fetch("/admin/api/createNewCourse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formObj: form,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast(data.message);

          if (data.success) {
            setForm({ ...initialState });
            //trigger rerender of courses after successful added course
            setTrigger(trigger + 1);
          }
        });
        
    } 
  }
}
