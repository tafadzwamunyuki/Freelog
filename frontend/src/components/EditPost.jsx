import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: '',
    description: '',
    author: '',
  });

  useEffect(() => {
    // Fetch existing post
    axios.get(`http://localhost:5000/api/blogs/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.error("Error fetching post:", err));
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setPost(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/blogs/${id}`, post)
      .then(() => navigate('/'))
      .catch(err => console.error("Error updating post:", err));
  };

  return (
    <div className="container mt-4">
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title</label>
          <input type="text" name="title" value={post.title} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea name="description" value={post.description} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Author</label>
          <input type="text" name="author" value={post.author} onChange={handleChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
