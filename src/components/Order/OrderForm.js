import { useState } from "react";

export default function OrderForm({ onSubmit }) {
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <form onSubmit={e => onSubmit(e)}>
      <p>Order details</p>
      <div className="input-group">
        <input value={name} onChange={e => setName(e.target.value)} required/>
        <label>Name</label>
      </div>
      <div className="input-group">
        <input
          type='tel'
          minLength="1" maxLength="10" pattern="\d[0-9]+"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required/>
        <label>Phone Number e.g 123456789</label>
      </div>
      <div className="input-group">
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          required/>
        <label>Email Address</label>
      </div>
      <div className="input-group">
        <input
          value={address}
          onChange={e => setAddress(e.target.value)}
          required/>
        <label>Delivery Address</label>
      </div>
      <button type="submit">CHECKOUT</button>
    </form>
  )
};
