import { useState , useEffect } from 'react';
import Nav from './components/Nav';
import Busqueda from './components/Busqueda';
import SectionMain from './components/SectionMain';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ubicacion from './components/Ubicacion';
import Episodios from './components/Episodios';
import DetallePersonaje from './components/DetallePersonaje';
import ErrorNoEncontrado from './components/ErrorNoEncontrado';

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
        <Busqueda
          handleChange={handleChange}
          handleClick={handleClick}
          loading={loading}
        />
        <Routes>
          <Route path="/Personajes" element={<SectionMain personajes={personajes} />}></Route>
          <Route path="/Ubicacion" element={<Ubicacion/>}></Route>
          <Route path="/Episodios" element={<Episodios/>}></Route>
          <Route path="/:idPersonajes" element={<DetallePersonaje/>}></Route>
          <Route path="*" element={<ErrorNoEncontrado/>}></Route>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
