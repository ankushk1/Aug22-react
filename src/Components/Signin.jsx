import React from "react";
import { useForm } from "../CustomHooks/CustomHooks";
import { signIn } from "../utils/ApiUtils";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { inputValues, onHandleInputChnage } = useForm();
  const navigate = useNavigate();

  const onSignInHanlder = async () => {
    const apiResponse = await signIn(inputValues);
    if (apiResponse.status == 200) {
      // Todo -- Toast Notifications
      localStorage.setItem("token", apiResponse.data.token)
      console.log(apiResponse.data.message);
      navigate("/products")
    } else {
      console.log(apiResponse.data.message);
    }
  }

  return (
    <div>
      <h2 className="mb-3">Signin  Form</h2>
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
      <button className="my-2" onClick={() => onSignInHanlder()}>SignIn</button>
      
    </div>
  );
};

export default Signin;
