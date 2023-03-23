import React, { useState } from "react";
import Glasses from "./Glasses";
import Model from "./Model";
import data from "./dataGlasses.json";

function Carousel() {
  const [dataGlass, setDataGlass] = useState({
    id: 1,
    price: "Price: 30$",
    name: "GUCCI G8850U",
    url: "./img/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  });
  const getData = (glass) => {
    setDataGlass(glass);
  };
  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./img/background.jpg"
              style={{ width: "100%", height: "100vh" }}
              className="d-block w-100"
              alt="#"
            />
          </div>
          <div
            className="carousel-model"
            style={{ position: "relative", top: "150px" }}
          >
            <Model useDataGlass={dataGlass} />
          </div>
          <div
            className="carousel__selectGlasses"
            style={{ position: "relative", top: "200px" }}
          >
            <Glasses data={data} onGetData={getData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
