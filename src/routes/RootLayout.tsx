import { Outlet } from "react-router-dom";
import Drawer from "../components/Drawer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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