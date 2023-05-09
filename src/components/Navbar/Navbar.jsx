import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Typography } from "@mui/material";
import Loader from "../Loader/Loader";

const Navbar = ({ total, categories }) => {
  return categories.length > 0 ? (
    <div className={styles.navbar}>
      <Link to={"/"} className={styles.contenedorLogo}>
        <img src="LogoMiUniverso2.jpg" alt="" />
        <div>
          <span>Mi Universo</span> <br />
          <span>Astral</span>
        </div>
      </Link>
      <ul>
        {categories.length > 0 &&
          categories.map((category) => {
            return (
              <Link key={category?.id} to={category?.path}>
                <Typography variant="h6" color="primary.main" fontWeight="400">
                  {category?.name}
                </Typography>
              </Link>
            );
          })}
      </ul>
      {total > 0 ? (
        <Link to={"/cart"} className={styles.cartWidget}>
          <CartWidget />
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  ) : (
    <Loader />
  );
};

export default Navbar;
