import React from "react";
import { useSelector, useDispatch } from "react-redux";

function SeatBooking() {
  const dispatch = useDispatch();
  const { seatList } = useSelector((state) => {
    return state.seat;
  });
  const handleClick = (hang, soGhe) => {
    dispatch({
      type: "GHE_DANG_CHON",
      hang,
      soGhe,
    });
  };
  return (
    <div>
      <div className="row">
        <span className="col"></span>
        <span className="col text-center">1</span>
        <span className="col text-center">2</span>
        <span className="col text-center">3</span>
        <span className="col text-center">4</span>
        <span className="col text-center">5</span>
        <span className="col text-center">6</span>
        <span className="col text-center">7</span>
        <span className="col text-center">8</span>
        <span className="col text-center">9</span>
        <span className="col text-center">10</span>
        <span className="col text-center">11</span>
        <span className="col text-center">12</span>
      </div>
      {seatList.map((item) => {
        return (
          <div className="row" key={item.seatList}>
            <h5 className="col-1">{item.hang}</h5>
            {item.danhSachGhe.map((seat) => {
              return (
                <button
                  key={seat.soGhe}
                  className={
                    seat.daDat
                      ? "seat occupied col bg-danger"
                      : seat.selected
                      ? "seat selected col bg-info"
                      : "seat col"
                  }
                  onClick={() => handleClick(item.hang, seat.soGhe)}
                  disabled={seat.daDat}
                ></button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default SeatBooking;
