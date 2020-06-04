import React from "react";
import "./styles.scss";
import CustomButton from "../custom-button/CustomButton";
import { addItem } from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";

const CollectionItem = ({ item }) => {
  const { id, name, price, imageUrl } = item;
  const distpatch = useDispatch();
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <CustomButton inverted onClick={() => distpatch(addItem(item))}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
