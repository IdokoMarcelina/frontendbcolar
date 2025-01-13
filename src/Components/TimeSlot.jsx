import React, { useState } from "react";
import './Time.css'
const TimeSlot = ({ timeSlots, selectedDate, onTimeSlotSelect }) => {

  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot.time);
    onTimeSlotSelect(slot.time); 
  };

  return (
    <div className="time-slot">
    <h3>{selectedDate || "Select a Date"}</h3>
    <div className="time-slots">
      {timeSlots.map((slot, index) => (
        <button
          key={index}
          className={`time-slot-btn ${selectedSlot === slot.time ? "selected" : ""}`}
          onClick={() => handleSlotClick(slot)}
          disabled={!selectedDate} 
        >
          {slot.time} ({slot.period})
        </button>
      ))}
    </div>
  </div>
  );
};

export default TimeSlot;
