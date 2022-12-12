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
        <h1>Twisted</h1>
        <h5>Neurofunk</h5>
      </div>
      <div className="item-top-right">
        <span>
          <a href="#">
            <i className="fa-solid fa-plus"></i>
          </a>
        </span>
        <span>
          <a href="#">
            <i className="fa-solid fa-heart"></i>
          </a>
        </span>
        <span>
          <a href="#">
            <i className="fa-solid fa-share"></i>
          </a>
        </span>
      </div>
    </div>
  );
};
