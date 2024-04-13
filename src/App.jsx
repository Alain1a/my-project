import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/navbar';
import Test from './test';
import Links from './components/Links';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/service';
import Portfolio from './components/portfolio';
import Contact from './components/contact';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <section id="Home">
          <Navbar />
          <Hero />
        </section>
        <section id="Service">
          <Services type="Service" />
        </section>
        <section id="portfolio">
          <Portfolio type="portfolio"/>
        </section>
        <section id="contact">
          <Contact type="contact"/>
        </section>
       

        {/* <Test/>
        <Test/> */}
      </div>

    </>
  )
}

export default App;
