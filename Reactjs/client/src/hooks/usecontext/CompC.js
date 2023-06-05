import React, { useContext } from "react";
import { Name } from "./CompA";

function CompC(props) {
  return (
    <div>
      <Name.Consumer>
        {(functions) => {
          {
            return (
              <button
                onClick={() => {
                  functions("Mahesh");
                }}
              >
                Click Me{" "}
              </button>
            );
          }
        }}
      </Name.Consumer>
    </div>
  );
}

export default CompC;
