import { useState , useEffect } from 'react';
import Nav from './components/Nav';
import Busqueda from './components/Busqueda';
import SectionMain from './components/SectionMain';
import Footer from './components/Footer';


const App = () => {
  const [valorDelInput, setValorDelInput] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [loading, setLoading] = useState(false);

  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/?name=${busqueda}`)
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.results);
        setLoading(false);
      });
  }, [busqueda]);

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
      <Busqueda handleChange={handleChange} handleClick={handleClick} loading={loading}/>
      <SectionMain personajes={personajes}/>
      <Footer />
    </div>
  );
};

export default App;
