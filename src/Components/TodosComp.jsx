import React from "react";
import { useFetch } from "../CustomHooks/CustomHooks";

const TodosComp = () => {
  const { loading, apiData } = useFetch("https://dummyjson.com", "todos");

  return (
    <div className="d-flex flex-wrap justify-content-around">
      {apiData.length > 0 &&
        apiData.map((elem, index) => (
          <div key={index} className="card my-2" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{elem?.userId}</h5>
              <p className="card-text">{elem?.todo}</p>
              {/* <p className="card-text">Completed - {String(elem?.completed)}</p> */}
              <p className="card-text">
                {elem?.completed ? "Completed" : "Not Completed"}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TodosComp;
