import React, { useState, createContext } from "react";
import CompB from "./CompB";
const Name = createContext();
function CompA() {
  const [first, setfirst] = useState("Shivraj");
  return (
    <>
      <Name.Provider value={setfirst}>
        {first}
        <CompB></CompB>
      </Name.Provider>
    </>
  );
}

export default CompA;
export { Name };
