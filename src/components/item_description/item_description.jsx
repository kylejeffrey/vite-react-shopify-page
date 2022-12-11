import React from "react";
import "./item_description.css";

import Atmosfear from "../../assets/images/Atmosfear.jpg";
import Essentials from "../../assets/images/Essentials.jpg";
import GoldenAge from "../../assets/images/Golden_Age.jpg";
import SnaresAttack from "../../assets/images/Snares_Attack!.jpg";

export const ItemDescription = () => {
  return (
    <div className="item-description-container">
      <div className="item-description">
        <h4>Description</h4>
        <p>
          Here we go again! With TWISTED we present to you a new stunning
          collection of high quality drum and bass samples. This library is
          loaded to the brim with a unique arsenal of samples straight out the
          lab.
        </p>
        <p>
          In this pack you will find many brand new loops, consisting of various
          up to date breakbeats, percussion loops, shuffle loops, shaker loops
          and filling tom loops. Also included are wide range of one-shot
          samples to take you to the next level with further processing.
        </p>
        <p>
          The one shot sample set consists of evolving atmospheres, a new
          selection of heavy face melting reece basses, dark stabs, tearing
          leads, futuristic- synth and bass sounds, a huge range of outstanding
          FX samples, twisting bass FX samples and a drum folder filled with
          clean kicks, punchy snares, fx percussions, clap-snare layers, crispy
          hihat’s, rides and cymbals.
        </p>
        <p>
          Twisted offers over 680 key and bpm labeled wav samples, ready to
          sculpt your building blocks for hard hitting drum and bass
          productions.
        </p>
        <p>Get your hands on this new outstanding drum and bass sample pack!</p>
        <div className="description-extras-container">
          <div className="item-contains-container">
            <h4>Contains</h4>
            <p>28 Atmos</p>
            <p>72 Bass FX</p>
            <p>97 x Breakbeats</p>
            <p>170 x Drums</p>
            <p>142 x Misc FX</p>
            <p>48 x Various Percussion Loops</p>
            <p>68 x Reese Bass</p>
            <p>24 x Synths</p>
            <p>Format: MP3, WAV & FLAC</p>
            <p>Total: 840 mb</p>
          </div>
          <div className="related-products-container">
            <h4>Related Products</h4>
            <div className="related-products">
              <img src={Atmosfear} alt="Atmosfear" />
              <img src={Essentials} alt="Essentials" />
              <img src={GoldenAge} alt="GoldenAge" />
              <img src={SnaresAttack} alt="SnaresAttack" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
