import { Link } from "react-router-dom";

export default function Article() {
  return (
    <div className="article">
      <div className="article-content">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>We are a family mediterranean restaurant.
          focused on traditional recipes, served with a modern twist.
        </p>
        <button>
          <Link to="/book">Reserve a table</Link>
        </button>
      </div>
      <img src={require('../../assets/images/main.JPG')} alt='Menu'/>
    </div>
  )
};
