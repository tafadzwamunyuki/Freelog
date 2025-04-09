import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function HomePage() {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">📝 Freelog: The hub where creativity meets</h1>
      <p className="lead">Online space fostering collaboration, empowering creativity, and diversity </p>
      <Link to="/blogs" className="btn btn-primary mt-3">Go to Articles</Link>
      <img src="/brain.jpg"
        className='landing-img img-fluid rounded shadow-lg mb-4'
        alt='' />
    </div>
  );
}
