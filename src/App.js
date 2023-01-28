import HomePage from "./components/Home/HomePage";
import BookingPage from "./components/Booking/BookingPage";
import OrderPage from "./components/Order/OrderPage";
import { Routes, Route } from "react-router-dom";
import MenuPage from "./components/Menu/MenuPage";
import { AppProvider } from './components/context/AppContext';
import Confirmation from "./components/Booking/Confirmation";
import Header from "./components/Header/Header";

function App() {
  return (
    <AppProvider>
        <img className="bg" alt="Site Background" src={require('../src/assets/images/table.JPG')}/>
        <div className="container">
          <Header />
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

export default App;
