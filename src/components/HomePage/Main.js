import '../../assets/shared.css';
import './main.css';
import Article from './Article';
import Ratings from './Ratings';
import Specials from './Specials';

function Main() {
  return (
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
  )
}

const HomePage = () => {
  return <Main />
};

export default HomePage;