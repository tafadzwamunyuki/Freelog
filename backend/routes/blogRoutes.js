import express from 'express';
import {
  createBlog,
  getBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
} from '../controllers/blogController.js';

const router = express.Router();

router.post('/', createBlog);
router.get('/', getBlogs);
router.get('/:id', getBlog);
router.put('/:id', createBlog); // With file upload
router.delete('/:id', deleteBlog);

export default router;
