import { BsFillBagCheckFill } from "react-icons/bs";
import styles from "./CartWidget.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantityCart } = useContext(CartContext);
  let total = getTotalQuantityCart();

  return (
    <div className={styles.cart}>
      <BsFillBagCheckFill />
      <div className={styles.cartCounter}>
        <span>{total}</span>
      </div>
    </div>
  );
};

export default CartWidget;
