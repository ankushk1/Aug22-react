import React, { useEffect, useState } from "react";
import NestedComp from "./NestedComp";

const UseEffect = () => {
  const [count, setCount] = useState(1);
  const [num, setNum] = useState(1);

  useEffect(() => {
    console.log("Mounting phase");
  }, []);

  useEffect(() => {
    console.log("Updating Phase");
  }, [count, num]);

  useEffect(() => {
    return () => {
      console.log("Unmount phase");
    };
  },[]);

  return (
    <div>
      {console.log("render")}
      Use Effect Component rendered{" "}
      {count > 1 ? count + " times" : count + " time"} <br />
      <NestedComp num={num}/>
      {num}
      <div>
        <button onClick={() => setCount(count + 1)}>Inc</button>
      </div>
      <div>
        <button onClick={() => setNum(num + 1)}>Inc Num</button>
      </div>
    </div>
  );
};

export default UseEffect;
