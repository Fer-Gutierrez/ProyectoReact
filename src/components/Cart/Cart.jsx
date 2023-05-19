import { Box, Button, Typography } from "@mui/material";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddBoxIcon from "@mui/icons-material/AddBox";

const Cart = ({
  cart,
  totalPrice,
  totalQuantity,
  deleteCartItem,
  deleteCart,
  navigate,
}) => {
  return (
    <div style={{ padding: "70px 7.5% 0 7.5%" }}>
      {totalQuantity > 0 ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography className={styles.cartTitle}>Tu carrito</Typography>
          <CartItem
            cart={cart}
            deleteCartItem={deleteCartItem}
            navigate={navigate}
          />
          <div className={styles.totalPriceContainer}>
            <h1 className={styles.totalPriceText}>Total de tu compra:</h1>
            <div className={styles.boxTotalPrice}>
              {"$ "}{" "}
              {Number(totalPrice).toLocaleString("es-AR", {
                minimumFractionDigits: 2,
              })}
            </div>
          </div>
          <p className={styles.totalQuantityCart}>
            {totalQuantity > 1
              ? `Estas llevando ${totalQuantity} elementos`
              : `Estas llevando ${totalQuantity} elemento.`}
          </p>
          <Box
            sx={{
              justifyContent: "space-evenly",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Button
              onClick={deleteCart}
              variant="contained"
              color="secondary"
              className={styles.btnDeleteCart}
            >
              <DeleteIcon
                sx={{
                  marginRight:{xs: ".1rem", sm:".3rem"},
                  fontSize: { xs: "medim", sm: "large" },
                }}
              />
              Borrar Carrito
            </Button>
            <Button
              onClick={() => navigate("/")}
              variant="contained"
              color="secondary"
              className={styles.btnDeleteCart}
            >
              <AddBoxIcon
                sx={{
                  marginRight:{xs: ".1rem", sm:".3rem"},
                  fontSize: { xs: "medim", sm: "large" },
                }}
              />{" "}
              Agregar mas productos
            </Button>
          </Box>
          <Button
            onClick={() => navigate("/checkoutform")}
            variant="contained"
            style={{
              backgroundColor: "#30963d",
              margin: "20px 0",
              padding: "10px",
              fontSize: 14,
            }}
          >
            Ir a Pagar
          </Button>
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
