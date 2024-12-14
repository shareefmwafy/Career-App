const Post = require("../models/posts");
const User = require("../models/user2");

const createPost = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    const post = new Post({
      user: user._id,
      title: req.body.title,
      content: req.body.content,
      careerCategory: req.body.careerCategory,
      location: req.body.location,
    });

    if (req.body.commentText) {
      post.comments.push({
        text: req.body.commentText,
        user: user._id,
        commentDate: new Date(),
      });
    }
    await post.save();
    res.status(201).send(post);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(400).send({ error: "Error creating post" });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("user", "username firstName lastName");
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send({ error: "Error fetching posts" });
  }
};

module.exports = {
  createPost,
  getAllPosts,
};

