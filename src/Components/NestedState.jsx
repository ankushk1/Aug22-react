import React, { useState } from "react";
import Component1 from "./Component1";

const NestedState = () => {
  // const [person, setPerson] = useState({
  //   name: "Niki",
  //   artwork: {
  //     title: "Blue Nana",
  //     city: "Hamburg",
  //     country: "Germany",
  //     houseNum: {
  //       steet: 3,
  //       num: 20
  //     }
  //   }
  // });

  // const onChnageHandler = () => {
  //   setPerson({
  //     ...person,
  //     artwork: {
  //       ...person.artwork,
  //       city: "London",
  //       houseNum: {
  //         ...person.artwork.houseNum,
  //         num: 10
  //       }
  //     }
  //   });
  // };

  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7]);

  const onChnageHandler = () => {
    const filterArr = arr.filter((elem) => elem !== 4);
    setArr(filterArr);
  };

  return (
    <div>
      <button onClick={() => onChnageHandler()}>Change </button>

      <br />
      {/* <h2>{person.artwork.city}</h2>
      <h2>{person.artwork.houseNum.num}</h2> */}
    </div>
  );
};

export default NestedState;
