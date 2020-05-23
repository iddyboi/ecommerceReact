import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/" className="logo">
          E - Commerce
        </Link>
      </div>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
