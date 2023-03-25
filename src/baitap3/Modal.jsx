import React from "react";

function Modal({ product, isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div
        className="modal fade show"
        style={{ display: "block" }}
        tabIndex={-1}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="exampleModalLabel"
                style={{ textAlign: "center" }}
              >
                INFOR PRODUCT
              </h5>
              <button type="button" className="btn-close" onClick={onClose} />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-5">
                  <img src={product.image} alt=".." style={{ width: "100%" }} />
                </div>
                <div className="col-sm-7">
                  <h5>NAME: {product.name}</h5>
                  <p>{product.alias}</p>
                  <p>PRICE:{product.price}$</p>
                  <p>INFOR:{product.description}</p>
                  <p>EXISTING GOODS:{product.quantity}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
}

export default Modal;
