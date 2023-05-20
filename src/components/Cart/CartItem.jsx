import { Button, Tooltip } from "@mui/material";
import React from "react";
import styles from "./CartItem.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const CartItem = ({ cart, deleteCartItem, navigate }) => {
  return (
    <div>
      {cart.map((prod) => {
        return (
          <div key={prod?.id} className={styles.containerItem}>
            <div>
              <h1 className={styles.titleItem}>
                {prod?.quantity} {prod?.name}
              </h1>
              <h2 className={styles.unitPriceItem}>
                {prod?.quantity > 1
                  ? `${prod?.quantity} Unidades`
                  : `${prod?.quantity} Unidad`}{" "}
              </h2>
              <h2 className={styles.unitPriceItem}>
                Precio unitario: ${" "}
                {Number(prod?.price).toLocaleString("es-AR", {
                  minimumFractionDigits: 2,
                })}
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                marginLeft: "auto",
                alignItems: "center",
              }}
            >
              <h2 className={styles.subtotalPriceItem}>
                ${" "}
                {Number(prod?.price * prod?.quantity).toLocaleString("es-AR", {
                  minimumFractionDigits: 2,
                })}
              </h2>
              <div className={styles.btnContainer}>
                <Tooltip title="Editar elemento">
                  <Button
                    onClick={() => {
                      navigate(`/itemdetail/${prod?.id}`);
                    }}
                    variant="contained"
                    color="light"
                    style={{ fontSize: 10, padding: "3px", minWidth: 0 }}
                  >
                    <EditIcon />
                  </Button>
                </Tooltip>
                <Tooltip title="Borrar elemento">
                  <Button
                    onClick={() => deleteCartItem(prod?.id)}
                    variant="contained"
                    color="light"
                    style={{ fontSize: 10, padding: "3px", minWidth: 0 }}
                  >
                    <DeleteIcon />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
