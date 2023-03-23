import React from "react";

function Glasses({ data, onGetData }) {
  return (
    <div style={{ display: "flex" }}>
      {data.map((item) => {
        return (
          <div key={item.id} className="bg-secondary mx-2 pe-1">
            <img
              src={item.url}
              alt="img"
              style={{ width: "150px", cursor: "pointer" }}
              onClick={() => onGetData(item)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Glasses;
