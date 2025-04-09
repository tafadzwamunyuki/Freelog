import React, { useState } from 'react';
import axios from 'axios';

export default function BlogForm() {
  const [formData, setFormData] = useState({ title: '', description: '', author: '', image: null });

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blogData = new FormData();
    Object.entries(formData).forEach(([key, value]) => blogData.append(key, value));

    const res = await axios.post('http://localhost:5000/api/blogs', blogData);
    window.location.href = '/';
  };

  return (
    <div className="container mt-4">
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="title" placeholder="Title" onChange={handleChange} />
        <textarea className="form-control mb-2" name="description" placeholder="Description" onChange={handleChange}></textarea>
        <input className="form-control mb-2" name="author" placeholder="Author" onChange={handleChange} />
        <input className="form-control mb-2" type="file" name="image" onChange={handleChange} />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
