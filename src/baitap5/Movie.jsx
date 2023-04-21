import React from "react";
import Header from "./Header";
import SeatBooking from "./SeatBooking";
import SeatBill from "./SeatBill";

function Movie() {
  return (
    <div>
      <Header />
      <div className="showcaseContainer mt-3 text-center">
        <ul className="showcase" style={{listStyleType:"none"}}>
          <li>
            <span className="seat" /> <small>N/A</small>
          </li>
          <li>
            <span className="seat selected" /> <small className="text-bg-info">Selected</small>
          </li>
          <li>
            <span className="seat occupied" /> <small className="text-bg-danger">Occupied</small>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-7">
          <SeatBooking />
        </div>
        <div className="col-5">
          <SeatBill />
        </div>
      </div>
    </div>
  );
}

export default Movie;
