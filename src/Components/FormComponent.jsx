import React, { useState } from "react";
import { useForm } from "../CustomHooks/CustomHooks";

const FormComponent = () => {
  // const [userInfo, setUserInfo] = useState({
  //   firstName: "",
  //   lastName: "",
  //   password: "",
  //   isActive: false
  // });

  // const onHandleInputChnage = (e) => {
  //   if (e.target.type === "checkbox") {
  //     setUserInfo({ ...userInfo, [e.target.name]: e.target.checked });
  //     return;
  //   }
  //   setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  // };

  const { inputValues, onHandleInputChnage } = useForm();

  return (
    <div>
      <h2 className="my-4">React Form</h2>
      <form className=" d-flex flex-column align-items-center">
        <input
          type="text"
          className="form-control w-50 my-2"
          value={inputValues.firstName}
          name="firstName"
          onChange={(e) => onHandleInputChnage(e)}
        />
        <input
          type="text"
          className="form-control w-50 my-2"
          value={inputValues.lastName}
          name="lastName"
          onChange={(e) => onHandleInputChnage(e)}
        />
        <input
          type="password"
          className="form-control w-50 my-2"
          value={inputValues.password}
          name="password"
          onChange={(e) => onHandleInputChnage(e)}
        />
        <div className="form-check mb-5 mt-2">
          <input
            className="form-check-input"
            type="checkbox"
            value={inputValues.isActive}
            id="flexCheckDefault"
            onChange={(e) => onHandleInputChnage(e)}
            name="isActive"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Default checkbox
          </label>
        </div>
      </form>

      <div>
        FirstName - {inputValues.firstName}
        <br />
        LastName - {inputValues.lastName}
        <br />
        Password - {inputValues.password}
        <br />
        isActive - {String(inputValues.isActive)}
      </div>
    </div>
  );
};

export default FormComponent;
