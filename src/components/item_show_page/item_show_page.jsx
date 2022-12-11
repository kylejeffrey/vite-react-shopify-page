import React from "react";

import "./item_show_page.css";
import { ItemDescription } from "../item_description/item_description";
import { ItemMain } from "../item_main/item_main";
import { ItemTop } from "../item_top/item_top";

export const ItemShowPage = () => {
  return (
    <div className="item-show-page-container">
      <ItemTop />
      <ItemMain />
      <ItemDescription />
    </div>
  );
};
