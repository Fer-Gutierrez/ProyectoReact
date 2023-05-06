import {Typography } from "@mui/material";
import CardItem from "./CardItem";
import styles from "./ItemList.module.css";

const ItemList = ({ items, category }) => {
  return (
    <div className={styles.itemListContainer}>
      <Typography variant="h1" fontWeight="600" style={{paddingTop:70}}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </Typography>
      <div className={styles.itemList}>
        {items.map(item => {
          return <CardItem item={item} key={item?.id} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
