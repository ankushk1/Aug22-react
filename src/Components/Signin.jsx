import React from "react";
import { useForm } from "../CustomHooks/CustomHooks";

const Signin = () => {
  const { inputValues, onHandleInputChnage } = useForm();

  return (
    <div>
      <h2 className="mt-5">Signin  Form</h2>
      <form className=" d-flex flex-column align-items-center">
        <input
          type="text"
          className="form-control w-50 my-2"
          value={inputValues.email}
          name="email"
          onChange={(e) => onHandleInputChnage(e)}
        />
        <input
          type="password"
          className="form-control w-50 my-2"
          value={inputValues.password}
          name="password"
          onChange={(e) => onHandleInputChnage(e)}
        />
      </form>
    </div>
  );
};

export default Signin;
