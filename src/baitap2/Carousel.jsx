import React from "react";
import Glasses from "./Glasses";
import Model from "./Model";

function Carousel() {
  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./img/background.jpg"
              style={{ width: "100vh", height: "100vh" }}
              className="d-block w-100"
              alt="#"
            />
          </div>
          <div
            className="carousel-model"
            style={{ position: "relative" }}
          >
            <Model/>
          </div>
          <div
            className="carousel__selectGlasses"
            style={{ position: "relative" }}
          >
            <Glasses/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
