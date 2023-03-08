import {useNavigate} from 'react-router-dom';

export default function BackButton({render}){
    const navigate = useNavigate();

    if(render == 'True'){
        return(
            <>
                <button className="nav-button back-button" onClick={back}>Back</button>
            </>
        )
    }

    function back(){
        return navigate(-1);
    }
    
}

