import { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import UseAlert from "../../utils/alerts/UseAlert";

const NavbarContainer = () => {
  const [categories, setCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState("Todas");
  const { alertInfo } = UseAlert();
  const [navOpen, setNavOpen] = useState(false);

  const { getTotalQuantityCart } = useContext(CartContext);
  let total = getTotalQuantityCart();

  useEffect(() => {
    const categoriesColl = collection(db, "categories");
    getDocs(categoriesColl)
      .then((res) => {
        const resultCategories = res.docs.map((cat) => {
          return { ...cat.data(), id: cat.id };
        });
        setCategories(resultCategories);
      })
      .catch((err) => {
        console.log(err);
        alertInfo(`Erro al intentar obtener las categorias`);
      });
  }, []);


  return (
    <>
      <Navbar
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        total={total}
        categories={categories}
        setCategorySelected={setCategorySelected}
        categorySelected={categorySelected}
      />
      {categories.length > 0 && <Outlet />}
    </>
  );
};

export default NavbarContainer;
