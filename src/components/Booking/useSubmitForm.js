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

  useEffect(() => {
    if (bookingForm) {
      localStorage.setItem('TableReservation', JSON.stringify(bookingForm.date, bookingForm.time));
      navigate('/confirmation', {state: {
        ...bookingForm
      }});
    }
  }, [bookingForm]);

  return { submitForm };
};

export default useSubmitForm;