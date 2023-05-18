import "../Styles/PageStyles/loginPageStyles.css";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ServerMessage from "../Components/serverMessage";
import Loadingbar from "../Components/loadingbar";

//======================
export default function LoginPage() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [login_username, setLogin_username] = useState("");
  const [login_password, setLogin_password] = useState("");
  const [load, setLoad] = useState(false);
//const [isAdmin, setIsAdmin] = useState();

  //-----------------------

  return (
    <>
      <div id="abb-1" className="animate-background-box"></div>
      <div id="abb-2" className="animate-background-box"></div>
      <div id="abb-3" className="animate-background-box"></div>

      <ServerMessage Message={{ message, sm: setMessage }}></ServerMessage>
      <Loadingbar render={load}></Loadingbar>

      <div id="crecent-box">
        <div id="image-helper">
          <img
            src={require("../Images/logo192.png")}
            id="react-logo"
            alt="react-logo-green"
          />
          <div id="loginContainer">
            <h2>Registration Capstone Login</h2>
            <div id="login-form">
              <div className="fields">
                <label>Username: </label>
                <input
                  name="username"
                  className="username"
                  placeholder="Type your username here."
                  onChange={(e) => setLogin_username(e.target.value)}
                />
                <label>Password: </label>
                <input
                  name="password"
                  type="password"
                  className="password"
                  placeholder="Type your password here."
                  onChange={(e) => setLogin_password(e.target.value)}
                  onKeyUp={(e) => (e.key === "Enter" ? Login() : null)}
                />
              </div>

              <span className="form-section">
                <div className="stacked-btn">
                  <button className="login-button" onClick={Login}>
                    Login
                  </button>
                  {/* <button className="login-button" onClick={adminLogin}>Admin login</button> */}
                  <Link to="/signUp" id="sign-up-button">
                    New user?
                  </Link>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  //-----------------------------------------------------

  function Login() {
    if (login_username != "" && login_password != "") {
      var loginUser = {
        username: login_username,
        password: login_password,
      };
      fetch("/studentLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Credentials: loginUser,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.errorMessage) {
            setMessage(data.errorMessage);
          } else {
            // localStorage.setItem("myToken", data.token);
            setLoad(true);
            if (data.isAdmin) {
              navigate("/userProfile/adminData");
            } else {
              navigate("/userProfile");
            }

            setMessage(data.successMessage);
          }
        });
    } else {
      setMessage("Please type your information into the proper fields.");
    }
  }

  //----------  Yes, they are the same thing. If this were a different application, and/or we were using tokens, they would need to be different.

  function adminLogin() {
    if (login_username != "" && login_password != "") {
      var loginUser = {
        userName: login_username,
        password: login_password,
      };

      fetch("/adminLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Credentials: loginUser,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.errorMessage) {
            setMessage(data.errorMessage);
          } else {
            setLoad(true);
            setMessage(data.message);
            // localStorage.setItem("myToken", data.token);
            // setMessage(data.successMessage);
            navigate("/userProfile");
          }
        });
    } else {
      setMessage("Please type your information into the proper fields.");
    }
  }
}

//--------------

//=================
