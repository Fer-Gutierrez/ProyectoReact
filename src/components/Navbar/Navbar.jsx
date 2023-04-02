import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a href="" className={styles.contenedorLogo}>
      <img src="LogoMiUniverso2.jpg" alt="" />
        <div>
          <span>Mi Universo</span> <br />
          <span>Astral</span>
        </div>
      </a>
      <ul>
        <li className="item">
          <a href="">Velas</a>
        </li>
        <li className="item">
          <a href="#">Tarot</a>
        </li>
        <li className="item">
          <a href="#">Astrología</a>
        </li>
      </ul>

      <CartWidget />
    </div>
  );
};

export default Navbar;
