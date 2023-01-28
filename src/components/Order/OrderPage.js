import { useContext, useState } from "react";
import { AppContext } from '../context/AppContext';
import './order.css';
import OrderForm from "./OrderForm";
import useSearch from "./useSearch";
import { Link } from "react-router-dom";
import { addCartSvg, removeCartSvg } from "../../assets/svg";
import { useEffect } from "react";

export default function OrderPage() {
  const { cart, dispatch } = useContext(AppContext);
  const [search, setSearch] = useState('');
  const { handleSearch } = useSearch({ search });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleAddToCart(item) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: item,
    })
  };

  function handleRemoveFromCart(item) {
    dispatch({
      type: 'REMOVE_FROM_CART',
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
      <div className="order">
        <h2>ORDER ONLINE</h2>
        {
          submitted ?
          <div className="submitted">
            <p>Order has been placed!</p>
            <Link to="/" rel="href" aria-label="Go back to Home page">Go Back</Link>
          </div>
          :
          <div className="order-content">
            <div className="search">
              <input
                placeholder="Search menu...e.g pasta"
                value={search}
                onChange={e => setSearch(e.target.value)}/>
            </div>
            <div className="order-items">
              {
                handleSearch().map(item => {
                  return (
                    <div className="order-item" key={item.id}>
                      <img src={require(`../../assets/images/${item.img}`)} alt={item.dishUpper} />
                      <p>{item.dishLower}</p>
                      <p>
                        <span>${item.price}</span>
                        <button aria-label="Remove from cart" onClick={() => handleRemoveFromCart(item.id)}>{removeCartSvg}</button>
                        <button aria-label="Add to cart" onClick={() => handleAddToCart(item)}>{addCartSvg}</button>
                      </p>
                    </div>
                  )
                })
              }
            </div>
            <div className="cart-items">
              {
                cart.length === 0 ?
                <p className="cart-empty">Cart is empty!</p>
                :
                <>
                  {
                    cart.map(item => {
                      return (
                        <div className="cart-item" key={item.id}>
                          <p>
                            <span>- {item.dishLower}</span>
                            <span><b>x{item.quantity}</b></span>
                          </p>
                        </div>
                      )
                    })
                  }
                  <p className="total">Total: ${total}</p>
                </>
              }
            </div>
            <OrderForm onSubmit={onSubmit} />
          </div>
        }
      </div>
      <small className="rights">© All rights reserved to Little Lemon</small>
    </>
  )
};
