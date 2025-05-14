import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const Root = () => {
  const location = useLocation();

  const noheaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div className="">
      {noheaderFooter || <Navbar />}
      <div className="min-h-[calc(100vh-340px)]">
        <Outlet></Outlet>
      </div>

      {noheaderFooter || <Footer />}
    </div>
  );
};

export default Root;
