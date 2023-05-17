import React, { createContext, useEffect, useState } from "react";
import UseAlert from "../utils/alerts/UseAlert";
import { mostrarYesNoModal } from "../utils/modals/YesNoModal/YesNoModal";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const { alertInfo, alertSucces } = UseAlert();
  const [cart, setCart] = useState([]);

  const guardarLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  useEffect(() => {
    let localCart = JSON.parse(localStorage.getItem("cart"));
    localCart && setCart(localCart);
  }, []);

  const isInCart = (id) => {
    let existe = cart.some((prod) => prod?.id === id);
    return existe;
  };

  const addToCart = (product) => {
    if (product.reqStock && product?.stock <= 0) {
      alertInfo("No hay stock del producto que desea agregar.");
      return;
    }

    const existe = isInCart(product?.id);
    if (existe) {
      let newCart = cart.map((item) => {
        return item?.id === product?.id
          ? { ...item, quantity: product?.quantity }
          : item;
      });
      setCart(newCart);
      guardarLocalStorage(newCart);
      alertSucces("Se actualizó el producto en tu carrito.");
    } else {
      setCart([...cart, product]);
      guardarLocalStorage([...cart, product]);
      alertSucces("Se agregó el producto en tu carrito.");
    }
  };

  const getTotalQuantityCart = () => {
    let total = cart.reduce((acum, prod) => {
      return acum + prod?.quantity;
    }, 0);
    return total;
  };

  const getTotalPriceCart = () => {
    let total = cart.reduce((acum, prod) => {
      return acum + prod?.price * prod?.quantity;
    }, 0);
    return total;
  };

  const deleteCart = (directDelete = false) => {
    if (directDelete) {
      setCart([]);
      guardarLocalStorage([]);
    } else {
      mostrarYesNoModal(
        "Borrar Carrito",
        "¿Esta seguro que desea limpiar el carrito?",
        () => {
          setCart([]);
          guardarLocalStorage([]);
          alertInfo("Carrito eliminado");
        },
        () => {}
      );
    }
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
          guardarLocalStorage(newCart);
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
