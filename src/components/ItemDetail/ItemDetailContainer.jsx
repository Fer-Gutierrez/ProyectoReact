import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../../products-Mock";
import useCounter from "../../utils/hooks/UseCounter";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {
  const { addToCart, getQuantityById, getTotalQuantityCart } = useContext(CartContext);
  const [product, setProduct] = useState({});
  let totalQuantity = getQuantityById(product.id);
  const { counter, increment, decrement } = useCounter(totalQuantity);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let encontrado = products.find((prod) => prod.id === +id);
    setTimeout(() => {
      setProduct(encontrado);
    }, 500);
  }, [id]);

  const onAdd = (product) => {
    let newProduct = { ...product, quantity: counter };
    addToCart(newProduct);
  };

  return (
    <div>
      <ItemDetail
        product={product}
        counter={counter}
        decrement={decrement}
        increment={increment}
        onAdd={onAdd}
        getTotalQuantityCart={getTotalQuantityCart}
        navigate={navigate}
      />
    </div>
  );
};

export default ItemDetailContainer;
