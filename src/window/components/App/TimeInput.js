import React, { useState, useContext, useEffect } from "react";
import { isTimeBeforeDate,getCurrentTime } from "../../helper/util";
import AppContext from "../../context/app";

const TimeInput = () => {

  
  const { time, setTime, date } = useContext(AppContext);

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };
  useEffect(() => {
    setTime(getCurrentTime());
  }, []);

  return (
    <div className="flex flex-col">
      <label>Select a time:</label>
      <input type="time" value={time} onChange={handleTimeChange} />
      {isTimeBeforeDate(time, date) && (
        <div className="text-red-500">Time must be in the future</div>
      )}
    </div>
  );
};

export default TimeInput;
