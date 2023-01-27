import { useReducer } from "react";
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
  const { submitForm } = useSubmitForm();
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <Header />
      <div className="reserve">
        <BookingForm
          {...{
            submitForm,
            availableTimes,
            dispatch,
          }}
        />
        <iframe
          style={{border: 'none', maxWidth: '80%', margin: '30px auto'}} 
          title="Google Maps"
          width="600"
          height="450"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="http://maps.google.com/maps?q=41.880378,-87.842680&z=16&output=embed">
        </iframe>
      </div>
      <small className="rights">© All rights reserved to Little Lemon</small>
    </>
  )
};

export { updateTimes, initializeTimes, useSubmitForm };