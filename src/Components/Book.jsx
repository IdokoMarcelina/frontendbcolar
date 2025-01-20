import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './Time.css';
import axios from 'axios';
import TimeSlot from './TimeSlot';
import DatePicker from './DatePicker';

const Book = () => {
  const { artisanId } = useParams(); 
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlots] = useState([
    { time: '9:30am', period: 'Morning' },
    { time: '11:00am', period: 'Morning' },
    { time: '1:00pm', period: 'Afternoon' },
    { time: '2:30pm', period: 'Afternoon' },
  ]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You must be logged in to book a service!');
      return;
    }

    const url = 'https://backend-bcolar.onrender.com/api/service/bookservice';

    const bookingDate = `${selectedDate} ${selectedTimeSlot}`;

    const payload = {
      artisanId, 
      description,
      bookingDate,
    };

    try {
      const response = await axios.post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      console.log('Response from server:', response.data);
      alert('Time slot booked successfully!');
    } catch (error) {
      console.error('Error booking time slot:', error);
      if (error.response) {
        console.log('Backend error:', error.response.data);
        alert(`Error: ${error.response.data.message || 'Failed to book the time slot. Please try again.'}`);
      } else {
        alert('Failed to book the time slot. Please try again.');
      }
    }
  };

  return (
    <div className="app-container">
      <h2>Select a Date and Time Slot</h2>
      <DatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <TimeSlot
        timeSlots={timeSlots}
        selectedDate={selectedDate}
        onTimeSlotSelect={setSelectedTimeSlot} 
      />
      <textarea
        placeholder="Enter a brief description of the booking"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
        style={{ width: '100%', marginTop: '10px' }}
      />
      <button
        onClick={handleSubmit}
        disabled={!selectedDate || !selectedTimeSlot || !description}
        style={{
          marginTop: '10px',
          backgroundColor:
            !selectedDate || !selectedTimeSlot || !description ? '#ccc' : '#007bff',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          cursor: !selectedDate || !selectedTimeSlot || !description ? 'not-allowed' : 'pointer',
        }}
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default Book;
