

export default function BackButton({render}){

    if(render == 'True'){
        return(
            <>
                <button className="nav-button back-button" onClick={back()}>Back</button>
            </>
        )
    }
    
}

function back(){
    
}