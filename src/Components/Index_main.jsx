import React from "react";
import Crypto from "./Crypto/Crypto";
import Footer from "./Footer/Footer";
import Front from "./Front/Front";
import Front2 from "./Front2/Front2";
import Front3 from "./Front3/Front3";
import Front4 from "./Front4/Front4";
import Header from "./Header/Header";
import Mint from "./Mint/Mint";
import Road from "./Road/Road";
import Slide from "./Slide/Slide";

export default function Index_main() {
  return (
    <div className="App">

      <Front />
      <Front2 />
      <Front3 />
      <Front4 />
      <Mint />
      <Crypto />
      <Road />
      <Slide />

    </div>
  );
}
