import "./layout.css";
import Header from "../header/header";
import Footer from "../footer/footer";


const Layout = ( {children} ) => {
  return (
      <div className="layoutContainer">
                <div className="layoutHeaderContainer">

          <div className="layoutHeader"><Header /></div>
          </div>
          <div className="layoutLeft"></div>

          <div className="layoutMain">{children}</div>
          <div className="layoutRight"></div>

              <div className="layoutFooter"><Footer /></div>

      </div>
  )
};

export default Layout;
