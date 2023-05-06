import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AlertToastify = () => {
  return (
    <div>
      <ToastContainer newestOnTop limit={5} />
    </div>
  );
};

export default AlertToastify;
