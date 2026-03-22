import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Residents from './pages/Residents';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <Router>
      <CssBaseline /> {/* Reset CSS để giao diện MUI đẹp hơn */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/residents" element={<Residents />} />
      </Routes>
    </Router>
  );
}

export default App;