import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const NavbarContainer = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default NavbarContainer;
