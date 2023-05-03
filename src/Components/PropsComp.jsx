import React from "react";

const PropsComp = (props) => {

  console.log(props)
  const { randomFunc } = props
  // const { message, username, Age, randomFunc , arr, obj} = props;

  return (
    <div>
     {randomFunc}
    </div>
  );
};

export default PropsComp;
