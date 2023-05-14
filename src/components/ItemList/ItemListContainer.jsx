import ItemList from "./ItemList";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { CartContext } from "../../context/CartContext";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const productColl = collection(db, "products");
    let consulta = productColl;

    if (categoryName) {
      const productsFiltered = query(
        productColl,
        where("category", "==", categoryName.toLowerCase())
      );
      consulta = productsFiltered;
    }

    getDocs(consulta)
      .then((res) => {
        const resultProducts = res.docs.map((item) => {
          return { ...item.data(), id: item.id };
        });
        setItems(resultProducts);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <>
      <ItemList
        addToCart={addToCart}
        navigate={navigate}
        items={items}
        category={categoryName || "Todos los productos y servicios"}
      />
    </>
  );
};

export default ItemListContainer;
