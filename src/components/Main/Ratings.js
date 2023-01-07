import { starSvg } from '../../assets/svg';


export default function Ratings() {
  return (
    <div className='ratings-content'>
      <p className='title'>What our customers say!</p>
      <div className="ratings-grid">
        <div className="ratings-card">
          <p>{starSvg}{starSvg}{starSvg}{starSvg}{starSvg}</p>
          <div className='customer'>
            <img src={require('../../assets/images/footer2.JPG')} alt="customer" />
            <p>Peter Wilson</p>
          </div>
          <p>
            This restaurant is amazing! the stuff are very nice and warm people, the food delishes!
          </p>
        </div>
        <div className="ratings-card">
          <p>{starSvg}{starSvg}{starSvg}{starSvg}{starSvg}</p>
          <div className='customer'>
            <img src={require('../../assets/images/footer2.JPG')} alt="customer" />
            <p>Mary Barker</p>
          </div>
          <p>
            The cheesey bread will feel your heart with love! 
          </p>
        </div>
        <div className="ratings-card">
          <p>{starSvg}{starSvg}{starSvg}{starSvg}{starSvg}</p>
          <div className='customer'>
            <img src={require('../../assets/images/footer2.JPG')} alt="customer" />
            <p>Heather Hill</p>
          </div>
          <p>
            Ordered the salad and pasta Margarita, best pasta in the whole country! 
          </p>
        </div>
        <div className="ratings-card">
          <p>{starSvg}{starSvg}{starSvg}{starSvg}{starSvg}</p>
          <div className='customer'>
            <img src={require('../../assets/images/footer2.JPG')} alt="customer" />
            <p>Eric Strong</p>
          </div>
          <p>
            Since I discovered this restaurant, I eat here pretty often, the cheff makes the best food in the country!
          </p>
        </div>
      </div>
    </div>
  )
}
