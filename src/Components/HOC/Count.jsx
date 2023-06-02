import React, { useState } from "react";
import withCounterHOC from "./withCounterHOC";

const Count = (props) => {
  console.log(props)
  const { count, handleIncrement, name } = props;
  // const [count, setCount] = useState(0)

  // const handleIncrement = () => {
  //   setCount(count+ 1)
  // }

  return (
    <div>
      Count - {count} <br />
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default withCounterHOC(Count, "param 2");
