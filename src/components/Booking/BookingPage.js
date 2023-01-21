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
      </div>
    </>
  )
};

export { updateTimes, initializeTimes };