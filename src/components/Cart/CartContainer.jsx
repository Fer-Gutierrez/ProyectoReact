import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";

const CartContainer = () => {
  const {
    cart,
    getTotalQuantityCart,
    getTotalPriceCart,
    deleteCart,
    deleteCartItem,
  } = useContext(CartContext);

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
      />
    </div>
  );
};

export default CartContainer;
