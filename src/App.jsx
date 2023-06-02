import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Component1 from "./Components/Component1";
import StateComponent from "./Components/StateComponent";
import NestedState from "./Components/NestedState";
import PropsComp from "./Components/PropsComp";
import ComponentA from "./Components/Context/ComponentA";
import { createContext, useState } from "react";
import UseEffect from "./Components/UseEffect";
import ApiComponent from "./Components/ApiComponent";
import FormComponent from "./Components/FormComponent";
import Signin from "./Components/Signin";
import TodosComp from "./Components/TodosComp";
import LighDarkMode from "./Components/LighDarkMode";
import UseMemoHook from "./Components/UseMemoHook";
import UseCallbackHook from "./Components/UseCallbackHook";
import Todo from "./Components/TodoApp/Todo";
import Count from "./Components/HOC/Count";
import Hover from "./Components/HOC/Hover";

export const messageContext = createContext(null);
messageContext.displayName = "message"
function App() {

  const randomFunc = () => {
    console.log("random func called");
  };
  const [mount, setMount] = useState(true)

  return (
    <div id="app" >
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
      {/* <messageContext.Provider value=" Message coming from App.js">
        <ComponentA />
      </messageContext.Provider> */}
      {/* {mount && <UseEffect/>}
      <div>
        <button onClick={() => setMount(!mount)}>Mount/Unmount</button>
      </div> */}
      {/* <ApiComponent/> */}
      {/* <FormComponent/> */}
      {/* <Signin/> */}
      {/* <TodosComp/> */}
      {/* <LighDarkMode/> */}
      {/* <UseMemoHook/> */}
      {/* <UseCallbackHook/> */}
      {/* <Todo/> */}
      {/* <Count name={"ABC"} />
      <Hover/> */}
    </div>
  );
}

export default App;
