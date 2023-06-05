import React, { useEffect, useState } from "react";

function Useeffect() {
  const [first, setfirst] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    console.log("This is API call");

    fetch("https://dummyapi.com/example")
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data here
        console.log("data", data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the API call
        console.error(error);
      });
  }, [first]);

  const handleclick = () => {
    setfirst(first + 1);
  };

  const handlesecond = () => {
    setSecond(second + 1);
  };

  return (
    <div>
      <div className="count">{first}</div>
      <button onClick={handleclick}> submit</button>
      <div className="count">{second}</div>
      <button onClick={handlesecond}> second submit</button>
    </div>
  );
}

export default Useeffect;
