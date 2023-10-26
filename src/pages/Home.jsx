import {
  Contact,
  Cursor,
  Hero,
  Navbar,
  Parallax,
  Portfolio,
  Services,
} from '../components';

export default function Home() {
  return (
    <div>
      <Cursor />
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'>
        <Parallax type='services' />
      </section>
      <section>
        <Services />
      </section>
      <section id='Portfolio'>
        <Parallax type='portfolio' />
      </section>
      <Portfolio />
      <section id='Contact'>
        <Contact />
      </section>
    </div>
  );
}
