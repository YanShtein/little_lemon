import '../../assets/shared.css';
import './menu.css';
import { useContext } from "react";
import { AppContext } from '../context/AppContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function MenuPage() {
  const { menuData } = useContext(AppContext);

  return (
    <>
      <Header />
      <div className='menu'>
        <h2>Little Lemon menu</h2>
        <div className='menu-content'>
          {
            menuData.map(item => {
              return (
                <div className='menu-content-item' key={item.id}>
                  <img src={require(`../../assets/images/${item.img}`)} alt={item.dishUpper}/>
                  <div>
                    <p>{item.dishUpper}</p>
                    <p>{item.description}</p>
                  </div>
                  <span>${item.price}</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <Footer />
    </>
  )
};
