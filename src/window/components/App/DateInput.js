import React, { useState, useContext } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import AppContext from "../../context/app";

const DateInput = () => {
  const { date, setDate } = useContext(AppContext);
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    setDate(newValue.startDate)
    setValue(newValue);
  };
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  return (
    <div className="flex flex-col">
      <label className="">
        Date Due <span className="text-red-500">*</span>
      </label>

      <Datepicker
        inputClassName="p-2.5 w-full text-sm text-title bg-gray-50 rounded-lg border border-gray-300 focus:ring-title focus:border-title selection:bg-green-600"
        minDate={yesterday}
        maxDate={new Date("2100-01-30")}
        useRange={false}
        asSingle={true}
        value={value}
        onChange={handleValueChange}
      />
    </div>
  );
};

export default DateInput;
