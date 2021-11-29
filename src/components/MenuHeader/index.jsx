import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const MenuHeader = () => {
  const userName = 'Marcelo Maurício';

  return (
    <header>
      <h1>{userName}</h1>
      <nav className="header-menu-links">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/portfolio">Portfólio</Link>
      </nav>
    </header>
  );
};

export default MenuHeader;
