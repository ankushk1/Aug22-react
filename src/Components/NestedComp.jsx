import React, { useEffect, useState } from "react";

const NestedComp = ({num}) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    console.log("Mounting phase in Nested Comp");
  }, []);

  useEffect(() => {
    console.log("Updating Phase in Nested Comp");
  }, [num]);

  return (
    <div>
      {console.log("Nested Comp render")}
      NestedComp rendered {val} times
      <div>
        <button onClick={() => setVal(val + 1)}>Inc Val</button>
      </div>
    </div>
  );
};

export default NestedComp;
