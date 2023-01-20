import { useReducer, useState } from "react";
import Header from "../Header/Header";
import BookingForm from "./BookingForm";
import { fetchAPI } from "./bookingAPI";
import '../../assets/shared.css';
import './book.css';
import useSubmitForm from "./useSubmitForm";

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
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // full date to match input type date.
  const [time, setTime] = useState('');
  const [occasion, setOccasion] = useState('');
  const [guests, setGuests] = useState('2');
  const { submitForm } = useSubmitForm({
    date, firstName, lastName, email, phone, time, occasion, guests
  });
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <Header />
      <div className="reserve">
        <BookingForm
          {...{
            submitForm,
            setDate,
            setFirstName,
            setLastName,
            setEmail,
            setPhone,
            setTime,
            setOccasion,
            setGuests,
            availableTimes,
            dispatch,
            date
          }}
        />
      </div>
    </>
  )
};

export { updateTimes, initializeTimes };