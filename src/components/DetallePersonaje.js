import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const DetallePersonaje = () => {
  const params = useParams();
  const [detallePersonaje, setDetallePersonaje] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${params.idPersonajes}`)
      .then((res) => res.json())
      .then((data) => {
        setDetallePersonaje(data);
      });
  }, []);
  console.log(detallePersonaje);

  return (
    <Card key={detallePersonaje.id} sx={{ width: 245, height: 380, margin: 1 }}>
      <CardMedia
        component="img"
        height="60%"
        image={detallePersonaje.image}
        alt="imagen del personaje"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          {detallePersonaje.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Género: {detallePersonaje.gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Especie: {detallePersonaje.species}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Estado: {detallePersonaje.status}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DetallePersonaje;
