import { useContext, useState } from "react";
import { AppContext } from '../context/AppContext';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './order.css';
const shortid = require('shortid');

export default function Order() {
  const { dishData, cart, dispatch } = useContext(AppContext);
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function handleAddToCart(item) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: item,
    })
    
  };

  console.log(cart)
  
  return (
    <>
      <Header />
      <div className="order">
        <h2>Order Online</h2>
        <div className="order-content">
          <div className="search">
            <input placeholder="search"/>
          </div>
          <h3>Products</h3>
          <div className="menu-items">
            {
              dishData.map(item => {
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
            <h3>Ordered items summary:</h3>
            {/* {
              cart.map(item => {
                return (
                  <div className="order-item" key={item.id}>
                    {item.dishUpper}
                  </div>
                )
              })
            } */}
          </div>
          <div className="order-details">
            <div className="input-group">
              <input value={address} onChange={e => setAddress(e.target.value)}/>
              <label>Delivery Address</label>
            </div>
            <div className="input-group">
              <input value={email} onChange={e => setEmail(e.target.value)}/>
              <label>Email Address</label>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
};
