import { useReducer } from "react";

const initialState = {
  message: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GREEN":
      return { message: "Go Go Go" };

    case "YELLOW":
      return { message: "Wait for a While " };

    case "RED":
      return { message: "Stop You Idiot " };

    default:
      return state;
  }
};

const TrafficSignal = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "GREEN" })}>Green</button>
      <button onClick={() => dispatch({ type: "YELLOW" })}>Yellow</button>
      <button onClick={() => dispatch({ type: "RED" })}>Red</button>

      <h2>{state.message}</h2>
    </div>
  );
};

export default TrafficSignal;
