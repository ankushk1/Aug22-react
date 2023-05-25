import React, { useMemo, useState } from "react";

const numMultiple = (n) => {
  for (var i = 0; i < 1000000000; i++) {}
  return n * 2;
};

const UseMemoHook = () => {
  const [num, setNum] = useState(1);
  const [count, setCount] = useState(0);


  const result = useMemo(() => {
    console.log('use Memo called')
    return numMultiple(num)
  }, [num])

  return (
    <div>
      UseMemoHook
      <h2>Component Rendered {count} times</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>

      <br />
      <br />
      <div className="mt-4">
          {num } x 2 = {result}
      </div>
      <div>
        <button onClick={() => setNum(num + 1)}>Increment Number</button>
      </div>
    </div>
  );
};

export default UseMemoHook;
