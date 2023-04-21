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
                      ? "seat occupied col"
                      : seat.selected
                      ? "seat selected"
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
