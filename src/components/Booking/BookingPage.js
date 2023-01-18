import { useReducer, useState } from "react";
import Header from "../Header/Header";
import BookingForm from "./BookingForm";
import Confirmation from "./Confirmation";
import '../../assets/shared.css';
import './book.css';

export default function BookingPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState('');
  const [occasion, setOccasion] = useState('');
  const [guests, setGuests] = useState('2');
  const [submitted, setSubmitted] = useState(false);

  const initializeTimes = [
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
    '20:00', '21:00', '22:00',
  ];

  const updateTimes = (availableTimes, action) => {
    switch (action.type) {
      case '01': case '03': case '05': case '07': case '09': case '11': case '13':
      case '15': case '17': case '19': case '21': case '23': case '25':
        return ['12:00', '14:00','16:00', '18:00'];
      case '02': case '04': case '06': case '08': case '10': case '12': case '14':
      case '16': case '18': case '20': case '22': case '24': case '26': case '28':
        return ['13:00', '15:00', '17:00', '18:00', '21:00'];
      case '27': case '29': case '30': case '31':
        return ['14:00', '17:00', '20:00', '22:00'];
      default:
        return;
    };
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

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