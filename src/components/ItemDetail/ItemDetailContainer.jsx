import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { products } from "../../products-Mock";
import useCounter from "../../utils/hooks/UseCounter";

const ItemDetailContainer = () => {
  const { counter, increment, decrement, reset } = useCounter(0);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let encontrado = products.find(prod => prod.id === +id);
    setTimeout(() => {
      setProduct(encontrado);
    }, 500);
  }, [id]);


  return (
    <div>
      <ItemDetail product={product} counter={counter} decrement={decrement} increment={increment} />
    </div>
  );
};

export default ItemDetailContainer;
