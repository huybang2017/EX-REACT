import React from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Header from "./Header";
import ProdudctList from "./ProdudctList";

function Page() {
  return (
    <div>
      <Header />
      <Carousel />
      <ProdudctList/>
      <Footer/>
    </div>
  );
}

export default Page;
