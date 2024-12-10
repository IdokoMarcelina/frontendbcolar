import React from "react";
import './Time.css'
const TimeSlot = ({ timeSlots, selectedDate }) => {
  return (
    <div className="time-slot">
      <h3>{selectedDate}</h3>
      <div className="time-slots">
        {timeSlots.map((slot, index) => (
          <button key={index} className="time-slot-btn">
            {slot.time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlot;
