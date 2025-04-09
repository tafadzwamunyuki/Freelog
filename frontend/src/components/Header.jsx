// src/components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../index.css"

export default function Header() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
        <img src='/freelog.logo.jpeg' className='logo' alt=''/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname.startsWith('/blogs') ? 'active' : ''}`} to="/blogs">Articles</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/create' ? 'active' : ''}`} to="/create">Add Article</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
