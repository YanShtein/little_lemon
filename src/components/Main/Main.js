import '../../assets/css/shared.css';
import '../../assets/css/main.css';
import Ratings from './Ratings';
import { deliverySvg } from '../../assets/svg';

export default function Main() {

  return (
    <main>
      <section id='specials'>
        <div className='specials-title'>
          <p className='title'>This Weeks Specials</p>
          <a href='/'><button>Online Menu</button></a>
        </div>
        <div className='specials-content'>
          <div className='specials-content-card'>
            <img src={require('../../assets/images/img.JPG')} alt="Dish" />
            <div>
              <p className='title-price'><span>Greek salad</span><span>$12.99</span></p>
              <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href='/order'>Order a delivery {deliverySvg}</a>
            </div>
          </div>
          <div className='specials-content-card'>
            <img src={require('../../assets/images/img.JPG')} alt="Dish" />
            <div>
              <p className='title-price'><span>Greek salad</span><span>$12.99</span></p>
              <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href='/order'>Order a delivery {deliverySvg}</a>
            </div>
          </div>
          <div className='specials-content-card'>
            <img src={require('../../assets/images/img.JPG')} alt="Dish" />
            <div>
              <p className='title-price'><span>Greek salad</span><span>$12.99</span></p>
              <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href='/order'>Order a delivery {deliverySvg}</a>
            </div>
          </div>
        </div>
      </section>
      <section id='rating'>
        <Ratings />
      </section>
    </main>
  )
}
