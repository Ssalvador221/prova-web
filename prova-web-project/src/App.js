import './App.css';
import Home from './pages/home/home'
import Page from './pages/transacoes/page';
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>    
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/transacoes" element={<Page/>} /> 
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
