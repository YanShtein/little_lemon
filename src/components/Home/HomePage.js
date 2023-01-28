import '../../assets/shared.css';
import './home.css';
import Article from './Article';
import Ratings from './Ratings';
import Specials from './Specials';
import Footer from '../Footer/Footer';
import About from './About';

export default function HomePage() {
  return (
    <>
      <main>
        <section id='article'>
          <Article />
        </section>
        <section id='specials'>
          <Specials />
        </section>
        <section id='ratings'>
          <Ratings />
        </section>
        <section id='about'>
          <About />
        </section>
      </main>
      <Footer />
    </>
  )
};