import React, { createContext, useState } from "react";
import UseAlert from "../utils/alerts/UseAlert";
const { alertError, alertYesNoQuestion } = UseAlert();
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    let existe = cart.some((prod) => prod?.id === id);
    return existe;
  };

  const addToCart = (product) => {
    const existe = isInCart(product?.id);
    if (existe) {
      let newCart = cart.map((item) => {
        return item.id === product.id
          ? { ...item, quantity: product.quantity }
          : item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const getTotalQuantityCart = () => {
    let total = cart.reduce((acum, prod) => {
      return acum + prod.quantity;
    }, 0);
    return total;
  };

  const getTotalPriceCart = () => {
    let total = cart.reduce((acum, prod) => {
      return acum + prod.price * prod.quantity;
    }, 0);
    return total;
  };

  const deleteCart = () => {
    alertYesNoQuestion(
      "¿Esta seguro que desea limpiar el carrito?",
      () => setCart([]),
      () => alertError("No se elimino")
    );
  };

  const deleteCartItem = (id) => {
    let existe = isInCart(id);
    if (existe) {
      alertYesNoQuestion(
        "¿Estas seguro que desea quitar el producto del carrito?",
        () => {
          let newCart = cart.filter((prod) => prod.id !== id);
          setCart(newCart);
        },
        () => {}
      );
    } else {
      alertError("Error: El producto no existe en el carrito.");
    }
  };

  const getQuantityById = (id) => {
    let product = cart.find((p) => p.id === id);
    return product?.quantity;
  };

  const data = {
    cart,
    setCart,
    addToCart,
    getTotalQuantityCart,
    getTotalPriceCart,
    deleteCart,
    deleteCartItem,
    getQuantityById,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
