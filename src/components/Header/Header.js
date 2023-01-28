import '../../assets/shared.css';
import './header.css';
import Nav from "../Nav";
import { exitSvg, hamburgerSvg } from '../../assets/svg';
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  function toggleHamburger() {
    setOpen(true);
  };

  return (
    <header>
      <div className={`hamburger ${open ? 'show-content' : 'hide-content'}`}>
        <div className="hamburger-content">
          <span
            className="hamburger-content-exit"
            onClick={() => setOpen(false)}
            >
            {exitSvg}
          </span>
          <nav>
            <ul>
              <li><Link to="/" aria-label="Go to Home Page" onClick={() => setOpen(false)}>Home</Link></li>
              <li><Link to="/#about" aria-label="Go to About Section" onClick={() => setOpen(false)}>About</Link></li>
              <li><Link to="/menu" aria-label="Go to Menu Page" onClick={() => setOpen(false)}>Menu</Link></li>
              <li><Link to="/book" aria-label="Go to Book a table Page" onClick={() => setOpen(false)}>Book a Table</Link></li>
              <li><Link to="/order" aria-label="Go to Order Online Page" onClick={() => setOpen(false)}>Order Online</Link></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="header fixed">
        <span
          className="hamburger-btn"
          onClick={toggleHamburger}>{hamburgerSvg}
        </span>
        <Link to="/" aria-label="Go to Home Page">
          <img src={require('../../assets/images/logo.png')} alt="Little Lemon Logo"/>
        </Link>
        <span className="nav">
          <Nav />
        </span>
      </div>
    </header>
  )
}