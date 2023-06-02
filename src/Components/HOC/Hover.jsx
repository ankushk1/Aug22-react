import React, { useState } from "react";
import withCounterHOC from "./withCounterHOC";

const Hover = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="mt-5 text-center d-flex justify-content-center">
      <div
        className=" bg bg-light"
        style={{
          width: "300px",
          height: "50px"
        }}
        onMouseOver={handleIncrement}
      >
        {count}
      </div>
    </div>
  );
};

export default withCounterHOC(Hover);
