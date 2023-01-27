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
            onClick={() => setOpen(false)}>{exitSvg}
          </span>
          <Nav />
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