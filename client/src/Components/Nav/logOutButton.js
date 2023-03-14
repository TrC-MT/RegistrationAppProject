import { useNavigate } from "react-router-dom"

export default function LogOutButton({render}){
    const navigate = useNavigate();

    if(render == 'True'){
        return(
            <>
                <button className="log-out-button nav-button" onClick={logOut}>Log out</button>
            </>
        )
    }

    function logOut(){
        //kill the session
        fetch('/logout', {
            method: "DELETE",
            // headers: {
            //     "Content-Type": "application/json"
            // },
        }).then(res => res.json())
        .then((data) => {
            if (data.loggedOut === true) {
                navigate('/');
            }
        })
    }
    
}

