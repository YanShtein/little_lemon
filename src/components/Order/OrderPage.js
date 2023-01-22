import { useContext, useState } from "react";
import { AppContext } from '../context/AppContext';
import Header from "../Header/Header";
import './order.css';
import OrderForm from "./OrderForm";
import useSearch from "./useSearch";

export default function OrderPage() {
  const { cart, dispatch } = useContext(AppContext);
  const [search, setSearch] = useState('');
  const { handleSearch } = useSearch({ search });
  const [submitted, setSubmitted] = useState(false);

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
        <h2>ORDER ONLINE</h2>
        {
          submitted ?
          <div className="submitted">
            <p>Order has been placed!</p>
            <button aria-label="On Click go back to order page"><a href="/order">Go Back</a></button>
          </div>
          :
          <div className="order-content">
            <div className="search">
              <input
                placeholder="Search menu...e.g pasta"
                value={search}
                onChange={e => setSearch(e.target.value)}/>
            </div>
            <div className="search-menu">
              {
                handleSearch().map(item => {
                  return (
                    <div className="search-item" key={item.id}>
                      <button aria-label="Add to cart" onClick={() => handleAddToCart(item)}>+</button>
                      <img src={require(`../../assets/images/${item.img}`)} alt={item.dishUpper} />
                      <p>{item.dishLower}</p>
                      <p>${item.price}</p>
                    </div>
                  )
                })
              }
            </div>
            <div className="order-items">
              {
                cart.length === 0 ?
                <p className="cart-empty">Cart is empty!</p>
                :
                <>
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
                </>
              }
            </div>
            <div className="order-details">
              <OrderForm onSubmit={onSubmit} />
            </div>
          </div>
        }
      </div>
    </>
  )
};
