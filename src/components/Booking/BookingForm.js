import { useState } from "react";
import { validateEmail, validatePhone } from "./fieldsValidation";

export default function BookingForm({ dispatch, availableTimes, submitForm }) {
  const [firstName, setFirstName] = useState({ val: '', error: false });
  const [lastName, setLastName] = useState({ val: '', error: false });
  const [email, setEmail] = useState({ val: '', error: false });
  const [phone, setPhone] = useState({ val: '', error: false });
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // full date to match input type date.
  const [time, setTime] = useState('');
  const [occasion, setOccasion] = useState('');
  const [guests, setGuests] = useState('2');

  const disableBtn = phone.error || email.error || firstName.error || lastName.error;

  function handleDateReducer() {
    dispatch({
      type: 'date',
      payload: new Date(date),
    })
  };

  function handleEmailBlur() {
    if (validateEmail(email.val)) {
      setEmail({...email, error: false})
    } else {
      setEmail({...email, error: true})
    }
  };

  function handlePhoneBlur() {
    if (validatePhone(phone.val)) {
      setPhone({...phone, error: false})
    } else {
      setPhone({...phone, error: true})
    }
  };

  function handleFirstNameBlur() {
    const textRegex = /[a-zA-Z]{3,15}$/;
    if (textRegex.test(firstName.val)) {
      setFirstName({...firstName, error: false})
    } else {
      setFirstName({...firstName, error: true})
    }
  };

  function handleLastNameBlur() {
    const textRegex = /[a-zA-Z]{3,15}/;
    if (textRegex.test(lastName.val)) {
      setLastName({...lastName, error: false})
    } else {
      setLastName({...lastName, error: true})
    }
  };

  return (
    <form onSubmit={e => submitForm(e, {formData: {
        firstName: firstName.val,
        lastName: lastName.val,
        email: email.val,
        phone: phone.val,
        date: date,
        time: time,
        occasion: occasion,
        guests: guests,
        reserveNumber: Math.floor(Math.random() * 1000),
      }
      })}>
      <h2>RESERVATION ONLINE</h2>
      <p>Choose date and time:</p>
      <div className='date-time'>
        <input
          type="date"
          id="date"
          value={date}
          onChange={e => {
            setDate(e.target.value);
            handleDateReducer();
          }}
          min="2023-01-15" max="2023-02-28"
          required/>
        <select name="time" value={time} onChange={e => setTime(e.target.value)} required>
          <option label="Select time" value="">Select time</option>
          {
            availableTimes.map(item => {
              return (
                <option value={item} key={item}>{item}</option>
              )
            })
          }
        </select>
      </div>
      <small>*Max 10 guests per table</small>
      <select name="guests" value={guests} onChange={e => setGuests(e.target.value)} required>
        <option value="12:00">2 guests</option>
        <option value="1">1 Person</option>
        <option value="2">2 guests</option>
        <option value="3">3 guests</option>
        <option value="4">4 guests</option>
        <option value="5">5 guests</option>
        <option value="6">6 guests</option>
        <option value="7">7 guests</option>
        <option value="8">8 guests</option>
        <option value="9">9 guests</option>
        <option value="10">10 guests</option>
      </select>
      <div className="input-group">
        <input
          type='text'
          name="firstName"
          maxLength="15"
          value={firstName.val}
          onChange={e => setFirstName({...firstName, val: e.target.value})}
          onBlur={handleFirstNameBlur}
          required
        />
        <label aria-label="firstName" htmlFor="firstName">First Name</label>
        {firstName.error && <small>Please enter a valid text.</small>}
      </div>
      <div className="input-group">
        <input
          type='text'
          name="lastName"
          value={lastName.val}
          maxLength="15"
          onChange={e => setLastName({...lastName, val: e.target.value})}
          onBlur={handleLastNameBlur}
          required
        />
        <label aria-label="lastName" htmlFor="lastName">Last Name</label>
        {lastName.error && <small>Please enter a valid text.</small>}
      </div>
      <div className="input-group">
        <input
          type='email'
          name="email"
          value={email.val}
          onChange={e => setEmail({...email, val: e.target.value})}
          onBlur={handleEmailBlur}
          required
        />
        <label aria-label="email" htmlFor="email">Email</label>
        {email.error && <small>Please enter a valid email address.</small>}
      </div>
      <div className="input-group">
        <input
          type='tel'
          name="phone"
          value={phone.val}
          onChange={e => setPhone({...email, val: e.target.value})}
          onBlur={handlePhoneBlur}
          minLength="11" maxLength="11"
          required
        />
        <label aria-label="phone" htmlFor="phone">Phone Number e.g +0123456789</label>
        {phone.error && 
          <>
            <small>Phone number should start with + or 0.</small>
            <small>Min & Max 10 numbers.</small>
          </>
        }
      </div>
      <select
        placeholder='Select an occasion'
        style={{width: '280px'}}
        name="occasion"
        value={occasion}
        onChange={e => setOccasion(e.target.value)}>
        <option label="Select an occasion (optional)" value="">Select an occasion (optional)</option>
        <option label="Birthday" value="Birthday">Birthday</option>
        <option label="Anniversary" value="Anniversary">Anniversary</option>
        <option label="Business" value="Business">Business</option>
      </select>
      <button aria-label="On Click confirm booking details" disabled={disableBtn} type="submit">Confirm booking</button>
    </form>
  )
};
