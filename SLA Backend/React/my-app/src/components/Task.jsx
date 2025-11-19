import {useEffect, useState } from "react";
function Task() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    };
    useEffect(()=>{
        if(count>0){
            if(count%2===1){
                alert(`the patient no ${count} go to room no 1`)
            }
            else{
                alert(`the patient no ${count} go to room no 2`)
            }
        }
    })
    return (
        <>
            <h1>Patient no:{count}</h1>
            <button onClick={() => increment()}>+</button>
            <button onClick={() => decrement()}>-</button>
        </>
    );
}
export default Task;