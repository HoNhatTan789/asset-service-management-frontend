import React from 'react';
import { 
  Typography, 
  Container, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Button,
  Stack
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Residents() {
  // Dữ liệu mẫu mở rộng
  const mockData = [
    { id: 1, name: "Nguyễn Văn A", room: "101", phone: "0901234567" },
    { id: 2, name: "Trần Thị B", room: "205", phone: "0987654321" },
    { id: 3, name: "Lê Văn C", room: "302", phone: "0912344556" },
  ];

  return (
    <Container sx={{ mt: 4 }}>
      {/* Tiêu đề và Nút Thêm */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          Danh sách cư dân
        </Typography>
        <Button variant="contained" startIcon={<AddIcon />}>
          Thêm cư dân
        </Button>
      </Stack>

      {/* Bảng hiển thị */}
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>**ID**</TableCell>
              <TableCell>**Họ và tên**</TableCell>
              <TableCell>**Số phòng**</TableCell>
              <TableCell>**Số điện thoại**</TableCell>
              <TableCell align="center">**Thao tác**</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockData.map((item) => (
              <TableRow key={item.id} hover>
                <TableCell>{item.id}</TableCell>
                <TableCell sx={{ fontWeight: 500 }}>{item.name}</TableCell>
                <TableCell>{item.room}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell align="center">
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <Button size="small" variant="outlined" color="primary" startIcon={<EditIcon />}>
                      Sửa
                    </Button>
                    <Button size="small" variant="outlined" color="error" startIcon={<DeleteIcon />}>
                      Xóa
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Residents;