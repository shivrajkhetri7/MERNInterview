import React, { useCallback, useContext, useState } from "react";
import Child from "./Child";

function Usecallback() {
  const [first, setfirst] = useState(0);
  const [count, setCount] = useState(0);

  const learning = useCallback(() => {}, [count]);

  return (
    <div>
      <div>{first}</div>
      <Child learning={learning} />
      <button
        onClick={() => {
          setfirst(first + 1);
        }}
      >
        increment{" "}
      </button>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment Count{" "}
      </button>
    </div>
  );
}

export default Usecallback;
