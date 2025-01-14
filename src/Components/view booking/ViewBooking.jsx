import React, { useState } from "react";
import './ViewBooking.css'
const ViewBooking = () => {

    const [showOptions, setShowOptions] = useState(null);

  const appointments = [
    {
      id: 1,
      date: "July 12",
      day: "Wed",
      time: "5:00 PM",
      type: "Straightening",
      for: "Sachin",
    },
    {
      id: 2,
      date: "July 19",
      day: "Wed",
      time: "4:00 PM",
      type: "Loosening",
      for: "Prashant",
    },
  ];
  return (
    <div>
     <div className="Apps">
      <header className="Header">
        <h1>My Appointments</h1>
        <div className="tabs">
          <span className="tab active">Upcoming</span>
          <span className="tab">Past</span>
        </div>
      </header>

      <div className="appointments">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="appointment-card">
            <div className="date">
              <h2>{appointment.date.split(" ")[1]}</h2>
              <p>{appointment.day}</p>
            </div>
            <div className="details">
              <p><strong>Timing:</strong> {appointment.time}</p>
              <p><strong>Appointment Type:</strong> {appointment.type}</p>
              <p><strong>For:</strong> {appointment.for}</p>
            </div>
            <button
              className="options-btn"
              onClick={() =>
                setShowOptions(showOptions === appointment.id ? null : appointment.id)
              }
            >
              Options
            </button>
            {showOptions === appointment.id && (
              <div className="dropdown">
                <button>Edit Appointment</button>
                <button>Cancel Appointment</button>
                <button>Add to Calendar</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default ViewBooking