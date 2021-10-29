const User = require("../models/User");
const Post = require("../models/Post");

const getAllPostPassAndPublic = async (req, res, next) => {
  const post = await Post.find({pass: false, public: false });
  return res.status(200).json({ post });
};

const getPostPassAndPublicById = async (req, res, next) => {
  const postId = req.value.params.id;

  const post = await Post.findOne({ postId , pass: false, public: false });
  if (!post) return res.status(404).json({ message: "Post does not exist" });

  return res.status(200).json({
    // _id: post._id,
    // name: song.name,
    // image: song.image,
    // link: song.link,
    // public: song.public,
    // datecreate: song.datecreate,
    // dateupdate: song.dateupdate,
    // category: song.category,
    post
  });
}; // dang lam

const createPost = async (req, res, next) => {
  const userId = req.body.token.sub;

  const { namePost, tinydes, description, image, categoryId } = req.value.body;

  const user = await User.findById(userId);
  if (!user) res.status(404).json({ message: "User does not exist" });

  const category= await User.findById(categoryId)
  if(!category) res.status(404).json({ message: "Category does not exist" });

  const newPost = new Post({
    name: namePost,
    tinydes: tinydes,
    description:description,
    image: image,
  });

  newPost.category.push(category._id)
  newPost.owner = user._id;
  user.post.push(newPost._id);

  await newPost.save();
  await user.save();

  return res.status(201).json({ success: true });
}; // done

module.exports = {
  getAllPostPassAndPublic,
  getPostPassAndPublicById,
  createPost,
};
