import React, { useEffect, useState } from "react";

const ApiComponent = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();
    setApiData(json.products);
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
  }, []);

  return (
    <div className="container">
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
            apiData.slice(0, 10).map((elem, index) => (
              <div key={index} className="card my-2" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={elem.thumbnail}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{elem.title}</h5>
                  <p className="card-text">{elem.description}</p>
                  <p className="card-text">{elem.price}</p>
                </div>
              </div>
            ))
          }
        </div>
      )}
    </div>
  );
};

export default ApiComponent;
