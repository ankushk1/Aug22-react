import React, { useState } from "react";

const StateComponent = () => {
  // const [numbers, setNumbers] = useState({
  //   num1: 0,
  //   num2: 5
  // });

  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const onNum1Inc = () => {
    debugger;
    // setNumbers({ ...numbers, num1: numbers.num1 + 1 });
    setCount((prevState) => {
      console.log(prevState);
      return prevState + 1;
    });
    setCount(count + 1);

    // setNumber((prevState) => {
    //   console.log(prevState);
    //   return prevState + 1;
    // });
    // setNumber((prevState) => {
    //   console.log(prevState);
    //   return prevState + 1;
    // });
  };

  const onNum2Inc = () => {
    setNumbers({ ...numbers, num2: numbers.num2 + 1 });
  };

  return (
    <div>
      {/* {numbers.num1}
      <div>{numbers.num2}</div> */}
      Count - {count}
      Number - {number}
      <div>
        <button onClick={onNum1Inc}>Click</button>
        {/* <button onClick={onNum2Inc}>Click</button> */}
      </div>
    </div>
  );
};

export default StateComponent;
