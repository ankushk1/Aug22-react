import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Component1 from "./Components/Component1";
import StateComponent from "./Components/StateComponent";
import NestedState from "./Components/NestedState";
import PropsComp from "./Components/PropsComp";
import ComponentA from "./Components/Context/ComponentA";
import { createContext } from "react";

export const messageContext = createContext(null);
messageContext.displayName = "message"
function App() {

  const randomFunc = () => {
    console.log("random func called");
  };
  return (
    <div id="app">
      {/* <Component1/> */}
      {/* <StateComponent/> */}
      {/* <NestedState/> */}
      {/* <PropsComp
        message="Rendered By App.js"
        username="Sam"
        Age={10}
        isActive={true}
        arr={[1, 2, 3]}
        obj={{ x: "x", y: "y" }}
        randomFunc={randomFunc}
      /> */}

      {/* <p>
        Para
      </p>
     
      <PropsComp
        person={{
          name: "Aklilu Lemma",
          age: 40
        }}
      >
        {10}

      </PropsComp> */}
      {/* <PropsComp username="Sam" age={10}  randomFunc={randomFunc}/> */}

      {/* <PropsComp
        person={{
          name: "Katsuko Saruhashi",
          age: 30
        }}
      >
        This is a string passed between comp tags
      </PropsComp> */}
      <messageContext.Provider value=" Message coming from App.js">
        <ComponentA />
      </messageContext.Provider>
    </div>
  );
}

export default App;
