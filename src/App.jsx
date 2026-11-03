import { CssBaseline, Box } from '@mui/material';
// import Navbar from './components/navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Hero />
        <Features />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;