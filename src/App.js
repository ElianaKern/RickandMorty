import { useState , useEffect } from 'react';
import Nav from './components/Nav';
import Busqueda from './components/Busqueda';
import SectionMain from './components/SectionMain';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Personajes from './components/Personajes';
import Ubicacion from './components/Ubicacion';
import Episodios from './components/Episodios';

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
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<SectionMain personajes={personajes}/>}
          ></Route>
          <Route path="/Personajes" element={<Personajes />}></Route>
          <Route path="/Ubicacion" element={<Ubicacion />}></Route>
          <Route path="/Episodios" element={<Episodios />}></Route>
        </Routes>
        <Busqueda
          handleChange={handleChange}
          handleClick={handleClick}
          loading={loading}
        />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
