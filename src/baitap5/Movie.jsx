import React from "react";
import Header from "./Header";
import SeatBooking from "./SeatBooking";
import SeatBill from "./SeatBill";

function Movie() {
  return (
    <div>
      <Header />
      <div className="showcaseContainer mt-3">
        <ul className="showcase">
          <li>
            <span className="seat" /> <small>N/A</small>
          </li>
          <li>
            <span className="seat selected" /> <small>Selected</small>
          </li>
          <li>
            <span className="seat occupied" /> <small>Occupied</small>
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
