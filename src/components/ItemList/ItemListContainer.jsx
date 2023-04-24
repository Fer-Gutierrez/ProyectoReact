import ItemList from "./ItemList";
import { products } from "../../products-Mock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    //**Simulamos consulta a backend**
    const APIProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        const productsFiltered = products.filter(
          prod => prod.category.toLowerCase() === categoryName?.toLowerCase()
        );
        resolve(categoryName ? productsFiltered : products);
      }, 2000);
    });

    APIProductos.then(res => setItems(res)).catch(err => console.log(err));
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
