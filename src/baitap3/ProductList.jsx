import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ data, onGetDataOnModal, setIsOpen }) {
  const getDataItem = (dataItem) => {
    console.log(dataItem);
    onGetDataOnModal(dataItem);
    setIsOpen(true);
  };
  return (
    <div>
      <div className="row">
        {data.map((item) => {
          return (
            <div key={item.id} className="col-sm-4">
              <ProductItem onGetDataItem={getDataItem} shoe={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
