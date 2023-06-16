import axios from "axios";
const apiUrl = "http://localhost:8000";

export const signUp = async (userData) => {
  try {
    const res = await axios({
      method: "POST",
      url: `${apiUrl}/user/signup`,
      data: userData
    });
    return res;
  } catch (err) {
    console.log(err);
    return err.response
  }
};


export const signIn = async (userData) => {
  try {
    const res = await axios({
      method: "POST",
      url: `${apiUrl}/user/signin`,
      data: userData
    });
    return res;
  } catch (err) {
    console.log(err);
    return err.response
  }
};


export const getProducts = async () => {
  try {
    const res = await axios({
      method: "GET",
      headers:{
        'access-token': localStorage.getItem("token")
      },
      url: `${apiUrl}/product/getProducts`,
    });
    return res;
  } catch (err) {
    console.log(err);
    return err.response
  }
}