import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useNavigate, useParams } from "react-router-dom";
import useCounter from "../../utils/hooks/UseCounter";
import { CartContext } from "../../context/CartContext";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";


const ItemDetailContainer = () => {
  const { addToCart, getQuantityById, getTotalQuantityCart } =
    useContext(CartContext);
  const [product, setProduct] = useState({});
  let totalQuantity = getQuantityById(product.id);
  const { counter, increment, decrement } = useCounter(totalQuantity);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const productColl = collection(db, "products");
    const refDoc = doc(productColl, id);
    getDoc(refDoc)
      .then((res) => setProduct({ ...res.data(), id: res.id }))
      .catch((err) => console.log(err));
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
