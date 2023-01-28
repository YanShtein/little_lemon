import '../../assets/shared.css';
import './home.css';
import Article from './Article';
import Ratings from './Ratings';
import Specials from './Specials';
import Footer from '../Footer/Footer';
import About from './About';
import { useEffect } from "react";

export default function HomePage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
