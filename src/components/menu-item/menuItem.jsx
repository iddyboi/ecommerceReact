import React from "react";
import "./styles.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOW NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
