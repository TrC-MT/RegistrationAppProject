import '../Styles/loginPageStyles.css';


export default function LoginPage() {

    
    return(
        <>
            <div className="loginContainer">
                <h2>Login</h2>
                <form>
                    <label>Username: </label>
                    <input name="username" id="username" placeholder="Type your username here."/>
                    <label>Password: </label>
                    <input name="password" id="password" placeholder="Type your password here."/>

                    <button onClick={studentLogin()}>Login as a student</button>
                    <button onClick={adminLogin()}>Login as an administrator</button>
                </form>

                <span className="crecentbox"></span>
            </div>
        </>
    )
}

function studentLogin() {

}

function adminLogin() {

}