import React, { createContext, useState } from 'react';

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [mensaje, setMensaje] = useState(null);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((p) => p.id === producto.id);
      if (existe) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, cantidad: (p.cantidad || 1) + 1 } : p
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });

    setMensaje(`${producto.nombre} agregado al carrito ✅`);
    setTimeout(() => setMensaje(null), 2000);
  };

  const vaciarCarrito = () => setCarrito([]);

  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, vaciarCarrito, eliminarDelCarrito, mensaje }}>
      {children}
    </CarritoContext.Provider>
  );
}