import { useContext, useState } from "react";
import { AppContext } from '../context/AppContext';
import Header from "../Header/Header";
import './order.css';

export default function Order() {
  const { dishData, cart, dispatch } = useContext(AppContext);
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [search, setSearch] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSearch() {
    let filteredItems = dishData.filter(item => {
      if (search === '') {
        return item;
      } else {
        return (
          item.dishUpper.toLowerCase().includes(search.toLowerCase())
        )
      }
    });

    return filteredItems;
  };

  function handleAddToCart(item) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: item,
    })
  };

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  };

  let total = cart.map(item => item.price * item.quantity)
  .reduce((acc, value) => acc + value, 0).toFixed(2);

  return (
    <>
      <Header />
      <div className="order">
        <h2>Order Online</h2>
        {
          submitted ? 
          <div className="submitted">
            <p>Order has been placed!</p>
            <button><a href="/order">Go Back</a></button>
          </div>
          :
          <div className="order-content">
            <div className="search">
              <input 
                placeholder="Search menu...e.g pasta" 
                value={search} 
                onChange={e => setSearch(e.target.value)}/>
            </div>
            <div className="menu-items">
              {
                handleSearch().map(item => {
                  return (
                    <div className="menu-item" key={item.id}>
                      <button onClick={() => handleAddToCart(item)}>+</button>
                      <img src={require(`../../assets/images/${item.img}`)} alt={item.dishUpper} />
                      <p>{item.dishUpper}</p>
                      <p>${item.price}</p>
                    </div>
                  )
                })
              }
            </div>
            <div className="order-items">
              {
                cart.map(item => {
                  return (
                    <div className="order-item" key={item.id}>
                      <p>- {item.dishLower}</p>
                      <p><b> x{item.quantity}</b></p>
                    </div>
                  )
                })
              }
              <p className="total">Total: ${total}</p>  
            </div>
            <div className="order-details">
              <form onSubmit={e => onSubmit(e)}>
                <h3>Order details</h3>
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
            </div>

          </div>
        }   
      </div>
    </>
  )
};
