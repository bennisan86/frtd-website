import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Lore from './pages/Lore';
// import Sidequests from './pages/Sidequests';
// import Sidequest from './pages/Sidequest';
import Buy from './pages/Buy';
import Layout from './components/Layout';

import { ChakraBaseProvider } from '@chakra-ui/react'
import theme from "./theme";

function App() {
  return (
    <BrowserRouter>
      <ChakraBaseProvider theme={theme}>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/lore" element={<Lore />} />
          {/* <Route path="/sidequests" element={<Sidequests />} />
          <Route path="/sidequest" element={<Sidequest />} /> */}
          <Route path="/buy" element={<Buy />} />
          </Route>
        </Routes>
      </ChakraBaseProvider>
    </BrowserRouter>
  );
}

export default App;
