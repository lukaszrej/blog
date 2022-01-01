import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Footer = () => {
  const handleClick = () => {
    console.log('button clicked');
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Autor Sukcesu @2022

          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
