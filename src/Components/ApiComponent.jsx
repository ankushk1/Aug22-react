import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ApiComponent = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [route, setRoute] = useState("products");
  const [sort, setSort] = useState(true);

  const getApiData = (json) => {
    switch (route) {
      case "products":
        return json.products;
      case "users":
        return json.users;
      case "todos":
        return json.todos;
      //4th Case
      default:
        return;
    }
  };

  const fetchData = async () => {
    setLoading(true);
    const data = await fetch(`https://dummyjson.com/${route}`);
    const json = await data.json();
    setApiData(getApiData(json));
    setLoading(false);
  };

  console.log(apiData);
  useEffect(() => {
    // // fetch("https://dummyjson.com/products")
    // //   .then((res) => res.json())
    // //   .then((json) => setApiData(json.products));

    // (async () => {
    //   const data = await fetch("https://dummyjson.com/products");
    //   const json = await data.json();
    //   setApiData(json.products);
    // })();

    fetchData();
  }, [route]);

  const onRenderData = (elem, index) => {
    switch (route) {
      case "products":
        return (
          <div key={index} className="card my-2" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={elem?.thumbnail}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{elem.title}</h5>
              <p className="card-text">{elem.description}</p>
              <h3 className="card-text">{elem.price}</h3>
            </div>
          </div>
        );
      case "users":
        return (
          <div key={index} className="card my-2" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={elem?.image}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{elem?.firstName}</h5>
              <p className="card-text">{elem?.email}</p>
              <p className="card-text">{elem?.phone}</p>
            </div>
          </div>
        );
      case "todos":
        return (
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
        );
      // 4th Case
      default:
        return;
    }
  };

  const sortData = (a, b) => {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  };

  const sortDataReverse = (a, b) => {
    if (a.price < b.price) {
      return 1;
    }
    if (a.price > b.price) {
      return -1;
    }
    return 0;
  };

  const onSortData = () => {
    const clonedArr = [...apiData];
    if (sort) {
      clonedArr.sort(sortData);
    } else {
      // Can use either one of these methods
      // clonedArr.sort(sortData).reverse();
      clonedArr.sort(sortDataReverse);
    }
    setApiData(clonedArr);
    setSort(!sort);
  };

  return (
    <div className="container">
      {/* <Title>Hello World, this is my first styled component!</Title> */}

      <div className="row">
        <div className="col-10 mt-4">
          <button
            onClick={() => setRoute("products")}
            className={`${
              route === "products" ? "btn btn-primary" : "btn-outline-primary"
            } me-3 btn btn-lg`}
          >
            Products
          </button>
          <button
            onClick={() => setRoute("users")}
            className={`${
              route === "users" ? "btn btn-primary" : "btn-outline-primary"
            } btn btn-lg me-3`}
          >
            Users
          </button>
          <button
            onClick={() => setRoute("todos")}
            className={`${
              route === "todos" ? "btn btn-primary" : "btn-outline-primary"
            } btn btn-lg`}
          >
            Todos
          </button>
        </div>
        {route === "products" && (
          <div className="col-2 mt-4">
            <button onClick={onSortData} className="btn btn-info btn-lg">
              <span className="pe-2">Sort</span>{" "}
              {sort ? (
                <i class="fa-solid fa-arrow-up-short-wide"></i>
              ) : (
                <i class="fa-solid fa-arrow-down-wide-short"></i>
              )}
            </button>
          </div>
        )}
      </div>
      {loading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="mt-5 d-flex justify-content-around flex-wrap">
          {
            // apiData.length > 0 &&
            apiData.slice(0, 10).map((elem, index) => onRenderData(elem, index))
          }
        </div>
      )}
    </div>
  );
};

export default ApiComponent;
