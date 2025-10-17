import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    backgroundColor: '#7b1f1f',
    padding: '10px',
    display: 'flex',
    gap: '15px',
    justifyContent: 'center'
  };

  const linkStyle = { color: 'white', textDecoration: 'none', fontWeight: 'bold' };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Inicio</Link>
      <Link to="/productos" style={linkStyle}>Vinos</Link>
      <Link to="/carrito" style={linkStyle}>Carrito</Link>
      <Link to="/admin" style={linkStyle}>Admin</Link>
    </nav>
  );
}

export default Navbar;