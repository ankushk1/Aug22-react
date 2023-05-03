import React, { useState } from "react";

const StateComponent = () => {
  const [numbers, setNumbers] = useState({
    num1: 0,
    num2: 5
  });

  const onNum1Inc = () => {
    setNumbers({ ...numbers, num1: numbers.num1 + 1 });
  };

  const onNum2Inc = () => {
    setNumbers({ ...numbers, num2: numbers.num2 + 1 });
  };

  return (
    <div>
      {numbers.num1}
      <div>{numbers.num2}</div>
      <div>
        <button onClick={onNum1Inc}>Click</button>
        <button onClick={onNum2Inc}>Click</button>
      </div>
    </div>
  );
};

export default StateComponent;
