import React, { useRef, useState } from "react";

function Useref() {
  const [test, setTest] = useState("Shivraj");
  const first = useRef();
  const handleevent = () => {
    first.current.style.color = "red";
  };
  return (
    <div>
      <input
        className="inputbox"
        ref={first}
        value={test}
        placeholder="please enter values"
      />
      <button onClick={handleevent}>Click me</button>
    </div>
  );
}

export default Useref;
