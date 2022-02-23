import axios from "axios";
import React from "react";
import HeaderWhite from "../components/HeaderWhite";

const AxiosTest = () => {
  const handleClick = () => {
    console.log("click");
    axios
      .get("https://newsapi.org/v2/everything?q=tesla&from=2022-01-23&sortBy=publishedAt&apiKey=038c3d96ce0a413a84571799d6d78516")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <HeaderWhite title="Http 통신" />
      <button onClick={handleClick}>데이터 요청하기</button>
    </div>
  );
};

export default AxiosTest;
