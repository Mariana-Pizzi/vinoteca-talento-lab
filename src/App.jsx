import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Productos from './pages/Productos';
import ProductoDetalle from './pages/ProductoDetalle';
import Carrito from './components/Carrito';
import Admin from './pages/Admin';
import Login from './pages/Login';
import RutaProtegida from './components/RutaProtegida';
import MensajeCarrito from './MensajeCarrito';

function App() {
  const [logueado, setLogueado] = useState(false);

  return (
    <Router>
      <Navbar />
      <MensajeCarrito /> 
      <div style={{ textAlign: 'center', margin: '10px' }}>
        <button onClick={() => setLogueado(!logueado)}>
          {logueado ? 'Cerrar sesión' : 'Iniciar sesión'}
        </button>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route
          path="/admin"
          element={
            <RutaProtegida isAuth={logueado}>
              <Admin />
            </RutaProtegida>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;