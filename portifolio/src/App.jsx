import React from 'react';
import Nav from './components/Nav';
import Banner from './components/Banner';
import About from './components/About';
import Tecnologia from './components/Tecnologia';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Footer from './components/Footer';




const App = () => {
  return (
    <div className='bg-slate-900'>
      <Nav />
      <Banner />
      <About />
      <Tecnologia />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;