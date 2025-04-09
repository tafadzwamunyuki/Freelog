import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/blogs/${id}`)
      .then(res => setBlog(res.data))
      .catch(err => console.error('Error fetching blog:', err));
  }, [id]);

  if (!blog) return <div className="container mt-4">Loading...</div>;

  return (
    <div className="container mt-4">
      <Link to="/" className="btn btn-secondary mb-3">← Back to Articles</Link>

      <div className="card mb-4">
        {blog.image && (
          <img
            src={`http://localhost:5000${blog.image}`}
            className="card-img-top"
            alt={blog.title}
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        )}
        <div className="card-body">
          <h3 className="card-title">{blog.title}</h3>
          <p className="card-text"><strong>Author:</strong> {blog.author}</p>

          {/* View Description Link */}
          <Link to={`/blog/${blog._id}/description`} className="btn btn-primary me-2">
            View Article
          </Link>

          {/* Included fragment for consistency 
          <Link to={`/blog/${blog._id}`} className="btn btn-info me-2">View</Link> */}
        </div>
      </div>
    </div>
  );
}
