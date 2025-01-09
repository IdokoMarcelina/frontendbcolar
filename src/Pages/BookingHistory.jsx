import { useState } from "react";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      service: "Haircut",
      artisan: "John Doe",
      date: "2024-12-10",
      status: "Completed",
    },
    {
      id: 2,
      service: "Plumbing Repair",
      artisan: "Jane Smith",
      date: "2024-12-12",
      status: "Pending",
    },
  ]);

  const [artisans, setArtisans] = useState([
    "John Doe",
    "Jane Smith",
    "Chris Brown",
    "Sarah Johnson",
  ]);

  const [searchTerm, setSearchTerm] = useState("");


  const addArtisan = (newArtisan) => {
    if (newArtisan && !artisans.includes(newArtisan)) {
      setArtisans((prev) => [...prev, newArtisan]);
    }
  };


  const addBooking = (newBooking) => {
    setBookings((prev) => [
      ...prev,
      { ...newBooking, id: prev.length + 1, status: "Pending" },
    ]);
  };


  const filteredBookings = bookings.filter(
    (booking) =>
      booking.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.artisan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Booking History & Active Appointments</h2>




      <input
        type="text"
        placeholder="Search bookings..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          marginBottom: "20px",
          padding: "10px",
          width: "95%",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />


      <table style={{ width: "97%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>
              Service
            </th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>
              Artisan
            </th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Date</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>
              Status
            </th>

          </tr>
        </thead>
        <tbody>
          {filteredBookings.map((booking) => (
            <tr key={booking.id}>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                {booking.service}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                {booking.artisan}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                {booking.date}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                {booking.status}
              </td>

            </tr>
          ))}
        </tbody>
      </table>


      <div style={{ marginTop: "20px" }}>
        <h3>Add New Artisan</h3>
        <input
          type="text"
          id="new-artisan"
          placeholder="Enter artisan name"
          style={{ padding: "5px", marginRight: "10px" }}
        />
        <button
          onClick={() =>
            addArtisan(document.getElementById("new-artisan").value)
          }
          style={{
            padding: "5px 10px",
            backgroundColor: "#2a56c6",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Artisan
        </button>
      </div>


      <div style={{ marginTop: "20px" }}>
        <h3>Add New Booking</h3>
        <input
          type="text"
          id="new-service"
          placeholder="Enter service"
          style={{ padding: "5px", marginRight: "10px" }}
        />
        <input
          type="date"
          id="new-date"
          style={{ padding: "5px", marginRight: "10px" }}
        />
        <button
          onClick={() =>
            addBooking({
              service: document.getElementById("new-service").value,
              date: document.getElementById("new-date").value,
              artisan: "",
            })
          }
          style={{
            padding: "5px 10px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Booking
        </button>
      </div>
    </div>
  );
};

export default BookingHistory;
