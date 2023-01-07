import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import './assets/shared.css';

function App() {
  return (
    <div className="container">
      <div className='accesibility'>
        <img src={require('./assets/images/accesibility.JPG')} alt="Accesibility" />
      </div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
