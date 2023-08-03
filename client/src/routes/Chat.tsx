import { useParams } from "react-router-dom"

function Chat(){

    const { chatId  } = useParams();

    return (
        <>
            <h1>
                dog
                {chatId}
            </h1>
        </>
    )
}

export default Chat