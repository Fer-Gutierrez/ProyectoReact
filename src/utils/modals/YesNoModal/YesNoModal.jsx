import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { create } from "zustand";

const useConfirmDialogStore = create((set) => ({
  title: "",
  message: "",
  display: false,
  yesFunction: () => {},
  noFunction: () => {},
  close: () => {
    set({ display: false });
  },
}));

export const mostrarYesNoModal = (title, message, yesFunction, noFunction) => {
  useConfirmDialogStore.setState({
    title,
    message,
    yesFunction,
    noFunction,
    display: true,
  });
};

const YesNoModal = () => {
  //   const { message, yesFunction, noFunction, abrirCerrar, open } =
  //     UseYesNoModal();
  const { title, message, display, close, yesFunction, noFunction } =
    useConfirmDialogStore();

  return (
    <Dialog
      open={display}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box style={{ backgroundColor: "#d0a9a2" }}>
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            style={{ backgroundColor: "#edebe8", color: "#263238" }}
            variant="contained"
            onClick={() => {
              yesFunction();
              close();
            }}
            autoFocus
          >
            Si
          </Button>
          <Button
            style={{ backgroundColor: "#edebe8", color: "#263238" }}
            variant="contained"
            onClick={() => {
              noFunction();
              close();
            }}
          >
            No
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default YesNoModal;
