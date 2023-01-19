import HomePage from "./components/Home/HomePage";
import BookingPage from "./components/Booking/BookingPage";
import OrderPage from "./components/Order/OrderPage";
import { Routes, Route } from "react-router-dom";
import MenuPage from "./components/Menu/MenuPage";
import { AppProvider } from './components/context/AppContext';
import Confirmation from "./components/Booking/Confirmation";
// import './assets/shared.css';

function App() {
  return (
    <AppProvider>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/menu" element={<MenuPage />}></Route>
          <Route path="/order" element={<OrderPage />}></Route>
          <Route path="/book" element={<BookingPage />}></Route>
          <Route path="/confirmation" element={<Confirmation />}></Route>
        </Routes>
      </div>
    </AppProvider>
  );
};

// {/* <div className='accesibility'>
//   <img src={require('./assets/images/accesibility.JPG')} alt="Accesibility" />
// </div> */}
// {/* <Header /> */}

export default App;
