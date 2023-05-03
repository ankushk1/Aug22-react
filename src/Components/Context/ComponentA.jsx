import React, { useState } from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const [num, setNum] = useState(0);
  console.log(num);

  return (
    <div>
      ComponentA rendering number {num}
      <ComponentB setNum={setNum} />
    </div>
  );
};

export default ComponentA;
