import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';

const Busqueda = ({handleChange, handleClick,loading}) => {
  
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', mt: 8, mb: 6 }}>
      <Box component="form">
        <TextField
          variant="standard"
          label="RickandMorty"
          onChange={handleChange}
          sx={{ width: 400 }}
        />
        <Button
          variant="contained"
          color="secondary"
          startIcon={<SavedSearchIcon />}
          onClick={handleClick}
        >
         {loading?"Buscando":"Buscar"}
        </Button>
      </Box>
    </Container>
  );
};

export default Busqueda;
