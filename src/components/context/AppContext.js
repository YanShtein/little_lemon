import { createContext, useReducer } from "react";
import initialState from "./initialState";

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const inCart = state.cart.find(item => item.id === action.payload.id);
      if (inCart) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item
          )
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, {...action.payload, quantity: 1}]
        }
      };
    case 'REMOVE_FROM_CART':
      let items = state.cart.filter(item => item.id !== action.payload);
      return {
        ...state,
        cart: [...items]
      };
    default:
      return state;
  };
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{
      cart: state.cart,
      menuData: state.menuData,
      dispatch
    }}>
      {children}
    </AppContext.Provider>
  )
};