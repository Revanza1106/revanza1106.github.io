import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import { Link } from 'react-scroll';

function App() {
  return (
    <div className='bg-gray-100'>
   <Link to='Navbar' duration={500} smooth={true}>
   <Navbar/>
   </Link>
    <Hero/>
    <Analytics/>
    <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
