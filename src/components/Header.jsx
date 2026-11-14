import React from 'react';
import './Header.css';
import headerData from './headerData.json';

export function Header() {
  return (
    <>
      <header
        className="header-hero"
        style={{
          background: `linear-gradient(rgba(18, 38, 28, 0.55), rgba(18, 38, 28, 0.65)), url('/img/Header.jpg') center/cover no-repeat`
        }}
      >
        <h1 className="header-title">{headerData.title}</h1>
        <div className="header-divider"></div>
        <p className="header-subtitle">{headerData.subtitle}</p>
      </header>

      <nav className="top-nav">
        {headerData.menu.map((item) => (
          <a key={item.id} href={item.href} className="top-nav-link">
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}