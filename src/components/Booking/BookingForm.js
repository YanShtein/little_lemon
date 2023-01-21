import { useState } from "react";

export default function BookingForm({ dispatch, availableTimes, submitForm }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // full date to match input type date.
  const [time, setTime] = useState('');
  const [occasion, setOccasion] = useState('');
  const [guests, setGuests] = useState('2');

  function handleDateReducer() {
    dispatch({
      type: 'date',
      payload: new Date(date),
    })
  };

  return (
    <form onSubmit={e => submitForm(e, {formData: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        date: date,
        time: time,
        occasion: occasion,
        guests: guests,
      }
      })}>
      <h2>BOOK A TABLE</h2>
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
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          required
        />
        <label htmlFor="firstName">First Name</label>
      </div>
      <div className="input-group">
        <input
          type='text'
          name="lastName"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          required
        />
        <label>Last Name</label>
      </div>
      <div className="input-group">
        <input
          type='email'
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label>Email</label>
      </div>
      <div className="input-group">
        <input
          type='tel'
          name="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          minLength="1" maxLength="10" pattern="\d[0-9]+"
          required
        />
        <label>Phone Number e.g 123456789</label>
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
      <button type="submit">Confirm booking</button>
    </form>
  )
};
