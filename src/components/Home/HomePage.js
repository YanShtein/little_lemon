import '../../assets/shared.css';
import './home.css';
import Article from './Article';
import Ratings from './Ratings';
import Specials from './Specials';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
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
      </main>
      <Footer />
    </>
  )
};
