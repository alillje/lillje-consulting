import "./layout.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import MobileMenu from "../mobile-menu/mobile-menu"
import { useSelector } from "react-redux";
import sidemenu from "../../redux/reducers/sidemenu";

const Layout = ({ children }) => {
  const sidemenu = useSelector((state) => state.sidemenu);

  /**
   *
   */

  return (
    <div className="layoutContainer">
      <div className="layoutHeaderContainer">
        <div className="layoutHeader">
          <Header />
        </div>
      </div>
      <div className="layoutLeft"></div>

      {sidemenu.show ? (
        <MobileMenu />
      ) : (
        <div className="layoutMain">{children}</div>
      )}
      <div className="layoutRight"></div>

      {!sidemenu.show && (
        <div className="layoutFooter">
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Layout;
