import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importação das páginas do currículo
import Index from './pages/Index.jsx';
import Contato from './pages/Contato.jsx';
import Portifolio from './pages/Portifolio.jsx';

// Componente principal da aplicação
function App() {
  return (
    // Router controla a navegação entre as páginas sem recarregar o site
    <Router>
      <div>

        {/* Barra de navegação utilizando Bootstrap */}
        <nav className="navbar navbar-expand" style={{ backgroundColor: '#1a1a1a' }}>
          <div className="container">
            <span className="navbar-brand text-light">Meu Currículo</span>

            {/* Links que direcionam para cada rota */}
            <div className="navbar-nav">
              <Link className="nav-link text-light" to="/">Home</Link>
              <Link className="nav-link text-light" to="/portifolio">Portfólio</Link>
              <Link className="nav-link text-light" to="/contato">Contato</Link>
            </div>
          </div>
        </nav>

        {/* Área onde o conteúdo da página será exibido */}
        <div>
          <Routes>
            {/* Cada Route associa uma URL a um componente */}
            <Route path="/" element={<Index />} />
            <Route path="/portifolio" element={<Portifolio />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

// Exporta o componente para ser utilizado como principal da aplicação
export default App;