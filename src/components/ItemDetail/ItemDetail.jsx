import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Counter from "./Counter";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ product, counter, decrement, increment }) => {
  return (
    <Box padding={"70px 7.5% 0 7.5%"}>
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
          <Typography variant="h4" color="secondary.dark" margin={"10px 0px"}>
            {product.name}
          </Typography>
          <Typography variant="body1" color="primary.light">
            {product.description}
          </Typography>
          <Typography variant="h4" color="primary.dark" margin={"20px 0 0 0"}>
            $ {product.price}
          </Typography>
          {product.reqStock && <Typography>Stock: {product.stock}</Typography>}
          {product.reqStock && (
            <Counter
              product={product}
              counter={counter}
              decrement={decrement}
              increment={increment}
            />
          )}
          <Button variant="contained" color="secondary" style={{ margin: 10 }}>
            COMPRAR
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetail;
