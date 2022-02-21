import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const Cards = ({ dataPersonajes }) => {
   return (
     <Box
       sx={{
         display: 'flex',
         flexWrap: 'wrap',
         justifyContent: 'center',
         alignItems: 'center',
         mb: 20,
       }}
     >
       {dataPersonajes.map((personaje) => (
         <Link to={`/${personaje.id}`}>
          <Card key={personaje.id} sx={{ width: 245, height: 380, margin: 1 }}>
            <CardMedia
              component="img"
              height="60%"
              image={personaje.image}
              alt="imagen del personaje"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                {personaje.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Género: {personaje.gender}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Especie: {personaje.species}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Estado: {personaje.status}
              </Typography>
            </CardContent>
          </Card>
         </Link>
      ))}
     </Box>
   );
}

export default Cards;
