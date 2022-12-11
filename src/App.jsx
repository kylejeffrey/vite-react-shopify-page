import React from "react";

import "./App.css";
import { Footer } from "./components/footer/footer";
import { ItemShowPage } from "./components/item_show_page/item_show_page";
import { Navbar } from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <ItemShowPage />
      <Footer />
    </>
  );
}

export default App;
