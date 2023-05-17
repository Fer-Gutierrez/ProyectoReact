import { ThemeProvider, colors, createTheme } from "@mui/material";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import AlertToastify from "./utils/alerts/AlertToastify";
import CartContextProvider from "./context/CartContext";
import CartContainer from "./components/Cart/CartContainer";
import YesNoModal from "./utils/modals/YesNoModal/YesNoModal";
import CheckoutFormContainer from "./components/CheckoutForm/CheckoutFormContainer";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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
          <CartContextProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Routes>
                <Route element={<NavbarContainer />}>
                  <Route path="/" element={<ItemListContainer />} />
                  <Route
                    path="/category/:categoryName"
                    element={<ItemListContainer />}
                  />
                  <Route
                    path="/itemdetail/:id"
                    element={<ItemDetailContainer />}
                  />
                  <Route path="/cart" element={<CartContainer />} />
                  <Route
                    path="/checkoutform"
                    element={<CheckoutFormContainer />}
                  />
                </Route>

                {/* Ruta para páginas nos encontradas */}
                <Route
                  path="*"
                  element={<h1>Lo siento la ruta no existe</h1>}
                />
              </Routes>
            </LocalizationProvider>
          </CartContextProvider>
          <AlertToastify />
          <YesNoModal />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
