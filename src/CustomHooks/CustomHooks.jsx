import { useEffect, useState } from "react";

export const useForm = () => {
  const [inputValues, setInputValues] = useState({});

  const onHandleInputChnage = (e) => {
    if (e.target.type === "checkbox") {
      setInputValues({ ...inputValues, [e.target.name]: e.target.checked });
      return;
    }
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  return { inputValues, onHandleInputChnage };
};

export const useFetch = (url, route) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getApiData = (json) => {
    switch (route) {
      case "products":
        return json.products;
      case "users":
        return json.users;
      case "todos":
        return json.todos;
      //4th Case
      case "carts":
        return json.carts;
      default:
        return;
    }
  };

  const fetchData = async () => {
    setLoading(true);
    const data = await fetch(`${url}/${route}`);
    const json = await data.json();
    setApiData(getApiData(json));
    setLoading(false);
  };

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
  }, [url, route]);

  return { loading, apiData };
};

export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  return {theme, setTheme} 

};
