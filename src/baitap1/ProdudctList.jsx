import React from "react";
import ProductItem from "./ProductItem";

function ProdudctList() {
  return (
    <div>
      <section className="pt-4">
        <div className="container px-lg-5">
          {/* Page Features*/}
          <div className="row gx-lg-5">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProdudctList;
