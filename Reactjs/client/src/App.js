import "./App.css";

/** Hooks */

import Usestate from "./hooks/usestate";
import Usememo from "./hooks/usememo/Usememo";
import CompA from "./hooks/usecontext/CompA";
import Usecallback from "./hooks/usecallback/Usecallback";
import Usereducer from "./hooks/usereducer/Usereducer";
import Classcomp from "./hooks/calss/Classcomp";
import Useref from "./hooks/useref/Useref";
import Useeffect from "./hooks/useeffect/Useeffect";

function App() {
  return (
    <div className="App">
      {/* <Usestate /> */}
      {/* <Usememo /> */}
      {/* <CompA /> */}
      {/* <Usecallback /> */}
      {/* <Classcomp /> */}
      {/* <Useref /> */}
      <Useeffect />
    </div>
  );
}

export default App;
