import Nav from "./Nav";
import { exitSvg, hamburgerSvg } from '../assets/svg';
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
          <img src={require('../assets/logo.png')} alt="Little Lemon Logo"/>
        </a>
        <span className="nav">
          <Nav />
        </span>
      </div>
    </header>
  )
}
