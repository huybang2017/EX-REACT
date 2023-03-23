import React from "react";

function Model({ useDataGlass }) {
  return (
    <div style={{ display: "flex" }}>
      <div className="model me-5" style={{ position: "relative", left: "30%" }}>
        <div className="card" style={{ width: "20rem" }}>
          <img src="./img/model.jpg" className="card-img-top" alt="..." />
          <div
            className="card-img-overlay bg-info"
            style={{
              display: "grid",
              alignItems: "end",
              gridTemplateRows: "auto",
              top: "250px",
              opacity:"0.7"
            }}
          >
            <img
              src={useDataGlass.url}
              alt="..."
              style={{
                width: "64%",
                position: "absolute",
                top: "-155px",
                left: "58px",
              }}
            />
            <h5 className="card-title my-0">{useDataGlass.name}</h5>
            <p className="card-text my-0">{useDataGlass.price}</p>
            <p className="card-text my-0">{useDataGlass.desc}</p>
          </div>
        </div>
      </div>
      <div className="model" style={{ position: "relative", left: "30%" }}>
        <div className="card" style={{ width: "20rem" }}>
          <img src="./img/model.jpg" className="card-img-top" alt="..." />
        </div>
      </div>
    </div>
  );
}

export default Model;
