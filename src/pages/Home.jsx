import { Typography, Container, Paper } from '@mui/material';

function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>Tổng quan hệ thống</Typography>
        <Typography>Chào mừng bạn đến với hệ thống quản lý tài sản và dịch vụ cư dân.</Typography>
      </Paper>
    </Container>
  );
}
export default Home;