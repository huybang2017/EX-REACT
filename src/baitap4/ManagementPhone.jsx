import React, { useState, useEffect, useReducer } from "react";
import FormPhone from "./FormPhone";
import TablePhone from "./TablePhone";
import axios from "axios";

function reducer(state, action) {
  switch (action.type) {
    case "DATA_PENDING":
      return { ...state, isLoading: true };
    case "GET_DATA_SUCCESS":
      return { ...state, isLoading: false, data: action.payload };
    case "GET_DATA_REJECTED":
      return { ...state, isLoading: false, data: action.payload };
  }
}
function ManagementPhone() {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    isLoading: false,
    error: null,
  });
  const [search, setsearch] = useState("");
  const handleSearch = (searchString) => {
    setsearch(searchString);
  };
  useEffect(() => {
    fetchProduct();
  }, [search]);
  const fetchProduct = async () => {
    dispatch({ type: "DATA_PENDING" });
    axios
      .get("https://642099cd82bea25f6d043e08.mockapi.io/ex3/phone", {
        params: { name: search || undefined },
      })
      .then((res) => {
        dispatch({ type: "GET_DATA_SUCCESS", payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: "GET_DATA_REJECTED", payload: error.error });
      });
  };
  const handleDelete = async (productID) => {
    try {
      await axios.delete(
        `https://642099cd82bea25f6d043e08.mockapi.io/ex3/phone/${productID}`
      );
      await fetchProduct();
    } catch (error) {
      console.log(error);
    }
  };
  const [updateProduct, setupdateProduct] = useState({
    id:"",
    name: "",
    type: "",
    description: "",
    image: "",
    price: "",
  });
  const handleUpdate = (product) => {
    console.log(product); 
    setupdateProduct(product);
  };
  const handleSubmit = async (product) => {
    try {
      const { id, ...payload } = product;
      if (id) {
        await axios.put(
          `https://642099cd82bea25f6d043e08.mockapi.io/ex3/phone/${id}`,
          payload
        );
      } else {
        await axios.post(
          "https://642099cd82bea25f6d043e08.mockapi.io/ex3/phone",
          product
        );
      }
      fetchProduct();
      setupdateProduct({
        id:"",
        name: "",
        type: "",
        description: "",
        image: "",
        price: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center text-primary">Phone Management</h1>

        <div className="card">
          <div className="card-header bg-dark text-white">Phone Form</div>
          <div className="card-body">
            <FormPhone
              form_product={updateProduct}
              HandleSubmit={handleSubmit}
            />
          </div>
        </div>
        <div className="mt-4">
          <TablePhone
            data={state}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            onsubmit={handleSearch}
          />
        </div>
      </div>
    </>
  );
}

export default ManagementPhone;
