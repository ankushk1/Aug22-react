import React, { useEffect, useState, useCallback } from "react";

const set = new Set();
const UseCallbackHook = () => {
  const [num, setNum] = useState(1);
  const [count, setCount] = useState(0);

  const onCountIncrement = () => {
    setCount(count + 1);
  };

  const onNumIncrement = useCallback((inc) => {
    setNum(num + inc);
  }, [num]);

  set.add(onNumIncrement);
  console.log(set);

  useEffect(() => {
    console.log("useEffect Called");
  }, [onNumIncrement]);

  return (
    <div>
      <h2>Component Rendered {count} times</h2>
      <div>
        <button onClick={() => onCountIncrement()}>Increment Count</button>
      </div>
      <br />
      <br />
      <div className="mt-4">Number: {num}</div>
      <div>
        <button onClick={() => onNumIncrement(5)}>Increment Number</button>
      </div>
    </div>
  );
};

export default UseCallbackHook;
