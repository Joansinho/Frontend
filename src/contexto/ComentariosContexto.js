import React, { createContext, useEffect, useState } from 'react';

export const ComentariosContexto = createContext();

export const ComentariosProvider = ({ children }) => {

  const [comentarios, setComentarios] = useState([]);

  useEffect(()=>{
    fetchComentarios()
  }, []);

  // funcion para traer los comentario desde json server
  const fetchComentarios = async() => {
    const response = await fetch('http://localhost:5000/comentarios')
    const comentariosAPI = await response.json()
    setComentarios(comentariosAPI)
  }

  const borrarComentario = (id) => {
    setComentarios((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <ComentariosContexto.Provider value={{ comentarios, borrarComentario }}>
      {children}
    </ComentariosContexto.Provider>
  );
};
