import React from "react";
import './Time.css'
const DatePicker = ({ selectedDate, setSelectedDate }) => {
  const months = ["September 2018"];
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="date-picker">
      <div className="month-selector">
        <button>{"<"}</button>
        <span>{months[0]}</span>
        <button>{">"}</button>
      </div>
      <div className="calendar">
        {days.map((day) => (
          <button
            key={day}
            className={`day ${day === 3 ? "selected" : ""}`}
            onClick={() => setSelectedDate(`${day}rd September, 2018`)}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DatePicker;
