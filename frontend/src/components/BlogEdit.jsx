import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function BlogEdit() {
  const { id } = useParams();
  const [formData, setFormData] = useState({ title: '', description: '', author: '', image: null });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/blogs/${id}`)
      .then(res => setFormData(res.data));
  }, [id]);

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
    await axios.put(`http://localhost:5000/api/blogs/${id}`, blogData);
    window.location.href = '/';
  };

  return (
    <div className="container mt-4">
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="title" value={formData.title} onChange={handleChange} />
        <textarea className="form-control mb-2" name="description" value={formData.description} onChange={handleChange}></textarea>
        <input className="form-control mb-2" name="author" value={formData.author} onChange={handleChange} />
        <input className="form-control mb-2" type="file" name="image" onChange={handleChange} />
        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}
