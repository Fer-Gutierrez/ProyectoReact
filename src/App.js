import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";

function App() {
  const saludo = "Hola soy un saludo!! ¿Como estas?";

  return (
    <div>
      <NavbarContainer />
      <ItemListContainer saludo={saludo} />
    </div>
  );
}

export default App;
