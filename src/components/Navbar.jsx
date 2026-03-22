import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            ASSET SYSTEM
          </Typography>
          <Button color="inherit" component={Link} to="/">Trang chủ</Button>
          <Button color="inherit" component={Link} to="/residents">Cư dân</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;