import { starSvg } from '../../assets/svg';
import ratingsData from './ratingsData';

export default function Ratings() {
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
                  <a href='https://this-person-does-not-exist.com/en' rel="noreferrer" target="_blank" aria-label='Go to external page'>
                    <img src={require(`../../assets/images/${rating.img}`)} alt={rating.name}/>
                  </a>
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
