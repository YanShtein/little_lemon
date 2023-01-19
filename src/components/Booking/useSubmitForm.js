import { useNavigate } from "react-router-dom";
import { submitAPI } from "./bookingAPI";

const useSubmitForm = () => {
  const navigate = useNavigate();
  function submitForm(e, {...formData}) {
    e.preventDefault();
    if (submitAPI(formData)) {
      navigate('/confirmation', {state: {
        formData
      }});
    }
  };

  return { submitForm };
};

export default useSubmitForm;