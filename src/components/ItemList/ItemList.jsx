import CardItem from "./CardItem";
import styles from "./ItemList.module.css";
import Typography from "@mui/material/Typography";

const ItemList = ({ items, category }) => {
  return (
    <div>
      <h1>{category}</h1>
      <div className={styles.itemList}>
        {items.map(item => {
          return <CardItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
