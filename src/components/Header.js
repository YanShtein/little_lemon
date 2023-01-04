import Nav from "./Nav";
import { exitSvg, hamburgerSvg } from '../assets/svg';
import { useState } from "react";

export default function Header() {
  const [showMobile, setShowMobile] = useState(false);

  function handleMobile() {
    setShowMobile(true);
  };

  return (
    <header>
      <div className={`nav-mobile-backdrop ${showMobile ? 'show-mobile' : 'hide-mobile'}`}>
        <div className="mobile-nav">
          <span 
            className="mobile-nav-exit"
            onClick={() => setShowMobile(false)}>{exitSvg}
          </span>
          <Nav />
        </div>
      </div>
      <div className="header">
        <span 
          className="hamburger" 
          onClick={handleMobile}>{hamburgerSvg}
        </span>
        <a href="/">
          <img src={require('../assets/logo.png')} alt="Little Lemon Logo"/>
        </a>
        <span className="desktop-nav">
          <Nav />
        </span>
      </div>
    </header>
  )
}
