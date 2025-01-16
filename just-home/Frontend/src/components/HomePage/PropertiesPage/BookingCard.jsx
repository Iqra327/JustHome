import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingCard = ({ className }) => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);

  const nightlyRate = 5900;
  const unavailableDates = [
    new Date(2025, 0, 25), 
    new Date(2025, 1, 5), 
  ];

  const calculateNights = () => {
    if (checkInDate && checkOutDate) {
      const diffTime = Math.abs(checkOutDate - checkInDate);
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const isDateUnavailable = (date) =>
    unavailableDates.some(
      (unavailableDate) =>
        date.getFullYear() === unavailableDate.getFullYear() &&
        date.getMonth() === unavailableDate.getMonth() &&
        date.getDate() === unavailableDate.getDate()
    );

  const nights = calculateNights();
  const totalPrice = nights * nightlyRate;

  return (
    <div className={`max-w-xl mx-auto p-8 border rounded-lg shadow-lg relative ${className}`}>
      <h3 className="text-lg font-bold">
        <span className="line-through text-gray-400">7,000 PKR</span> {nightlyRate} PKR{" "}
        <span className="text-sm font-normal">per night</span>
      </h3>

      {/* Check-In and Check-Out */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div>
          <label className="text-sm font-medium">Check-In</label>
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            selectsStart
            startDate={checkInDate}
            endDate={checkOutDate}
            minDate={new Date()}
            excludeDates={unavailableDates}
            placeholderText="Select Check-In"
            className="mt-1 w-full border rounded px-3 py-2 text-left"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Check-Out</label>
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            selectsEnd
            startDate={checkInDate}
            endDate={checkOutDate}
            minDate={checkInDate || new Date()}
            excludeDates={unavailableDates}
            placeholderText="Select Check-Out"
            className="mt-1 w-full border rounded px-3 py-2 text-left"
          />
        </div>
      </div>

      {/* Guests */}
      <div className="mt-4">
        <label className="text-sm font-medium">Guests</label>
        <select
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="mt-1 w-full border rounded px-3 py-2"
        >
          <option value={1}>1 guest</option>
          <option value={2}>2 guests</option>
          <option value={3}>3 guests</option>
          <option value={4}>4 guests</option>
        </select>
      </div>

      {/* Reserve Button */}
      <button className="mt-6 w-full bg-orange-500 text-white font-medium py-2 rounded hover:bg-orange-600">
        Reserve
      </button>
      <p className="mt-4 text-gray-500 text-sm text-center">
        You won't be charged yet
      </p>

      {/* Price part */}
      <div className="mt-4">
        <div className="flex justify-between">
          <span>{nightlyRate} PKR x {nights} nights</span>
          <span>{totalPrice} PKR</span>
        </div>
        <div className="flex justify-between text-green-600">
          <span>Weekly stay discount</span>
          <span>-{Math.floor(totalPrice * 0.1)} PKR</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes</span>
          <span>{Math.floor(totalPrice * 0.2)} PKR</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>
            {totalPrice - Math.floor(totalPrice * 0.1) + Math.floor(totalPrice * 0.2)} PKR
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
