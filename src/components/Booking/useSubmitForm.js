import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "./bookingAPI";

const useSubmitForm = ({...bookingForm}) => {
  const [valid, setValid] = useState(false);
  const navigate = useNavigate();

  function submitForm(e, {...formData}) {
    e.preventDefault();
    if (submitAPI(formData)) {
      setValid(true);
    }
  };

  useEffect(() => {
    if (valid) {
      localStorage.setItem('TableReservation', JSON.stringify(bookingForm.date, bookingForm.time));
      navigate('/confirmation', {state: {
        ...bookingForm
      }});
    }
  }, [valid]);

  return { submitForm };
};

export default useSubmitForm;