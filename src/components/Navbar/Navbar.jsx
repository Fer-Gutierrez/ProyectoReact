import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Typography } from "@mui/material";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to={"/"} className={styles.contenedorLogo}>
        <img src="LogoMiUniverso2.jpg" alt="" />
        <div>
          <span>Mi Universo</span> <br />
          <span>Astral</span>
        </div>
      </Link>
      <ul>
        <Link to={`/`}>
          <Typography variant="h6" color="primary.main" fontWeight="400">
            Todas
          </Typography>
        </Link>
        <Link to={`/category/velas`}>
          <Typography variant="h6" color="primary.main" fontWeight="400">
            Velas
          </Typography>
        </Link>
        <Link to={`/category/mates`}>
          <Typography variant="h6" color="primary.main" fontWeight="400">
            Mates
          </Typography>
        </Link>
        <Link to={`/category/tarot`}>
          <Typography variant="h6" color="primary.main" fontWeight="400">
            Tarot
          </Typography>
        </Link>
        <Link to={`/category/astrologia`}>
          <Typography variant="h6" color="primary.main" fontWeight="400">
            Astrología
          </Typography>
        </Link>
      </ul>

      <CartWidget />
    </div>
  );
};

export default Navbar;
