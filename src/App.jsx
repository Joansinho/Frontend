import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import ComentarioLista from './componentes/ComentarioLista';
import ComentarioStats from './componentes/ComentarioStats';
import ComentarioForm from './componentes/ComentarioForm';
import About from './pages/About';
import AboutIconLink from './componentes/AboutIconLink';
import HomeIcon from './componentes/HomeIcon';
import { ComentariosProvider } from './contexto/ComentariosContexto';

function App() {
  const titulo = "App de Comentarios";
  const Autor = "Joan Fontecha";
  const ficha = "2902093";
  const centro = "CGMLTI";

  return (
    <ComentariosProvider>
      <Router>
        <div className='container'>
          <Header titulo={titulo} autor={Autor} centro={centro} ficha={ficha} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <ComentarioStats />
                      <ComentarioForm /> 
                      <ComentarioLista />
                      <AboutIconLink /> 
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <About titulo={titulo} autor={Autor} ficha={ficha} />
                  <HomeIcon/>
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </ComentariosProvider>
  );
}

export default App;
