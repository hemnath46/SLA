import { useState } from "react"
function Message() {
    const [message, setMessage] = useState("welcome")

    return (

        <>
            <p>Hello this is message</p>
            <p>{message}</p>
            <button onClick={() => setMessage("Thanks for visiting!")}>
                Change Message
            </button>

        </>

    )


}
export default Message;