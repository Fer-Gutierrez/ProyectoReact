import styles from "./ItemList.module.css";

const ItemList = ({ saludo }) => {
  return (
    <div className={styles.itemList}>
      <h1>Listado de Items</h1>
      <p style={{ color: "red" }}>{saludo}</p>
    </div>
  );
};

export default ItemList;
