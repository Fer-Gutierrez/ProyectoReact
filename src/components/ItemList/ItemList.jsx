import { Typography } from "@mui/material";
import CardItem from "./CardItem";
import styles from "./ItemList.module.css";
import Loader from "../Loader/Loader";

const ItemList = ({ items, category, navigate, addToCart}) => {
  return items.length === 0 ? (
    <Loader />
  ) : (
    <div className={styles.itemListContainer}>
      <Typography variant="h1" fontWeight="600" style={{ paddingTop: 70 }}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </Typography>
      <div className={styles.itemList}>
        {items.map((item) => {
          return <CardItem item={item} key={item?.id} navigate={navigate} addToCart={addToCart} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
