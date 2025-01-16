import React, { useState } from "react";
import './Time.css'
const DatePicker = ({ selectedDate, setSelectedDate }) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the number of days in the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Generate days array
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11); // Go to December
      setCurrentYear(currentYear - 1); // Decrement year
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0); // Go to January
      setCurrentYear(currentYear + 1); // Increment year
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };


  return (
    <div className="date-picker">
    <div className="month-selector">
      <button onClick={handlePreviousMonth}>{"<"}</button>
      <span>
        {months[currentMonth]} {currentYear}
      </span>
      <button onClick={handleNextMonth}>{">"}</button>
    </div>
    <div className="calendar">
      {days.map((day) => (
        <button
          key={day}
          className={`day ${
            selectedDate === `${day} ${months[currentMonth]} ${currentYear}`
              ? "selected"
              : ""
          }`}
          onClick={() =>
            setSelectedDate(`${day} ${months[currentMonth]} ${currentYear}`)
          }
        >
          {day}
        </button>
      ))}
    </div>
  </div>
  );
};

export default DatePicker;
