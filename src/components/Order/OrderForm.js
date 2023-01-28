import { useContext, useState } from "react";
import { validateEmail, validatePhone } from "../Booking/fieldsValidation";
import { AppContext } from "../context/AppContext";


export default function OrderForm({ onSubmit }) {
  const { cart } = useContext(AppContext);
  const [address, setAddress] = useState('');
  const [name, setName] = useState({ val: '', error: false });
  const [email, setEmail] = useState({ val: '', error: false });
  const [phone, setPhone] = useState({ val: '', error: false });

  function handlePhoneBlur() {
    if (validatePhone(phone.val)) {
      setPhone({...phone, error: false})
    } else {
      setPhone({...phone, error: true})
    }
  };

  function handleEmailBlur() {
    if (validateEmail(email.val)) {
      setEmail({...email, error: false})
    } else {
      setEmail({...email, error: true})
    }
  };

  function handleNameBlur() {
    const textRegex = /[a-zA-Z]{3,15}$/;
    if (textRegex.test(name.val)) {
      setName({...name, error: false})
    } else {
      setName({...name, error: true})
    }
  };

  return (
    <div className="order-details">
      <form onSubmit={e => onSubmit(e)}>
        <p>Order details</p>
        <div className="input-group">
          <input
            type='text'
            name="name"
            maxLength="15"
            value={name.val}
            onChange={e => setName({...name, val: e.target.value})}
            onBlur={handleNameBlur}
            required
          />
          <label aria-label="name" htmlFor="name">First Name</label>
          {name.error && <small>Please enter a valid text.</small>}
        </div>
        <div className="input-group">
          <input
            type='tel'
            name="phone"
            value={phone.val}
            onChange={e => setPhone({...email, val: e.target.value})}
            onBlur={handlePhoneBlur}
            minLength="11" maxLength="11"
            required/>
          <label aria-label="phone" htmlFor="phone">Phone Number e.g +0123456789</label>
          {phone.error && 
            <>
              <small>Phone number should start with + or 0.</small>
              <small>Min & Max 10 numbers.</small>
            </>
          }
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
            name="address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            required/>
          <label>Delivery Address</label>
        </div>
        <button aria-label="Submit Order" disabled={cart.length === 0} type="submit">CHECKOUT</button>
      </form>
    </div>  
  )
};
