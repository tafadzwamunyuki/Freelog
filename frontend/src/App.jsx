// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import BlogList from './components/BlogList';
import BlogDetails from './components/BlogDetails';
import BlogDescription from './components/BlogDescription';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Header from './components/Header';
import Footer from './components/Footer';


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/blog/:id/description" element={<BlogDescription />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="*" element={<h2 className="text-center mt-5">404 Page Not Found</h2>} />
      </Routes>
      <Footer />
    </Router>
  );
}
