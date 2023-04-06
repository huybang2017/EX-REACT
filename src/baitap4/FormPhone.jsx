import React, { useState, useEffect } from "react";

function FormPhone({ form_product, HandleSubmit }) {
  const [product, setproduct] = useState({
    id:"",
    name: "",
    type: "",
    description: "",
    image: "",
    price: "",
  });
  useEffect(() => {
    setproduct(form_product);
  }, [form_product]);
  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setproduct({ ...product, [name]: value });
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
          placeholder="Description"
          name="descirption"
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
        onClick={() => HandleSubmit(product)}
      >
        Submit
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => {
          setproduct({
            id:"",
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
