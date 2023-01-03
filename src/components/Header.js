import Nav from "./Nav";


export default function Header() {
  return (
    <header>
      <div className="header">
        <a href="#">
          <img src={require('../assets/logo.png')} alt="Little Lemon Logo"/>
        </a>
        <Nav />
      </div>
    </header>
  )
}
