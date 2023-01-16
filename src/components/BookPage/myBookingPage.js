import '../../assets/shared.css';
import './book.css';
import Header from '../Header/Header';
import { useState } from 'react';
import TableReserved from './TableReserved';

export default function BookingPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState('');
  const [occasion, setOccasion] = useState('');
  const [guests, setGuests] = useState('2');
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  };

  function availableTime() {
    let timeArr = [
      '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
      '20:00', '21:00', '22:00'
    ];
    switch ((date.split('-')[2])) {
      case '01': case '03': case '05': case '07': case '09': case '11': case '13':
      case '15': case '17': case '19': case '21': case '23': case '25':
        return [timeArr[0], timeArr[2], timeArr[4], timeArr[6]];
      case '02': case '04': case '06': case '08': case '10': case '12': case '14':
      case '16': case '18': case '20': case '22': case '24': case '26': case '28':
        return [timeArr[1], timeArr[3], timeArr[2], timeArr[5], timeArr[7]];
      case '27': case '29': case '30': case '31':
        return [timeArr[2], timeArr[5], timeArr[8]];
      default:
        return;
    };
  };

  return (
    <>
      <Header />
      <div className="reserve">
        {
          submitted ?
          <TableReserved
            firstName={firstName}
            lastName={lastName}
            phone={phone}
            guests={guests}
            occasion={occasion}
            date={date}
            time={time}
            email={email}
          />
          :
        <form onSubmit={e => onSubmit(e)}>
          <h2>Book A table</h2>
          <p>Choose date and time:</p>
          <div className='date-time'>
            <input
              type="date"
              id="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              min="2023-01-15" max="2023-02-28"
              required/>
            <select name="time" onChange={e => setTime(e.target.value)} required>
              <option label="Select time" value="">Select time</option>
              {
                availableTime().map(time => {
                  return (
                    <option value={time} key={time}>{time}</option>
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
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
            />
            <label>First Name</label>
          </div>
          <div className="input-group">
            <input
              type='text'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
            />
            <label>Last Name</label>
          </div>
          <div className="input-group">
            <input
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <label>Email</label>
          </div>
          <div className="input-group">
            <input
              type='tel'
              value={phone}
              onChange={e => setPhone(e.target.value)}
              minLength="1" maxLength="10" pattern="\d[0-9]+"
              required
            />
            <label>Phone Number e.g 123456789</label>
          </div>
          <select placeholder='Select an occasion' style={{width: '280px'}} name="occasion" onChange={e => setOccasion(e.target.value)}>
            <option label="Select an occasion (optional)" value="">Select an occasion (optional)</option>
            <option label="Birthday" value="Birthday">Birthday</option>
            <option label="Anniversary" value="Anniversary">Anniversary</option>
            <option label="Business" value="Business">Business</option>
          </select>
          <button type="submit">Confirm booking</button>
        </form>
        }
      </div>
    </>
  )
};
