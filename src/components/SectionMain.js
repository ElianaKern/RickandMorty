import Cards from "./Cards";
import Container from '@mui/material/Container';


const SectionMain = ({personajes}) => {
    return (
      <Container fixed>
        <Cards dataPersonajes={personajes}/>
      </Container>
    );
}

export default SectionMain;