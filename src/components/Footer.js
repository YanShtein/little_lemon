
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
            <li><a href='#'>Chicago, Down street 15/89</a></li>
            <li><a href='#'>+255682234</a></li>
            <li><a href='#'>littlelemon@example.com</a></li>
          </ul>
        </section>
        <section>
          <p>Social Media</p>
          <ul>
            <li><a href='#'>Instagram</a></li>
            <li><a href='#'>Facebook</a></li>
            <li><a href='#'>YouTube</a></li>
          </ul>
        </section>
      </div>
    </footer>
  )
}
