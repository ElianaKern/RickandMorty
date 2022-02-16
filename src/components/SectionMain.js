import { useEffect, useState } from "react";
import Cards from "./Cards";
import Container from '@mui/material/Container';


const SectionMain = ({busqueda}) => {
  const [personajes,setPersonajes] = useState ([]);
  const [loading, setLoading] = useState(false);
    
    useEffect(()=> {
        setLoading(true)
        fetch(`https://rickandmortyapi.com/api/character/?name=${busqueda}`)
        .then((res)=>res.json())
        .then((data)=>{
           setPersonajes(data.results)
           setLoading(false)
        })
    },[busqueda])

    return (
      <Container fixed>
        <Cards dataPersonajes={personajes} />
      </Container>
    );
}

export default SectionMain;