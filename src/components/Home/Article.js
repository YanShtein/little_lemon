import { Link } from "react-router-dom";

export default function Article() {
  return (
    <div className="article">
      <img src={require('../../assets/images/main.JPG')} alt='Menu'/>
      <div className="article-content">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p title="Thanks to chatGPT for generating the Little Lemon about text.">
          Little Lemon is a charming restaurant located in the heart of downtown.<br />
          The menu features a mix of classic and contemporary dishes made with fresh, locally-sourced ingredients.<br />
          Whether you're in the mood for a casual lunch or a romantic dinner,<br />
          Little Lemon has something to satisfy your cravings.
        </p>
        <Link to="/book"><button>Book a Table</button></Link>
      </div>
    </div>
  )
};
