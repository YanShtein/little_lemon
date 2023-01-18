import '../../assets/shared.css';
import './footer.css';
import Nav from '../Nav';

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <img src={require('../../assets/images/footer.JPG')} alt="Lemon" />
        <section>
          <p>Doormat Navigation</p>
          <Nav />
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
