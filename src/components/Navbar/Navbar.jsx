import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>Logo+Nombre</h1>
      <ul>
        <li className="item">Papas</li>
        <li className="item">Hamburguesas</li>
        <li className="item">Slaudable</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
