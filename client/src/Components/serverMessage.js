import '../Styles/ComponentStyles/serverMessageStyles.css'

export default function ServerMessage({Message}){

    if(Message.message){
        setTimeout(closeMessage, 5000)

        return(
            <>
                <div className='server-message'>
                    {Message.message}
                    <button onClick={closeMessage} className='server-message-close'>X</button>
                </div>
            </>
        )
    }
    

    function closeMessage(){
        Message.sm()
    }
}