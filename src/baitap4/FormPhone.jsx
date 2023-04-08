import React, { useState, useEffect } from "react";

function FormPhone({ form_product, HandleSubmit }) {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    type: "",
    description: "",
    image: "",
    price: "",
  });
  useEffect(() => {
    setProduct(form_product);
  }, [form_product]);
  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setProduct({ ...product, [name]: value });
  };
  return (
    <form>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type"
          name="type"
          value={product.type}
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="description"
          name="description"
          value={product.description}
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Image"
          name="image"
          value={product.image}
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Price"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </div>
      <button
        className="btn btn-success me-3"
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();
          HandleSubmit(product);
        }}
      >
        Submit
      </button>
      <button
        className="btn btn-secondary"
        type="button"
        onClick={() => {
          setProduct({
            id: "",
            name: "",
            type: "",
            description: "",
            image: "",
            price: "",
          });
        }}
      >
        reset
      </button>
    </form>
  );
}

export default FormPhone;
