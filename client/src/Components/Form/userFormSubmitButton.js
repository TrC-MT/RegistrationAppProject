
export default function UserFormSubmitButton({pieces}){



    if(pieces.type.placeholder){
        return (
            <>
                <button id='user-form-submit' onClick={pieces.funct.newUser}>{pieces.text}</button>
            </>
        )
    }
    else if(pieces.type.fn){
        return (
            <>
                <button id='user-form-submit' onClick={pieces.funct.updateUser}>{pieces.text}</button>
            </>
        )
    }
    else{
        console.log('Error with the userFormSubmitButton')
    }
    
}