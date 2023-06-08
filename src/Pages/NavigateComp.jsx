import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const NavigateComp = () => {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  const redirect = () => {
    // Cases
    // Validations

    // Api calls

   
    navigate("/about" , {
      state: { some: "value" }
    });
  };

  return (
    <div>
      NavigateComp
      <div>
        {/* {user && (
          <div>
            {console.log("Navigate Block called")}
            {<Navigate to="/about" />}
          </div>
        )} */}
      </div>
      <button onClick={() => redirect()}>Redirect</button>
    </div>
  );
};

export default NavigateComp;
