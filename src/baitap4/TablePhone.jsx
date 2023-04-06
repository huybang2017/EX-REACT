import React from "react";

function TablePhone({ data, handleDelete, handleUpdate, onsubmit }) {
  // const [search, setSearch] = useState("");
  // const handleChange = (evt) => {
  //   setSearch(evt.target.value);
  // };
  return (
    <div className="container-fluid">
      <div className="input-group mb-3" style={{ width: "350px" }}>
        <input type="text" className="form-control" placeholder="Name" />
        <button className="btn btn-success">Search</button>
      </div>
      <div className="table__Phone">
        <table className="table table-info">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.isLoading === true && <h1>Loading...</h1>}
            {data.data.length > 0 &&
              data.data.map((product) => {
                return (
                  <tr key={product.id} className="text-nowrap">
                    <td>{product.name}</td>
                    <td>{product.type}</td>
                    <td>{product.description}</td>
                    <td>
                      <img src={product.image} width={100} height={100} />
                    </td>
                    <td>{product.price}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(product.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-warning ms-2"
                        onClick={() => handleUpdate(product)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablePhone;
