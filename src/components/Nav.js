import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/" aria-label="Go to Home Page">Home</Link></li>
        <li><Link to="/#about" aria-label="Go to About Section">About</Link></li>
        <li><Link to="/menu" aria-label="Go to Menu Page">Menu</Link></li>
        <li><Link to="/book" aria-label="Go to Book a table Page">Book a Table</Link></li>
        <li><Link to="/order" aria-label="Go to Order Online Page">Order Online</Link></li>
      </ul>
    </nav>
  )
};
