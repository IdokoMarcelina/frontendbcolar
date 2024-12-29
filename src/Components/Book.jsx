import {useState} from 'react'
import './Time.css'
import TimeSlot from './TimeSlot';
import DatePicker from './DatePicker';
const Book = () => {
    const [selectedDate, setSelectedDate] = useState("3rd September, 2018");
    const [timeSlots, setTimeSlots] = useState([
      { time: "9:30am", period: "Morning" },
      { time: "11:00am", period: "Morning" },
      { time: "1:00pm", period: "Afternoon" },
      { time: "2:30pm", period: "Afternoon" },
    ]);
  return (
    <div className="app-container">
         <h2>Select a time</h2>
      <div className="calendar-timeslot-container">
        <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        <TimeSlot timeSlots={timeSlots} selectedDate={selectedDate} />
      </div>
    </div>
  )
}

export default Book