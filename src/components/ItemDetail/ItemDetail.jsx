import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Counter from "./Counter";
import styles from "./ItemDetail.module.css";
import Loader from "../Loader/Loader";

const ItemDetail = ({
  product,
  counter,
  decrement,
  increment,
  onAdd,
  getTotalQuantityCart,
  navigate,
}) => {
  if (!product.img) {
    return <Loader />;
  }

  return (
    <Box padding={"70px 7.5% 0 7.5%"} marginBottom={7}>
      <Box className={styles.cardContenedor}>
        <Box className={styles.imgContenedor}>
          <img
            className={styles.imgDescription}
            src={product.img}
            alt={product.name}
          />
        </Box>
        <Box padding={"10px"}>
          <Typography className={styles.tituloItem}>{product.name}</Typography>
          <Typography className={styles.descriptionItem}>
            {product.description}
          </Typography>
          <Typography variant="h4" color="primary.dark" marginTop={"10px"}>
            ${" "}
            {Number(product.price).toLocaleString("es-AR", {
              minimumFractionDigits: 2,
            })}
          </Typography>
          {product.reqStock && (
            <Typography>Stock disponible: {product.stock} unidades.</Typography>
          )}
          {product.reqStock ? (
            product?.stock > 0 ? (
              <Box display={"flex"} alignItems={"center"} marginTop={"10px"}>
                <Typography variant="h5" fontWeight={300}>
                  Cantidad:
                </Typography>
                <Counter
                  product={product}
                  counter={counter}
                  decrement={decrement}
                  increment={increment}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ margin: "10px 0", padding: "5", fontSize: 12 }}
                  fontSize={20}
                  onClick={() => onAdd(product)}
                >
                  <i
                    style={{ fontSize: 14, marginRight: ".3em" }}
                    className={"bi bi-bag-plus-fill"}
                  ></i>
                  <span>AGREGAR AL CARRITO</span>
                </Button>
              </Box>
            ) : (
              <Typography
                variant="body1"
                color="primary.light"
                fontWeight={300}
                marginTop={"15px"}
                marginBottom={"0"}
              >
                No hay mas stcok de este producto.
              </Typography>
            )
          ) : (
            <Box>
              <Typography
                variant="body1"
                color="primary.light"
                fontWeight={300}
                marginTop={"15px"}
                marginBottom={"0"}
              >
                Solo puedes llevar una unidad de este servicio.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                style={{ margin: "10px 0", padding: "5", fontSize: 12 }}
                onClick={() => onAdd(product)}
              >
                <i
                  style={{ fontSize: 14, marginRight: ".3em" }}
                  className={"bi bi-bag-plus-fill"}
                ></i>
                <span>AGREGAR AL CARRITO</span>
              </Button>
            </Box>
          )}

          {!product.reqStock && (
            <Typography variant="body1" color="primary.light" fontWeight={300}>
              *La fecha del servicio se define segun disponibilidad en agenda.
            </Typography>
          )}
          {getTotalQuantityCart() > 0 && (
            <Button
              onClick={() => navigate("/cart")}
              variant="contained"
              color="secondary"
              style={{ margin: "10px 0", padding: "5", fontSize: 12 }}
            >
              Terminar Compra
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetail;
