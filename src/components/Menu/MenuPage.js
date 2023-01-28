import '../../assets/shared.css';
import './menu.css';
import { useContext } from "react";
import { AppContext } from '../context/AppContext';
import Footer from '../Footer/Footer';
import { useEffect } from "react";

export default function MenuPage() {
  const { menuData } = useContext(AppContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
