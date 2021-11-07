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

const changeLockUser = async (req, res, next) => {
  const userId = req.value.params.id;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  if(user.lock === true){
    user.lock= false
  }
  else{
    user.lock= true
  }
  await user.save()
  return res.status(200).json({ success: true });
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

const changePublicAlbum = async (req, res, next) => {
  const albumId = req.value.params.id;

  const album = await Album.findById(albumId);

  if (!album) return res.status(404).json({ message: "Album does not exist" });

  if(album.public === true){
    album.public = false
  }
  else{
    album.public = true
  }

  await album.save()

  return res.status(200).json({success: true});
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

const createCategory = async (req, res, next) => {
  const { categoryname, categorytinydes } = req.value.body;

  const newCategory = new Category({
    name: categoryname,
    tinydes: categorytinydes,
  });

  await newCategory.save();

  return res.status(201).json({ success: true });
}; // da test

const updateCategory = async (req, res, next) => {
  const categoryId = req.value.params.id;

  const { categoryname, categorytinydes } = req.value.body;

  const category = await Category.findById(categoryId);
  if (!category)
    return res.status(404).json({ message: "Category does not exist" });

  category.name = categoryname;
  category.tinydes = categorytinydes;

  category.save();

  return res.status(200).json({ success: true });
}; // da test

const deleteCategory = async (req, res, next) => {
  const categoryId = req.value.params.id;

  const category = await Category.findById(categoryId);
  if (!category)
    return res.status(404).json({ message: "Category does not exist" });

  if (category.album.length > 0) {
    category.album.forEach(async (item) => {
      const albumPlus = await Album.findById(item._id);
      if (!albumPlus) res.status(404).json({ message: "Album does exist" });
      albumPlus.category.pull(category._id);
      await albumPlus.save();
    });
  }

  if (category.song.length > 0) {
    category.song.forEach(async (item) => {
      const songPlus = await Song.findById(item._id);
      if (!songPlus) res.status(404).json({ message: "Song does exist" });
      songPlus.category.pull(category._id);
      await songPlus.save();
    });
  }

  if (category.post.length > 0) {
    category.post.forEach(async (item) => {
      const postPlus = await Post.findById(item._id);
      if (!postPlus) res.status(404).json({ message: "Post does exist" });
      postPlus.category.pull(category._id);
      await postPlus.save();
    });
  }

  await category.remove();

  return res.status(200).json({ success: true });
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

const changePass = async (req, res, next) => {
  const postId = req.value.params.id;

  const post = await Post.findById(postId);

  if (!post) return res.status(404).json({ message: "Post does not exist" });

  if(post.pass === true){
    post.pass = false
  }
  else{
    post.pass= true
  }
  await post.save()
  
  return res.status(200).json({ post });
};

const changePublic = async (req, res, next) => {
  const postId = req.value.params.id;

  const post = await Post.findById(postId);

  if (!post) return res.status(404).json({ message: "Post does not exist" });

  if(post.public === true){
    post.public = false
  }
  else{
    post.public= true
  }
  await post.save()

  return res.status(200).json({ post });
};
const deleteComment = async (req, res, next) => {
  const {idPost, idComment} = req.value.params;

  const post = await Post.findById(idPost);

  if (!post) return res.status(404).json({ message: "Post does not exist" });

  const comment = await Post.comment.findById(idComment);

  if (!comment) return res.status(404).json({ message: "Comment does not exist" });

  if(post.public === true){
    post.public = false
  }
  else{
    post.public= true
  }
  await post.save()

  return res.status(200).json({ post });
}; // chua xong
module.exports = {
  getAllUser,
  getUserById,
  changeLockUser,

  getAllAlbum,
  getAlbumById,
  changePublicAlbum,

  getAllCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,

  getAllSong,
  getSongById,

  getAllPost,
  getPostById,
  changePass,
  changePublic,
  deleteComment,
};
