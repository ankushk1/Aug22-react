import React, { useState } from "react";

const FormComponent = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    password: "",
    isActive: false
  });

  const onHandleInputChnage = (e) => {
    if (e.target.type === "checkbox") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.checked });
      return;
    }
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 className="my-4">React Form</h2>
      <form className=" d-flex flex-column align-items-center">
        <input
          type="text"
          className="form-control w-50 my-2"
          value={userInfo.firstName}
          name="firstName"
          onChange={(e) => onHandleInputChnage(e)}
        />
        <input
          type="text"
          className="form-control w-50 my-2"
          value={userInfo.lastName}
          name="lastName"
          onChange={(e) => onHandleInputChnage(e)}
        />
        <input
          type="password"
          className="form-control w-50 my-2"
          value={userInfo.password}
          name="password"
          onChange={(e) => onHandleInputChnage(e)}
        />
        <div className="form-check mb-5 mt-2">
          <input
            className="form-check-input"
            type="checkbox"
            value={userInfo.isActive}
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
        FirstName - {userInfo.firstName}
        <br />
        LastName - {userInfo.lastName}
        <br />
        Password - {userInfo.password}
        <br />
        isActive - {String(userInfo.isActive)}
      </div>
    </div>
  );
};

export default FormComponent;
