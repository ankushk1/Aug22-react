import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../Redux/CounterSlice";

const CounterRedux = () => {
  const globalCount = useSelector((state) => state.counter.count);
  console.log(globalCount);

  const dispatch = useDispatch();

  const incrementNum = () => {
    dispatch(increment(10));
  };

  const decrementNum = () => {
    dispatch(decrement(5));

  }

  return (
    <div>
      {globalCount}

      <div>
        <button onClick={incrementNum}>Increment</button> <br />
        <button onClick={decrementNum}>Decrement</button> <br />
      </div>
    </div>
  );
};

export default CounterRedux;
