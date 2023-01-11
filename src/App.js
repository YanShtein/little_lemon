import HomePage from "./components/HomePage/HomePage";
import BookTablePage from "./components/BookTablePage/BookTablePage";
import Order from "./components/OrderPage/Order";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/MenuPage/Menu";
// import './assets/shared.css';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/book" element={<BookTablePage />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
      </Routes>
    </div>
  );
};

// {/* <div className='accesibility'>
//   <img src={require('./assets/images/accesibility.JPG')} alt="Accesibility" />
// </div> */}
// {/* <Header /> */}

export default App;
