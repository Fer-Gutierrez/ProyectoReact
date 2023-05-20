import { Button, Typography } from "@mui/material";
import DeliveryForm from "./DeliveryForm";
import CustomerForm from "./CustomerForm";
import CartItem from "../Cart/CartItem";
import styles from "./CheckoutForm.module.css";

const CheckoutForm = ({
  handleChange,
  handleSubmit,
  errors,
  values,
  verificarCamposFaltantes,
  cart,
  navigate,
  deleteCartItem,
  totalPrice,
  totalQuantity,
  typeInCart,
}) => {
  return (
    <div style={{ padding: "70px 7.5% 0 7.5%" }}>
      <h1 className={styles.titles}>
        Resumen de su pedido
      </h1>
      <CartItem
        cart={cart}
        deleteCartItem={deleteCartItem}
        navigate={navigate}
      />
      {cart.length > 0 ? (
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: ".3rem 2rem",
            }}
          >
            <h1 className={styles.totalPriceText}>Total de compra</h1>
            <div className={styles.boxTotalPrice}>
              {"$ "}{" "}
              {Number(totalPrice).toLocaleString("es-AR", {
                minimumFractionDigits: 2,
              })}
            </div>
            <h1 className={styles.totalQuantityCart}>
              {totalQuantity > 1
                ? `Estas llevando ${totalQuantity} productos.`
                : `Estas llevando ${totalQuantity} producto.`}
            </h1>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <CustomerForm handleChange={handleChange} errors={errors} />
            <DeliveryForm
              handleChange={handleChange}
              errors={errors}
              values={values}
              typeInCart={typeInCart}
            />
            <div
              style={{
                padding: "20px 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                onClick={verificarCamposFaltantes}
                type="submit"
                variant="contained"
                color="secondary"
                style={{
                  padding: "10px",
                  fontSize: 14,
                }}
              >
                Confirmar Compra
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <Typography variant="h6" color="primary" fontWeight={400}>
            No tiene productos en su carrito.
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

export default CheckoutForm;
