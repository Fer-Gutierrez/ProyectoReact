import { BsFillBagCheckFill } from "react-icons/bs";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
  return (
    <div className={styles.cart}>
      <BsFillBagCheckFill />
      <div className={styles.cartCounter}>
        <span>1</span>
      </div>
    </div>
  );
};

export default CartWidget;
