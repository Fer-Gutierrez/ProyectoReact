import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import {
  Hidden,
  Typography,
  IconButton,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Loader from "../Loader/Loader";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Navbar = ({ total, categories, navOpen, setNavOpen }) => {
  return categories.length > 0 ? (
    <div>
      <div className={styles.navbar}>
        <Link to={"/"} className={styles.contenedorLogo}>
          <img src="LogoMiUniverso2.jpg" alt="" />
          <div>
            <span>Mi Universo</span> <br />
            <span>Astral</span>
          </div>
        </Link>
        <Hidden smDown>
          <ul>
            {categories.length > 0 &&
              categories.map((category) => {
                return (
                  <Link variant="button" key={category?.id} to={category?.path}>
                    <h1
                     className={styles.btnLinks}
                    >
                      {category?.name}
                    </h1>
                  </Link>
                );
              })}
          </ul>
        </Hidden>
        <div>
          {total > 0 ? (
            <div className={styles.contenedorCartMenu}>
              <Link to={"/cart"} className={styles.cartWidget}>
                <CartWidget />
              </Link>
              <Hidden smUp>
                <IconButton onClick={() => setNavOpen(true)}>
                  <MenuIcon style={{ fontSize: "3rem" }} />
                </IconButton>
              </Hidden>
            </div>
          ) : (
            <div>
              <Hidden smUp>
                <IconButton onClick={() => setNavOpen(true)}>
                  <MenuIcon style={{ fontSize: "3rem" }} />
                </IconButton>
              </Hidden>
            </div>
          )}
        </div>
      </div>
      <SwipeableDrawer
        anchor="right"
        open={navOpen}
        onOpen={() => setNavOpen(true)}
        onClose={() => setNavOpen(false)}
        PaperProps={{ style: { backgroundColor: "#3f3f3f" } }}
      >
        <div>
          <IconButton onClick={() => setNavOpen(false)}>
            <ChevronRightIcon
              style={{ color: "whitesmoke" }}
              fontSize="large"
            />
          </IconButton>
        </div>
        <Divider style={{ color: "whitesmoke" }} />
        <List>
          {categories.length > 0 &&
            categories.map((category) => {
              return (
                <ListItem>
                  <Link
                    variant="button"
                    key={category?.id}
                    to={category?.path}
                    onClick={() => setNavOpen(false)}
                  >
                    <Typography
                      variant="h6"
                      fontWeight="400"
                      color="whitesmoke"
                    >
                      {category?.name.toUpperCase()}
                    </Typography>
                  </Link>
                </ListItem>
              );
            })}
        </List>
      </SwipeableDrawer>
    </div>
  ) : (
    <Loader />
  );
};

export default Navbar;
