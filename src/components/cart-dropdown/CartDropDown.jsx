import React from "react";
import "./styles.scss";
import CustomButton from "../custom-button/CustomButton";
import CartItemComponent from "../cart-item/cart-item";
import { useSelector } from "react-redux";

const CartDropDown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItemComponent key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropDown;
