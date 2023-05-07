import { toast } from "react-toastify";
import styles from "./alertToastify.module.css";
import { Button } from "@mui/material";

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

  const alertYesNoQuestion = (mensaje, yesFunction, noFunction) => {
    const Msg = ({ closeToast }) => (
      <div>
        {mensaje}
        <div
          style={{
            margin: "5px",
            display: "flex",
            flexDirection: "row",
            gap: "5px",
          }}
        >
          <Button
            variant="contained"
            style={{ backgroundColor: "#edebe8", color: "#263238" }}
            onClick={yesFunction}
          >
            Si
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#edebe8", color: "#263238" }}
            onClick={noFunction}
          >
            No
          </Button>
        </div>
      </div>
    );

    toast.info(<Msg />, {
      position: "bottom-center",
      autoClose: false,
      hideProgressBar: true,
      pauseOnHover: true,
      closeButton: false,
      progress: undefined,
      theme: "colored",
      className: styles.alertYesNoQuestionWrapper,
    });
  };

  return { alertInfo, alertError, alertSucces, alertYesNoQuestion };
};

export default UseAlert;
