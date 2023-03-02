

export default function LogOutButton({render}){

    if(render == 'True'){
        return(
            <>
                <button className="log-out-button nav-button" onClick={logOut()}>Log out</button>
            </>
        )
    }
    
}

function logOut(){

}