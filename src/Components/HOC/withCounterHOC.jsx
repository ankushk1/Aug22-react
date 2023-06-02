import React, { useState } from "react";

const withCounterHOC = (PrevComponent) => {
  const NewComponent = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      setCount(count + 1);
    };

    return (
      <div>
        <PrevComponent count={count} handleIncrement={handleIncrement} />
      </div>
    );
  };

  return NewComponent;
};

// const withCounterHOC = (PrevComponent, p2) => (props) => {
//   console.log(p2)
//   console.log("props", props);
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <PrevComponent
//         count={count}
//         handleIncrement={handleIncrement}
//         {...props}
//       />
//     </div>
//   );
// };

export default withCounterHOC;
