

export default function ServerMessage({Message}){

    if(Message.message){
        return(
            <>
                <div className='server-message'>
                    {Message.message}
                    <button onClick={closeMessage}>X</button>
                </div>
            </>
        )
    }
    

    function closeMessage(){
        Message.sm()
    }
}