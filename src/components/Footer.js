
export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <img src={require('../assets/lemon.JPG')} alt="Lemon" />
        <section>
          <p>Doormat Navigation</p>
          <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#menu'>Menu</a></li>
            <li><a href='/reservations'>Reservations</a></li>
            <li><a href='/reservations'>Order Online</a></li>
            <li><a href='/login'>Login</a></li>
          </ul>
        </section>
        <section>
          <p>Contact</p>
          <ul>
            <li>Chicago, Down street 15/89</li>
            <li>+255682234</li>
            <li>littlelemon@example.com</li>
          </ul>
        </section>
        <section>
          <p>Social Media</p>
          <ul>
            <li><a href='#ins'>Instagram</a></li>
            <li><a href='face'>Facebook</a></li>
            <li><a href='#you'>YouTube</a></li>
          </ul>
        </section>
      </div>
    </footer>
  )
}
