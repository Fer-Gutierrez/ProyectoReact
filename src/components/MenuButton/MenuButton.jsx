import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css";

const MenuButton = ({
  textButton = "Boton",
  categories,
  setCategorySelected,
  categorySelected,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="button-menuButton"
        aria-controls={open ? "menu-menuButton" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="text"
      >
        <h1 className={styles.btnLinks}>{textButton}</h1>
      </Button>
      <Menu
        id="menu-menuButton"
        aria-labelledby="button-menuButton"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        placement="bottom-start"
      >
        {categories.length > 0 &&
          categories.map((cat) => {
            return (
              <Link key={cat?.id} to={cat?.path}>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    setCategorySelected(cat?.name);
                  }}
                >
                  <h1
                    className={
                      cat?.name === categorySelected
                        ? styles.btnLinkActive
                        : styles.btnLinks
                    }
                    // className={ styles.btnLinks}
                  >
                    {cat?.name}
                  </h1>
                </MenuItem>
              </Link>
            );
          })}
      </Menu>
    </div>
  );
};

export default MenuButton;
