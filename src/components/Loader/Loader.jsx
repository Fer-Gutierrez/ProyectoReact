import React from "react";
import { MoonLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "90vh",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <MoonLoader color="#d0a9a2" />
    </div>
  );
};

export default Loader;
