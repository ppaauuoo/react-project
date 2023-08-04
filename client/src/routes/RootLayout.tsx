import { Outlet } from "react-router-dom";
import Drawer from "../components/LayoutComponents/Drawer";
import Footer from "../components/LayoutComponents/Footer";
import Navbar from "../components/LayoutComponents/Navbar";

const RootLayout  = () => {
  return (
    <>
      <Drawer>
        <Navbar />
        <Outlet/>
        <Footer />
      </Drawer>
    </>
  );
}

export default RootLayout;