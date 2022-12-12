import React from "react";

import "./item_main.css";
import Twisted from "../../assets/images/Twisted.jpg";

export const ItemMain = () => {
  return (
    <div className="item-main-container">
      <div className="item-main-left">
        <img src={Twisted} alt="Twisted-01 Bass Cover" />
      </div>
      <div className="item-main-right">
        <div className="purchase-container">
          <h2 className="purchase-title">Twisted</h2>
          <h3 className="purchase-price">¥ 2,000</h3>
          <select name="audio-format" id="audio-format">
            <option value="MP3">MP3</option>
            <option value="WAV">WAV</option>
            <option value="WAV">AIFF</option>
            <option value="FLAC">FLAC</option>
          </select>
          <button className="purchase-button">BUY NOW!</button>
        </div>
      </div>
    </div>
  );
};
