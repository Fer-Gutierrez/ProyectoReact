import { Box, Button, Typography } from "@mui/material";
import CartItem from "./CartItem";

const Cart = ({
  cart,
  totalPrice,
  totalQuantity,
  deleteCartItem,
  deleteCart,
  navigate,
}) => {
  return (
    <div style={{ paddingTop: "50px" }}>
      {totalQuantity > 0 ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h3"
            fontWeight={600}
            color="secondary.dark"
            margin={"10px 0px"}
            alignSelf={"center"}
          >
            Tu carrito
          </Typography>
          <CartItem
            cart={cart}
            deleteCartItem={deleteCartItem}
            navigate={navigate}
          />
          <h1>
            Total de su compra: {"$ "}{" "}
            {Number(totalPrice).toLocaleString("es-AR", {
              minimumFractionDigits: 2,
            })}
          </h1>
          <h1>Estas llevando {totalQuantity} productos</h1>
          <Box>
          <Button
            onClick={deleteCart}
            variant="contained"
            color="secondary"
            style={{
              margin: "10px auto 0 10px",
              padding: "10px",
              fontSize: 14,
            }}
          >
            Borrar Carrito
          </Button>
          <Button
            onClick={() => navigate("/")}
            variant="contained"
            color="secondary"
            style={{
              margin: "10px auto 0 10px",
              padding: "10px",
              fontSize: 14,
            }}
          >
            Agregar mas productos
          </Button>
          </Box>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            fontWeight={300}
            fontSize={"1.5rem"}
            color="primary.light"
            textAlign={"center"}
            marginTop={3}
            marginBottom={3}
          >
            Tu carrito esta vacio.
          </Typography>
          <Button
            onClick={() => navigate("/")}
            variant="contained"
            color="secondary"
            style={{
              padding: "10px",
              fontSize: 14,
            }}
          >
            Agregar Productos
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
