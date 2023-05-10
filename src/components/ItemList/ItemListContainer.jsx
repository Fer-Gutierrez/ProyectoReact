import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  // useEffect(() => {
  //   //**Simulamos consulta a backend**
  //   const APIProductos = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const productsFiltered = products.filter(
  //         prod => prod.category.toLowerCase() === categoryName?.toLowerCase()
  //       );
  //       resolve(categoryName ? productsFiltered : products);
  //     }, 500);
  //   });

  //   APIProductos.then(res => setItems(res)).catch(err => console.log(err));
  // }, [categoryName]);

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
        items={items}
        category={categoryName || "Todos los productos y servicios"}
      />
    </>
  );
};

export default ItemListContainer;
