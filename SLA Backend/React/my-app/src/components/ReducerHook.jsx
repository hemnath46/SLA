import { useReducer } from "react";
const reducer = (state,actions)=>{
    switch(actions.type){
        case 'increment':
            return{count:state.count +1}
        case 'decrement':
            return{count:state.count -1}
    }
}

const ReduceHook=()=>{
    const [state,dispatch] = useReducer(reducer,initialState)
    return(
        <div>
            {state.count}
            <button onClick={()=>{dispatch({type:"increment"})}}>+</button>
        </div>
    )
}
export default ReduceHook;