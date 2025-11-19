import { useState } from "react";

const FeedBack = () => {
    const [name, setName] = useState('');
    const [rate, setRate] = useState('');
    const [feedback, setFeedback] = useState('');
    // const [registered, setRegistered] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name} \n Rate: ${rate} \n Feedback: ${feedback}`);
        // setRegistered(true);
    }
     return (
        <>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Enter Name:</label></td>
                            <td>
                                <input
                                    type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Rating:</label></td>
                            <td>
                                <select value={rate} onChange={(e) => setRate(e.target.value)}>
                                    <option value="">Give Rating</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Feedback:</label></td>
                            <td>
                                <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="submit">Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            {/* {registered && (
                <div>
                    
                    <p>
                        Name: {name}  Rate :{rate} Feedback :{feedback}
                    </p>
                </div>
            )} */}
        </>
    );
}

export default FeedBack;
