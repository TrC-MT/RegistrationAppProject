import '../Styles/errorPageStyles.css'

import { Link } from "react-router-dom";

export default function ErrorPage(){

    return(
        <>
            <h1 id="error-heading">ERROR: Page does not exist.</h1>
            <Link to="/" id="error-login-link">LOGIN</Link>
            <div id='error-image-box'>
                <img src={require("../Images/logo192.png")} alt='react-logo-green' id='error-react-logo'/>
            </div>
        </>
    )
}