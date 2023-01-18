import { useReducer, useState } from "react";
import Header from "../Header/Header";
import BookingForm from "./BookingForm";
import Confirmation from "./Confirmation";
import { fetchAPI } from "./bookingAPI";
import '../../assets/shared.css';
import './book.css';

function initializeTimes() {
  let today = new Date();
  return fetchAPI(today);
};

const updateTimes = (availableTimes, action) => {
  switch (action.type) {
    case 'date':
      return fetchAPI(action.payload);
    default:
      return;
  };
};

export default function BookingPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // full date to match input type date.
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState('');
  const [occasion, setOccasion] = useState('');
  const [guests, setGuests] = useState('2');
  const [submitted, setSubmitted] = useState(false);
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <div className="reserve">
        {
          submitted ?
          <Confirmation
          {...{
            firstName,
            lastName,
            phone,
            guests,
            occasion,
            email,
            date,
            time,
          }}
          />
          :
          <BookingForm
            {...{
              onSubmit,
              setDate,
              date,
              setFirstName,
              setLastName,
              setEmail,
              setPhone,
              availableTimes,
              setTime,
              setOccasion,
              setGuests,
              dispatch,
            }}
          />
        }
      </div>
    </>
  )
};

export { updateTimes, initializeTimes };