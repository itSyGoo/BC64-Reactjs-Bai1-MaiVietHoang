import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/HomeLayout/Header";
import Navigate from "./Components/HomeLayout/Navigate";
import Item from "./Components/HomeLayout/Item";
import Footer from "./Components/HomeLayout/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Navigate />
    <Item />
    <Footer />
  </div>
);
