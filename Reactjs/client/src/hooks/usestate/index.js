import "./style.css";
import React, { useState } from "react";

function Usestate() {
  const [count, setCount] = useState(0);

  const handleOperation = (event) => {
    if (event.target.name == "addition") {
      setCount(count + 1);
    }

    if (event.target.name == "subtraction") {
      setCount(count - 1);
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <section className="counter"> {count}</section>
        <div className="operation">
          <button className="btn" name="addition" onClick={handleOperation}>
            {" "}
            +{" "}
          </button>
          <button className="btn" name="subtraction" onClick={handleOperation}>
            {" "}
            -{" "}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Usestate;
