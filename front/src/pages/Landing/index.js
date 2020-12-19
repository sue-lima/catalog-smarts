import React from 'react';
import { BsFillCursorFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';

import './styles.css';

function Landing() {
  return (
    <div id="landing-page">
      <div className="landing-content">
        <main>
            <h1>Smarts Portfólio</h1>
            <p>Veja seu catálogo de clientes.</p>
        </main>

        <Link to="/list" className="enter-app">
            <BsFillCursorFill size={26} color="#f48b83" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;