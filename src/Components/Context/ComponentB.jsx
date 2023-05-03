import React, { useContext } from "react";
import { messageContext } from "../../App";

const ComponentB = (props) => {

  // const message = useContext(messageContext)
  console.log(props)
  const {setNum} = props;

  const onChangeState = () => {
    setNum(10)
  }

  return (
    <div>
      <button onClick={onChangeState}>Pass Data</button>
    </div>
  );
};

export default ComponentB;
