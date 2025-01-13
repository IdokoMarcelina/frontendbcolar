import {useState} from 'react'
import './Time.css'
import TimeSlot from './TimeSlot';
import DatePicker from './DatePicker';
const Book = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [timeSlots, setTimeSlots] = useState([
      { time: "9:30am", period: "Morning" },
      { time: "11:00am", period: "Morning" },
      { time: "1:00pm", period: "Afternoon" },
      { time: "2:30pm", period: "Afternoon" },
    ]);
   
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
    const handleSubmt = () => {
      console.log("Selected Date:", selectedDate);
      console.log("Selected Time Slot:", selectedTimeSlot);
      alert(`Booked for ${selectedDate} at ${selectedTimeSlot}`);
    };

    const handleSubmit = async () => {
      const url = " https://backend-bcolar.onrender.com/api/service/bookservice"; // Replace with your backend endpoint
      const payload = {
        date: selectedDate,
        timeSlot: selectedTimeSlot,
      };
  
      try {
        const response = await axios.post(url, payload, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Response from server:", response.data);
        alert("Time slot booked successfully!");
      } catch (error) {
        console.error("Error booking time slot:", error);
        alert("Failed to book the time slot. Please try again.");
      }
    };

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