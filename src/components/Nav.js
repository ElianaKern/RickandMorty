import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link } from "react-router-dom"



const Nav = () => {
  const linksNav = [
    { nombre: 'Personajes', url:"Personajes"},
    { nombre: 'Ubicacion', url:"Ubicacion"},
    { nombre: 'Episodios', url:"Episodios"},
  ];
  return (
      <Box sx={{ flexGrow: 1, mb: '12' }}>
        <AppBar position="static" sx={{ bgcolor: 'warning.light' }}>
          <Toolbar>
            <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
              Rick and Morty
            </Typography>
            <Box>
              {linksNav.map((link) => {
                return (
                  <Link to={link.url} underline="hover">
                    {link.nombre}
                  </Link>
                );
              })}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
  );
};

export default Nav;
