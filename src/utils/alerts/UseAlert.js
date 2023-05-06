import { toast } from "react-toastify";
import styles from "./alertToastify.module.css";

const UseAlert = () => {
  const alertInfo = (mensaje) => {
    toast.info(mensaje, {
      position: "top-left",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      className: styles.alertWrapper,
    });
  };

  const alertError = (mensaje) => {
    toast.error(mensaje, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      className: styles.alertWrapper,
    });
  };

  const alertSucces = (mensaje) => {
    toast.success(mensaje, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      className: styles.alertWrapper,
    });
  };

  return { alertInfo, alertError, alertSucces };
};

export default UseAlert;
