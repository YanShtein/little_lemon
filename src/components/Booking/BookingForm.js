export default function BookingForm({
  onSubmit,
  setDate,
  setTime,
  setGuests,
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setOccasion,
  date,
  availableTimes,
  dispatch
}) {

  function handleDateReducer() {
    dispatch({
      type: 'date',
      payload: new Date(date),
    })
  };

  return (
    <form onSubmit={e => onSubmit(e)}>
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
        <select name="time" onChange={e => setTime(e.target.value)} required>
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
      <select name="guests" onChange={e => setGuests(e.target.value)} required>
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
          placeholder="Enter First Name"
          onChange={e => setFirstName(e.target.value)}
          required
        />
        <label htmlFor="firstName">First Name</label>
      </div>
      <div className="input-group">
        <input
          type='text'
          placeholder="Enter Last Name"
          onChange={e => setLastName(e.target.value)}
          required
        />
        <label>Last Name</label>
      </div>
      <div className="input-group">
        <input
          type='email'
          placeholder="Enter Email"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label>Email</label>
      </div>
      <div className="input-group">
        <input
          type='tel'
          placeholder="Enter Phone number"
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
