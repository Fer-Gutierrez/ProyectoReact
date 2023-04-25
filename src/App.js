import { ThemeProvider, colors, createTheme } from "@mui/material";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";

const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "Roboto", "sans-serif"].join(","),
    fontSize: 14,
  },
  palette: {
    primary: {
      light: colors.blueGrey[600],
      main: colors.blueGrey[800],
      dark: colors.blueGrey[900],
    },
    secondary: { light: "#edebe8", main: "#d0a9a2", dark: "#d0a9a2" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<NavbarContainer />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:categoryName"
                element={<ItemListContainer />}
              />
              <Route path="/itemdetail/:id" element={<ItemDetailContainer />} />
            </Route>

            {/* Ruta para páginas nos encontradas */}
            <Route path="*" element={<h1>Lo siento la ruta no existe</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
