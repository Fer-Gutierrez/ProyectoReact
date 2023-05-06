import { Button } from "@mui/material";
import React from "react";

const CartItem = ({ cart, deleteCartItem }) => {
  return (
    <div>
      {cart.map((prod) => {
        return (
          <div
            key={prod?.id}
            style={{ margin: "10px", border: "solid 1px gray" }}
          >
            <h1>
              {prod?.quantity} {prod?.name}
            </h1>
            <h2>
              Precio unitario: ${" "}
              {Number(prod?.price).toLocaleString("es-AR", {
                minimumFractionDigits: 2,
              })}
            </h2>
            <h2>
              Subtotal: ${" "}
              {Number(prod?.price * prod?.quantity).toLocaleString("es-AR", {
                minimumFractionDigits: 2,
              })}
            </h2>
            <Button
              onClick={() => deleteCartItem(prod?.id)}
              variant="contained"
              color="secondary"
              style={{ margin: "10px 0", padding: "3px", fontSize: 10 }}
            >
              Eliminar
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
