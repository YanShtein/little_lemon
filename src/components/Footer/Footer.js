import '../../assets/shared.css';
import './footer.css';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <img src={require('../../assets/images/footer.JPG')} alt="Lemon" />
        <section>
          <p>Doormat Navigation</p>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='#about'>About</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/reserve'>Reservations</Link></li>
            <li><Link to='/order'>Order Online</Link></li>
          </ul>
        </section>
        <section>
          <p>Contact</p>
          <ul>
            <li>Chicago, Down street 15/89</li>
            <li>+255682234</li>
            <li>little.lemon@example.com</li>
          </ul>
        </section>
        <section>
          <p>Social Media</p>
          <ul>
            <li><a href='https://www.instagram.com/'>Instagram</a></li>
            <li><a href='https://www.facebook.com/'>Facebook</a></li>
            <li><a href='https://www.youtube.com/'>YouTube</a></li>
          </ul>
        </section>
      </div>
    </footer>
  )
}
