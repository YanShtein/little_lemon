import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "./bookingAPI";

const useSubmitForm = () => {
  const [bookingForm, setBookingForm] = useState(null);
  const navigate = useNavigate();

  function submitForm(e, {formData}) {
    e.preventDefault();
    if (submitAPI(formData)) {
      setBookingForm({...formData})
    }
  };

  const { date, time, reserveNumber } = {...bookingForm};

  useEffect(() => {
    if (bookingForm) {
      localStorage.setItem('Little_Lemon-Table', JSON.stringify({'date': date, 'time': time, 'reservation': reserveNumber}));
      navigate('/confirmation', {state: {
        ...bookingForm
      }});
    }
  });

  return { submitForm };
};

export default useSubmitForm;