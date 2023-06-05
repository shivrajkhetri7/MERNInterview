import "./style.css";
import React, { useMemo, useState } from "react";
import Child from "./Child";

function Usememo() {
  const [first, setfirst] = useState(1);
  const [count, setCount] = useState(0);

  const handleAction = () => {
    setfirst(first * 2);
  };

  const handleActionNew = () => {
    setCount(count + 1);
  };
  const data = useMemo(() => {
    console.log("test");
    return first + 1;
  }, [first]);

  //   function data() {
  //     console.log("test");
  //     return first + 1;
  //   }

  return (
    <div className="container">
      <div className="inner-container">
        {data}
        <div className="Update-name">{first}</div>
        <button className="btn" onClick={handleAction}>
          First
        </button>
        <div className="Update-name">{count}</div>
        <button className="btn" onClick={handleActionNew}>
          Count
        </button>
      </div>
    </div>
  );
}

export default Usememo;
