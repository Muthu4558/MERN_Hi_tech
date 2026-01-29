import Blog from "../models/Blog.js";

export const createBlog = async (req, res) => {
  const { title, subtitle, category, content } = req.body;

  const blog = await Blog.create({
    title,
    subtitle,
    category,
    content,
    image: `/uploads/${req.file.filename}`,
  });

  res.status(201).json(blog);
};

export const updateBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  blog.title = req.body.title;
  blog.subtitle = req.body.subtitle;
  blog.category = req.body.category;
  blog.content = req.body.content;

  if (req.file) {
    blog.image = `/uploads/${req.file.filename}`;
  }

  const updated = await blog.save();
  res.json(updated);
};

export const getBlogs = async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
};

export const deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Blog deleted" });
};
