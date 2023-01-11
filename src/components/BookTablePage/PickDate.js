import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PickDate = ({ startDate, setStartDate, dateMissing }) => {

  let checkdate = dateMissing ? 'error' : null;

  const SelectDateError = () => {
    return (
      <small style={{color: 'red', textAlign: 'center'}}>Choose a date</small>
    )
  };

  return (
    <div className={`reserve-date ${checkdate}`}>
      {dateMissing ? <SelectDateError /> : null}
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={90}
        timeCaption="time"
        dateFormat="MMMM d yyyy | h:mm aa"
        inline
      />
    </div>
  );
};

export default PickDate;