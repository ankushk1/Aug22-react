import React, { useState } from "react";
import { useForm } from "../CustomHooks/CustomHooks";
import { signUp } from "../utils/ApiUtils";
import { Link } from "react-router-dom";

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

  const onSignupHanlder = async () => {
    const userSignUpResponse = await signUp(inputValues);
    console.log(userSignUpResponse);
    if (userSignUpResponse.status == 200) {
      // Todo -- Toast Notifications
      console.log(userSignUpResponse.data.message);
    } else {
      console.log(userSignUpResponse.data.message);
    }
  };

  return (
    <div>
      <h2 className="">React Form</h2>
      <form className=" d-flex flex-column align-items-center">
        <input
          type="text"
          className="form-control w-50 my-2"
          value={inputValues.firstname}
          placeholder="First Name"
          name="firstname"
          onChange={(e) => onHandleInputChnage(e)}
        />
        <input
          type="text"
          className="form-control w-50 my-2"
          value={inputValues.lastname}
          placeholder="Last Name"
          name="lastname"
          onChange={(e) => onHandleInputChnage(e)}
        />
        <input
          type="text"
          className="form-control w-50 my-2"
          value={inputValues.email}
          placeholder="Email"
          name="email"
          onChange={(e) => onHandleInputChnage(e)}
        />
        <input
          type="password"
          className="form-control w-50 my-2"
          value={inputValues.password}
          placeholder="Password"
          name="password"
          onChange={(e) => onHandleInputChnage(e)}
        />
        {/* <div className="form-check mb-5 mt-2">
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
        </div> */}
      </form>
      {/* <div>
        FirstName - {inputValues.firstName}
        <br />
        LastName - {inputValues.lastName}
        <br />
        Password - {inputValues.password}
        <br />
        isActive - {String(inputValues.isActive)}
      </div> */}
      <button className="my-2" onClick={() => onSignupHanlder()}>Signup</button>
      <div className="mt-2">
      Already SignedUp? <Link to="/signin">Signin Here</Link>

      </div>
    </div>
  );
};

export default FormComponent;
