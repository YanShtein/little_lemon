import '../../assets/shared.css';
import './menu.css';
import { useContext } from "react";
import { AppContext } from '../context/AppContext';

export default function Menu() {
  const { dishData } = useContext(AppContext);

  return (
    <div className='menu'>
      <h2>Little Lemon menu</h2>
      <div className='menu-content'>
        {
          dishData.map(item => {
            return (
              <div className='menu-content-item' key={item.id}>
                <img src={require(`../../assets/images/${item.img}`)} alt={item.dish}/>
                <p>{item.description}</p>
                <span>${item.price}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};
