import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function BlogDescription() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/blogs/${id}`)
      .then(res => setBlog(res.data))
      .catch(err => console.error('Error fetching blog description:', err));
  }, [id]);

  if (!blog) return <div className="container mt-4">Loading description...</div>;

  return (
    <div className="container mt-4">
      <Link to={`/blog/${id}`} className="btn btn-secondary mb-3">← Back to Article</Link>
      <div className="card-body">
        <h4 className="mb-3"> {blog.title}</h4>
        <p>{blog.description}</p>
      </div>
    </div>
  );
}
