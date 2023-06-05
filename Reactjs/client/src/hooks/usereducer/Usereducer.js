import React, { useReducer } from "react";

const initialState = 0;
const reducer = (action, type) => {
  switch (type.type) {
    case "increment":
      return action + 1;
    case "decrement":
      return action - 1;
    default:
      break;
  }
  return action;
};
function Usereducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="container">
      <div className="inputs">{state}</div>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        {" "}
        decrement
      </button>
    </div>
  );
}

export default Usereducer;
