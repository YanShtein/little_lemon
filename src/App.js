import HomePage from "./components/HomePage/HomePage";
import Reserve from "./components/ReservePage/Reserve";
import Order from "./components/OrderPage/Order";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/MenuPage/Menu";
// import './assets/shared.css';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/reserve" element={<Reserve />}></Route>
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
