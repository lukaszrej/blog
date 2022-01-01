import { AppBar, Box, Toolbar, Container, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            Autor Sukcesu
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
