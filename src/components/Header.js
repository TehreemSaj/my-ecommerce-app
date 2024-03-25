import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="logo">Your Logo</div>
      <div className="company-name">Company Name</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
    </header>
  );
}

export default Header;
