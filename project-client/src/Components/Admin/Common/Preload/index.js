import React from "react";
import Lottie from "react-lottie";
import Loader from "../Loader/loader";

const Preload = ({ type }) => {
  return (
    <>
      {type === 1 ? (
        <Lottie options={Loader(1)} height={700} width={800}></Lottie>
      ) : type === 2 ? (
        <Lottie options={Loader(2)} height={700} width={800}></Lottie>
      ) : (
        <Lottie options={Loader(3)} height={700} width={800}></Lottie>
      )}
    </>
  );
};

export default Preload;
