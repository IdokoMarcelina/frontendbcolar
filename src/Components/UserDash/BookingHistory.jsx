import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UserDashLayout from "./UserDashLayout";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      artisan: "John Doe",
      description: "Haircut and grooming",
      date: "2025-01-20",
      status: "Pending",
    },
    {
      id: 2,
      artisan: "Jane Smith",
      description: "Plumbing repair",
      date: "2025-01-22",
      status: "Completed",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token"); 

    if (!token) {
      setError("You are not logged in. Please log in to view your bookings.");
      return;
    }

    fetch("https://backend-bcolar.onrender.com/api/service/getUserBookings", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch bookings. Please try again later.");
        }
        return response.json();
      })
      .then((data) => {
        setBookings(Array.isArray(data?.data) ? data.data : []);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
        setError("Error fetching bookings. Please try again later.");
      });
  }, []);

  const cancelBooking = (id) => {
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking.id === id ? { ...booking, status: "Cancelled" } : booking
      )
    );
  };

  const filteredBookings = Array.isArray(bookings)
    ? bookings.filter(
        (booking) =>
          booking.artisan?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          booking.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          booking.status?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  if (error) {
    return (
      <UserDashLayout>
        <Container>
          <ErrorMessage>{error}</ErrorMessage>
        </Container>
      </UserDashLayout>
    );
  }

  return (
    <UserDashLayout>
      <Container>
        <h2>Booking History & Active Appointments</h2>
        <SearchInput
          type="text"
          placeholder="Search bookings..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Table>
          <thead>
            <tr>
              <TableHeader>Artisan Name</TableHeader>
              <TableHeader>Description</TableHeader>
              <TableHeader>Booking Date</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <tr key={booking.id}>
                  <TableCell>{booking.artisan}</TableCell>
                  <TableCell>{booking.description}</TableCell>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell>{booking.status}</TableCell>
                  <TableCell>
                    {booking.status === "Pending" && (
                      <Button onClick={() => cancelBooking(booking.id)} cancel>
                        Cancel Booking
                      </Button>
                    )}
                  </TableCell>
                </tr>
              ))
            ) : (
              <tr>
                <TableCell colSpan="5" style={{ textAlign: "center" }}>
                  No bookings found.
                </TableCell>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </UserDashLayout>
  );
};

const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 95%;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 97%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: ${(props) => (props.cancel ? "#dc3545" : "#28a745")};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
  text-align: center;
`;

export default BookingHistory;
