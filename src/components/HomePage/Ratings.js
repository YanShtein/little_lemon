import { starSvg } from '../../assets/svg';
import { useContext } from "react";
import { AppContext } from '../context/AppContext';

export default function Ratings() {
  const { ratingsData } = useContext(AppContext);

  return (
    <div className='ratings-content'>
      <p className='title'>What our customers say!</p>
      <div className="ratings-grid">
        {
          ratingsData.map(rating => {
            return (
              <div className="ratings-card" key={rating.id}>
                <p>{starSvg}{starSvg}{starSvg}{starSvg}{starSvg}</p>
                <div className='customer'>
                  <img src={require(`../../assets/images/${rating.img}`)} alt={rating.name} />
                  <p>{rating.name}</p>
                </div>
                <p>{rating.text}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
