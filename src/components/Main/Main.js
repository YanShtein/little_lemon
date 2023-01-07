import '../../assets/css/shared.css';
import '../../assets/css/main.css';
import Ratings from './Ratings';
import Specials from './Specials';

export default function Main() {

  return (
    <main>
      <section id='specials'>
        <Specials />
      </section>
      <section id='ratings'>
        <Ratings />
      </section>
    </main>
  )
}
