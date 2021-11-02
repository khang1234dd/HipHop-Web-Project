const User = require("../models/User");
const Album = require("../models/Album");
const Post = require("../models/Post");
const Song = require("../models/Song");
const Category = require("../models/Category");

// user
const getAllUser = async (req, res, next) => {
  const users = await User.find({ role: 0 });
  return res.status(200).json({ users });
};

const getUserById = async (req, res, next) => {
  const userId = req.value.params.id;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  return res.status(200).json({ user });
};

//album
const getAllAlbum = async (req, res, next) => {
  const album = await Album.find({});
  return res.status(200).json({ album });
};

const getAlbumById = async (req, res, next) => {
  const albumId = req.value.params.id;

  const album = await Album.findById(albumId);

  if (!album) return res.status(404).json({ message: "Album does not exist" });

  return res.status(200).json({ album });
};

//category
const getAllCategory = async (req, res, next) => {
  const category = await Category.find({});
  return res.status(200).json({ category });
};

const getCategoryById = async (req, res, next) => {
  const categoryId = req.value.params.id;

  const category = await Category.findById(categoryId);

  if (!category) return res.status(404).json({ message: "Category does not exist" });

  return res.status(200).json({ category });
};

//Song
const getAllSong = async (req, res, next) => {
    const song = await Song.find({});
    return res.status(200).json({ song });
};
  
const getSongById = async (req, res, next) => {
  const songId = req.value.params.id;

  const song = await Song.findById(songId);

  if (!song) return res.status(404).json({ message: "Song does not exist" });

  return res.status(200).json({ song });
};

//Post
const getAllPost = async (req, res, next) => {
    const post = await Post.find({});
    return res.status(200).json({ post });
};
  
const getPostById = async (req, res, next) => {
  const postId = req.value.params.id;

  const post = await Post.findById(postId);

  if (!post) return res.status(404).json({ message: "Post does not exist" });

  return res.status(200).json({ post });
};
module.exports = {
  getAllUser,
  getUserById,
  getAllAlbum,
  getAlbumById,
  getAllCategory,
  getCategoryById,
  getAllSong,
  getSongById,
  getAllPost,
  getPostById,
};
