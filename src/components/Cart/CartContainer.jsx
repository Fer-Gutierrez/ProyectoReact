import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const {
    cart,
    getTotalQuantityCart,
    getTotalPriceCart,
    deleteCart,
    deleteCartItem,
  } = useContext(CartContext);

  const navigate = useNavigate();

  let totalPrice = getTotalPriceCart();
  let totalQuantity = getTotalQuantityCart();

  return (
    <div>
      <Cart
        cart={cart}
        totalPrice={totalPrice}
        totalQuantity={totalQuantity}
        deleteCart={deleteCart}
        deleteCartItem={deleteCartItem}
        navigate={navigate}
      />
    </div>
  );
};

export default CartContainer;
