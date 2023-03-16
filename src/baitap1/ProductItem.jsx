import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import "./Page.css";

function ProductItem() {
  return (
    <div className="col-lg-6 col-xxl-4 mb-5">
      <div className="card bg-light border-0 h-100">
        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
          <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
            <FontAwesomeIcon icon={faBook} />
          </div>
          <h2 className="fs-4 fw-bold">Fresh new layout</h2>
          <p className="mb-0">
            With Bootstrap 5, we've created a fresh new layout for this
            template!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
