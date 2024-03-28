import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer.jsx/Footer";

const Root = () => {
  return (
    <div>
      <nav className="h-[79.2px] bg-white">
        <Navbar />
      </nav>
      <div className="min-h-[calc(100vh-352px)] max-w-[1240px] w-[90%] mx-auto my-2">
        <Outlet />
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default Root;
