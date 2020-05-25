import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/CartIcon";
import { connect, useSelector } from "react-redux";
import CartDropDown from "../cart-dropdown/CartDropDown";

const Header = (currentUser) => {
  const cartState = useSelector((state) => state.cart.hidden);
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}

        <CartIcon />
      </div>
      {cartState ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
