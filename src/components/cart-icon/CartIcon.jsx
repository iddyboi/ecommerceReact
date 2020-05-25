import React from "react";
import "./styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch } from "react-redux";

const CartIcon = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="cart-icon"
      onClick={() => dispatch({ type: "TOGGLE_CART_HIDDEN" })}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
