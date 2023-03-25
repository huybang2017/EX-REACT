import React from "react";

function ProductItem({ shoe, onGetDataItem }) {
  return (
    <div>
      <div className="card">
        <img src={shoe.image} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{shoe.name}</h5>
          <p className="card-text">{shoe.price}$</p>
          <button
            onClick={() => onGetDataItem(shoe)}
            type="button"
            href="#"
            className="btn btn-dark"
            // data-bs-toggle="modal"
            // data-bs-target="#exampleModal"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
