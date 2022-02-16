import Box from '@mui/material/Box';
import  Typography from '@mui/material/Typography';



const Footer = () => {
  return (
    <footer>
      <Box
        sx={{ bgcolor: 'warning.light', color: 'primary.contrastText', p: 2 }}
      >
        <Typography
          variant="h6"
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          Hecho por Eliana Kern
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            pt: 5,
            pb: 5,
          }}
        >
          Material UI &reg; {new Date().getFullYear()}
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
