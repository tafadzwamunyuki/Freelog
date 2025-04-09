// Example Express PUT route
router.put('/api/blogs/:id', upload.single('image'), async (req, res) => {
  try {
    const { title, description, author } = req.body;
    const blog = await Blog.findById(req.params.id);

    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    blog.title = title;
    blog.description = description;
    blog.author = author;

    if (req.file) {
      blog.image = `/uploads/${req.file.filename}`;
    }

    await blog.save();
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Error updating blog post' });
  }
});
