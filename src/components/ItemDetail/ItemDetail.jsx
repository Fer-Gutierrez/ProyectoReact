import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Counter from "./Counter";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ product, counter, decrement, increment }) => {
  return (
    <Box padding={"70px 7.5% 0 7.5%"} marginBottom={7}>
      <Box
        border={"solid 1px"}
        borderColor={"primary.light"}
        borderRadius={"5px"}
        display={"grid"}
        gridTemplateColumns={"4fr 3fr"}
        gap={"10px"}
      >
        <Box
          display={"flex"}
          padding={"10px"}
          backgroundColor="whitesmoke"
          borderRadius={"5px"}
        >
          <img
            className={styles.imgDescription}
            src={product.img}
            alt={product.name}
          />
        </Box>
        <Box padding={"10px"}>
          <Typography
            variant="h3"
            fontWeight={600}
            color="secondary.dark"
            margin={"10px 0px"}
          >
            {product.name}
          </Typography>
          <Typography
            variant="body1"
            fontWeight={300}
            fontSize={"1.5rem"}
            color="primary.light"
          >
            {product.description}
          </Typography>
          <Typography variant="h4" color="primary.dark" marginTop={"10px"}>
            $ {product.price}
          </Typography>
          {product.reqStock && <Typography>Stock disponible: {product.stock} unidades.</Typography>}
          {product.reqStock && (
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
            </Box>
          )}
          <Button
            variant="contained"
            color="secondary"
            style={{ margin: "10px 0", padding: "5", fontSize:14 }}
          >
            COMPRAR
          </Button>
          {!product.reqStock && <Typography variant="body1" color="primary.light" fontWeight={300}>*La fecha del servicio se define segun disponibilidad en agenda.</Typography>}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetail;
