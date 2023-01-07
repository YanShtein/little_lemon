import { deliverySvg } from '../../assets/svg';

export default function Specials() {
  return (
    <>
      <div className='specials-heading'>
        <p>This Weeks Specials</p>
        <a href='/'><button>Online Menu</button></a>
      </div>
      <div className='specials-grid'>
        <div className='card'>
          <img src={require('../../assets/images/cheeseBread.JPG')} alt="Dish" />
          <div className='card-text'>
            <h3><span>Cheesy Bread</span><span>$7.99</span></h3>
            <p>
              Our tasty cheesey bread, with chopped tomatoes, bazil leaves and yellow peppers.
            </p>
            <a href='/order'>Order a delivery {deliverySvg}</a>
          </div>
        </div>
        <div className='card'>
          <img src={require('../../assets/images/salad.JPG')} alt="Dish" />
          <div className='card-text'>
            <h3><span>Greek salad</span><span>$12.99</span></h3>
            <p>
              Salad with avocado, tomatoes, Bulgarian cheese, green peppers and onions,
              with our famous sauce.
            </p>
            <a href='/order'>Order a delivery {deliverySvg}</a>
          </div>
        </div>
        <div className='card'>
          <img src={require('../../assets/images/pasta.JPG')} alt="Dish" />
          <div className='card-text'>
            <h3><span>Pasta Margarita</span><span>$14.99</span></h3>
            <p>A fresh hand made pasta with high quality tomatoes, bazil leaves
              and Parmezan cheese.
            </p>
            <a href='/order'>Order a delivery {deliverySvg}</a>
          </div>
        </div>
      </div>
    </>
  )
};
