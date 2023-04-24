import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<NavbarContainer />}>
            <Route path="/" element={<ItemListContainer />} />
          </Route>

          {/* Ruta para páginas nos encontradas */}
          <Route path="*" element={<h1>Lo siento la ruta no existe</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
