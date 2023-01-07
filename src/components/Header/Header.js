import '../../assets/shared.css';
import './header.css';
import Nav from "./Nav";
import { exitSvg, hamburgerSvg } from '../../assets/svg';
import { useState } from "react";

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
            onClick={() => setOpen(false)}>{exitSvg}
          </span>
          <Nav />
        </div>
      </div>
      <span
        className="hamburger-btn"
        onClick={toggleHamburger}>{hamburgerSvg}
      </span>
      <div className="header">
        <a href="/">
          <img src={require('../../assets/images/logo.png')} alt="Little Lemon Logo"/>
        </a>
        <span className="nav">
          <Nav />
        </span>
      </div>
      <div className="header-main">
        <div className="header-main-content">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>We are a family mediterranean restaurant.
            focused on traditional recipes, served with a modern twist.
          </p>
          <button>
            <a href="/">Reserve a table</a>
          </button>
        </div>
          <img src={require('../../assets/images/main.JPG')} alt='Menu'/>
      </div>
    </header>
  )
}
