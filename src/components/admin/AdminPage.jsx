import React from "react";
import { StyledMessage, StyledUnauthorized } from "./AdminStyles";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { BOOKING_URL, MSG_URL } from "../../utils/api";
import { useState } from "react";
import axios from "axios";
import { set } from "react-hook-form";
import { HotelForm } from "../forms/Forms";

export const MessageAdmin = () => {
  const { data, loading, error } = useFetch(MSG_URL);

  const deleteMessage = (id) => {
    axios.delete(MSG_URL + "/" + id);
  };

  return (
    <>
      <StyledMessage>
        {data.length > 0
          ? data.map((message, idx) => {
              return (
                <div key={idx} className="card">
                  <h4>Name: </h4>
                  <p>{message.attributes.name}</p>
                  <h4>Email:</h4>
                  <p>{message.attributes.email}</p>
                  <h4>Subject:</h4>
                  <p>{message.attributes.subject}</p>
                  <h4>Message:</h4>
                  <p>{message.attributes.message}</p>
                  <h4>Message date:</h4>
                  <p>{message.attributes.createdAt.substring(0, 10)}</p>
                  <button
                    onClick={() => {
                      deleteMessage(message.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })
          : "No messages"}
      </StyledMessage>
    </>
  );
};

export const BookingAdmin = () => {
  const { data, loading, error } = useFetch(BOOKING_URL);

  const deleteBooking = (id) => {
    axios.delete(BOOKING_URL + "/" + id);
  };

  return (
    <>
      <StyledMessage>
        {data.length > 0
          ? data.map((booking, idx) => {
              return (
                <div key={idx} className="card">
                  <h4>Name: </h4>
                  <p>{booking.attributes.name}</p>
                  <h4>Email:</h4>
                  <p>{booking.attributes.email}</p>
                  <h4>Hotel: </h4>
                  <p>{booking.attributes.hotel_name}</p>
                  <h4>Room: </h4>
                  <p>{booking.attributes.room}</p>
                  <h4>Check in date: </h4>
                  <p>{booking.attributes.checkin}</p>
                  <h4>Check out date: </h4>
                  <p>{booking.attributes.checkout}</p>
                  <h4>Time of booking: </h4>
                  <p>{booking.attributes.createdAt.substring(0, 10)}</p>
                  <button
                    onClick={() => {
                      deleteBooking(booking.id);
                      setTimeout(() => {}, 1000);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })
          : "No bookings"}
      </StyledMessage>
    </>
  );
};

export const AdminPage = () => {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <h1>Welcome Admin!</h1>
      <div>
        <button onClick={() => setCurrent(0)}>Messages</button>
        <button onClick={() => setCurrent(1)}>Bookings</button>
      </div>
      {current === 0 && <MessageAdmin />}
      {current === 1 && <BookingAdmin />}
      <HotelForm />
    </>
  );
};

export const Unauthorized = () => {
  return (
    <>
      <StyledUnauthorized>
        <h1>Unauthorized access!</h1>
        <p>Please login or return to home:</p>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
      </StyledUnauthorized>
    </>
  );
};
