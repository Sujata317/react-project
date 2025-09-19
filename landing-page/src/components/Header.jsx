

import React from "react";
import "./../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">MyLanding</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
