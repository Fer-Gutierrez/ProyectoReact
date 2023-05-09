import React, { createContext, useState } from "react";
import UseAlert from "../utils/alerts/UseAlert";
import { mostrarYesNoModal } from "../utils/modals/YesNoModal/YesNoModal";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const { alertInfo, alertSucces } = UseAlert();
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
      alertSucces("Se actualizó el producto en tu carrito.");
    } else {
      setCart([...cart, product]);
      alertSucces("Se agregó el producto en tu carrito.");
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
    mostrarYesNoModal(
      "Borrar Carrito",
      "¿Esta seguro que desea limpiar el carrito?",
      () => {
        setCart([]);
        alertInfo("Carrito eliminado");
      },
      () => {}
    );
  };

  const deleteCartItem = (id) => {
    let existe = isInCart(id);
    if (existe) {
      mostrarYesNoModal(
        "Borrar producto del Carrito",
        "¿Estas seguro que desea quitar el producto del carrito?",
        () => {
          let newCart = cart.filter((prod) => prod.id !== id);
          setCart(newCart);
          alertInfo("Producto eliminado del carrito");
        },
        () => {}
      );
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
