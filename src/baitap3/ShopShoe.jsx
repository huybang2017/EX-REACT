import React, { useState } from "react";
import ProductList from "./ProductList";
import Modal from "./Modal";
import data from "./data.json";
function ShopShoe() {
  const [selectDataItem, setSelectDataItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleGetDataOnModal = (dataProduct) => {
    console.log(dataProduct);
    setSelectDataItem(dataProduct);
  };
  return (
    <div>
      <ProductList setIsOpen={setIsOpen} data={data} onGetDataOnModal={handleGetDataOnModal} />
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        product={selectDataItem}
      />
    </div>
  );
}

export default ShopShoe;
