import React from "react";
import "./item_top.css";

export const ItemTop = () => {
  return (
    <div className="item-top-container">
      <div className="item-top-left">
        <p>
          <a href="#">Home</a> / <a href="#">Samples</a> /{" "}
          <a href="#">Neurofunk</a> / <a href="#">Twisted-01</a>
        </p>
        <h2>Twisted</h2>
        <h5>Neurofunk</h5>
      </div>
      <div className="item-top-right">
        <span>Add</span>
        <span>Like</span>
        <span>Share</span>
      </div>
    </div>
  );
};
