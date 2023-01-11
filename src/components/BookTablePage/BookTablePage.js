import '../../assets/shared.css';
import './book.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useState } from 'react';
import TableReserved from './TableReserved';
import PickDate from './PickDate';


export default function BookTablePage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [sitting, setSitting] = useState('');
  const [occasion, setOccasion] = useState('');
  const [people, setPeople] = useState('2');
  const [startDate, setStartDate] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [dateMissing, setDateMissing] = useState(false);

  function checkDate() {
    if (!startDate) {
      setDateMissing(true)
      return false;
    } else {
      setDateMissing(false)
      return true;
    }
  };

  function onSubmit(e) {
    e.preventDefault();
    if (checkDate()) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
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
            sitting={sitting}
            startDate={startDate}
            people={people}
            occasion={occasion}
          /> 
          : 
        <form onSubmit={e => onSubmit(e)}>
          <h2>Reserve a table</h2>
          <label>Outdoor
            <input 
              type="radio" 
              value='Outdoor' 
              onChange={e => setSitting(e.target.value)}  
              name="radio"
              required
            />
          </label>
          <label>Indoor
            <input 
              type="radio" 
              name="radio"
              value='Indoor'
              onChange={e => setSitting(e.target.value)} 
              required
            />
          </label>
          <PickDate startDate={startDate} setStartDate={setStartDate} dateMissing={dateMissing}/>
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
          <select name="occasion" onChange={e => setOccasion(e.target.value)}>
            <option label="" value="">Select an occasion (optional)</option>
            <option label="Birthday" value="Birthday">Birthday</option>
            <option label="Anniversary" value="Anniversary">Anniversary</option>
            <option label="Business" value="Business">Business</option>
          </select>
          <small>*Max 10 people per table</small>
          <select name="people" value={people} onChange={e => setPeople(e.target.value)} required>
            <option value="2">2 People</option>
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3">3 People</option>
            <option value="4">4 People</option>
            <option value="5">5 People</option>
            <option value="6">6 People</option>
            <option value="7">7 People</option>
            <option value="8">8 People</option>
            <option value="9">9 People</option>
            <option value="10">10 People</option>
          </select>
          <button type="submit">Confirm booking</button>
        </form>
        }
      </div>
    </>
  )
};
