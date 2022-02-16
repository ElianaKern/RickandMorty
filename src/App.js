import { useState } from 'react';
import Nav from './components/Nav';
import Busqueda from './components/Busqueda';
import SectionMain from './components/SectionMain';
import Footer from './components/Footer';


const App = () => {
  const [valorDelInput, setValorDelInput] = useState('');
  const [busqueda, setBusqueda] = useState('');

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setBusqueda(valorDelInput);
  };

  return (
    <div>
      <Nav />
      <Busqueda handleChange={handleChange} handleClick={handleClick} />
      <SectionMain busqueda={busqueda} />
      <Footer />
    </div>
  );
};

export default App;
