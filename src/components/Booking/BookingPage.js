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

// In the assignment we were asked to manage states from Main component,
// after few changes I have made to be, as close to best practices as possible,
// I decided to leave props as it is now (passed to BookingForm).
// although I could have maybe pass it all through Context, or manage states directly,
// through the BookingForm component.

export default function BookingPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // full date to match input type date.
  const [time, setTime] = useState('');
  const [occasion, setOccasion] = useState('');
  const [guests, setGuests] = useState('2');
  const { submitForm } = useSubmitForm();
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
 
  return (
    <>
      <Header />
      <div className="reserve">
        <BookingForm
          {...{submitForm, setDate, setFirstName, setLastName, setEmail, setPhone, setTime,
            setOccasion, setGuests, availableTimes, dispatch,
            date, firstName, lastName, email, phone, time, occasion, guests,
          }}
        />
      </div>
    </>
  )
};

export { updateTimes, initializeTimes };