const User = require("../models/User");
const Album = require("../models/Album");
const Song = require("../models/Song");
const Post = require("../models/Post");
const Category = require("../models/Category");


const getAlbum = async (req, res, next) => {
  const userId = req.body.token.sub;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  const album = await Album.find({ _id: { $in: user.album } });

  console.log("user.js --> line 30 --> album", album);
  const song = await Song.find({ _id: { $in: album.song } });

  return res.status(200).json({ album, song });
};

const createAlbum = async (req, res, next) => {
  const userId = req.body.token.sub;

  const { nameAlbum, image, description, categoryId } = req.value.body;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  const category = await Category.findById(categoryId);

  if (!category)
    return res.status(404).json({ message: "Category does not exist" });

  const newAlbum = new Album({
    name: nameAlbum,
    image: image,
    description: description,
  });

  newAlbum.category.push(category._id);

  category.album.push(newAlbum._id);

  newAlbum.owner = user._id;

  user.album.push(newAlbum._id);

  await newAlbum.save();
  await user.save();
  await category.save();

  return res.status(201).json({ success: true });
};

const updateAlbum = async (req, res, next) => {
  const userId = req.body.token.sub;

  const albumId = req.value.params.id;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  const newAlbum = req.value.body;

  const check = user.album.includes(albumId);

  if (check === false)
    return res
      .status(404)
      .json({ message: "User with this album does not exist" });

  const newAlbum1 = await Album.findByIdAndUpdate(albumId, newAlbum);

  newAlbum1.dateupdate = Date.now();

  newAlbum1.save();

  return res.status(200).json({ success: true });
};

const deleteAlbum = async (req, res, next) => {
  const userId = req.body.token.sub;

  const albumId = req.value.params.id;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  const check = user.album.includes(albumId);

  if (check === false)
    return res
      .status(404)
      .json({ message: "User with this album does not exist" });

  const album = await Album.findById(albumId);
  if (!album) return res.status(404).json({ message: "Album does not exist" });

  const category = await Category.find({ _id: { $in: album.category } });

  if (category.length > 0) {
    category.forEach((item) => {
      item.album.pull(album._id);
    });
    await category.save();
  }

  user.album.pull(album);

  await album.remove();

  await user.save();

  return res.status(200).json({ success: true });
};

const addSongforAlbum = async (req, res, next) => {
  const userId = req.body.token.sub;

  const albumId = req.value.params.idAlbum;

  const { songId } = req.value.body;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  const check = user.album.includes(albumId);

  if (check === false)
    return res
      .status(404)
      .json({ message: "User with this album does not exist" });

  const album = await Album.findById(albumId);
  if (!album) return res.status(404).json({ message: "Album does not exist" });

  const song = await Song.findById(songId);
  if (!song) return res.status(404).json({ message: "Song does not exist" });

  const checkSong = song.album.includes(albumId);

  if (checkSong === true)
    return res.status(400).json({ message: "Song with this album have exist" });

  console.log("user.js --> line 140 --> song", song);

  album.song.push(song._id);
  song.album.push(album._id);

  album.dateupdate = Date.now();

  await album.save();

  await song.save();

  return res.status(200).json({ success: true });
};

const removeSonginAlbum = async (req, res, next) => {
  const userId = req.body.token.sub;

  const albumId = req.value.params.idAlbum;

  const { songId } = req.value.body;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  const checkAlbum = user.album.includes(albumId);

  if (checkAlbum === false)
    return res
      .status(404)
      .json({ message: "User with this album does not exist" });

  const album = await Album.findById(albumId);
  if (!album) return res.status(404).json({ message: "Album does not exist" });

  const song = await Song.findById(songId);
  if (!song) return res.status(404).json({ message: "Song does not exist" });

  const checkSong = album.song.includes(song._id);

  if (checkSong === false)
    return res
      .status(404)
      .json({ message: "Song with this album does not exist" });

  album.song.pull(song._id);
  song.album.pull(album._id);

  album.dateupdate = Date.now();

  await album.save();

  await song.save();

  return res.status(200).json({ success: true });
};

const likeAlbum = async (req, res, next) => {
  const userId = req.body.token.sub;

  const albumId = req.value.params.idAlbum;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  const album = await Album.findById(albumId);
  if (!album) return res.status(404).json({ message: "Album does not exist" });

  const checkAlbum = user.favoritealbum.includes(albumId);

  if (checkAlbum === true)
    return res.status(400).json({ message: "Album has like!" });

  user.favoritealbum.push(album._id);

  album.favoriteuser.push(user._id);

  await user.save();

  await album.save();

  return res.status(200).json({ success: true });
};

const unlikeAlbum = async (req, res, next) => {
  const userId = req.body.token.sub;

  const albumId = req.value.params.idAlbum;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  const album = await Album.findById(albumId);
  if (!album) return res.status(404).json({ message: "Album does not exist" });

  const checkAlbum = user.favoritealbum.includes(albumId);

  if (checkAlbum !== true)
    return res.status(404).json({ message: "Album has not like!" });

  user.favoritealbum.pull(album._id);

  album.favoriteuser.pull(user._id);

  await user.save();

  await album.save();

  return res.status(200).json({ success: true });
};

const checklikeAlbum = async (req, res, next) => {
  const userId = req.body.token.sub;

  const albumId = req.value.params.idAlbum;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  const album = await Album.findById(albumId);
  if (!album) return res.status(404).json({ message: "Album does not exist" });

  const checkAlbum = user.favoritealbum.includes(albumId);

  if (!checkAlbum) return res.status(200).json({ message: false });

  return res.status(200).json({ message: true });
};

const likeSong = async (req, res, next) => {
  const userId = req.body.token.sub;

  const songId = req.value.params.idSong;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  const song = await Song.findById(songId);
  if (!song) return res.status(404).json({ message: "Song does not exist" });

  const checkSong = user.favoritesong.includes(songId);

  if (checkSong === true)
    return res.status(400).json({ message: "Song has like!" });

  user.favoritesong.push(song._id);

  song.favoriteuser.push(user._id);

  await user.save();

  await song.save();

  return res.status(200).json({ success: true });
};

const unlikeSong = async (req, res, next) => {
  const userId = req.body.token.sub;

  const songId = req.value.params.idSong;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  const song = await Song.findById(songId);
  if (!song) return res.status(404).json({ message: "Song does not exist" });

  const checkSong = user.favoritesong.includes(songId);

  if (checkSong !== true)
    return res.status(404).json({ message: "Song has not like!" });

  user.favoritesong.pull(song._id);

  song.favoriteuser.pull(user._id);

  await user.save();

  await song.save();

  return res.status(200).json({ success: true });
};

const checklikeSong = async (req, res, next) => {
  const userId = req.body.token.sub;

  const songId = req.value.params.idSong;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  const song = await Song.findById(songId);
  if (!song) return res.status(404).json({ message: "Song does not exist" });

  const checkSong = user.favoritesong.includes(songId);

  if (!checkSong) return res.status(200).json({ message: false });

  return res.status(200).json({ message: true });
};

const createPost = async (req, res, next) => {
  const userId = req.body.token.sub;

  const { namePost, tinydes, description, image, categoryId } = req.value.body;

  const user = await User.findById(userId);
  if (!user) res.status(404).json({ message: "User does not exist" });

  const category = await Category.findById(categoryId);
  if (!category) res.status(404).json({ message: "Category does not exist" });

  const newPost = new Post({
    name: namePost,
    tinydes: tinydes,
    description: description,
    image: image,
  });

  newPost.category.push(category._id);
  newPost.owner = user._id;
  category.post.push(newPost._id);
  user.post.push(newPost._id);

  await newPost.save();
  await user.save();
  await category.save();

  return res.status(201).json({ success: true });
}; // done

const updatePost = async (req, res, next) => {
  const userId = req.body.token.sub;

  const postId = req.value.params.id;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  const newPost = req.value.body;

  const check = user.post.includes(postId);

  if (check === false)
    return res
      .status(404)
      .json({ message: "User with this post does not exist" });

  const newPost1 = await Post.findByIdAndUpdate(postId, newPost);

  newPost1.dateupdate = Date.now();

  newPost1.save();

  return res.status(200).json({ success: true });
};

const deletePost = async (req, res, next) => {
  const userId = req.body.token.sub;

  const postId = req.value.params.id;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  const check = user.post.includes(postId);

  if (check === false)
    return res
      .status(404)
      .json({ message: "User with this post does not exist" });

  const post = await Post.findById(postId);
  if (!post) return res.status(404).json({ message: "Post does not exist" });

  if (post.category.length > 0) {
    post.category.forEach(async (item) => {
      const categoryPlus = await Category.findById(item._id);
      if (!categoryPlus)
        res.status(404).json({ message: "Category does exist" });
      categoryPlus.post.pull(post._id);
      await categoryPlus.save();
    });
  }

  user.post.pull(post._id);

  await post.remove();

  await user.save();

  return res.status(200).json({ success: true });
};

module.exports = {
  getAlbum,
  createAlbum,
  updateAlbum,
  deleteAlbum,
  addSongforAlbum,
  removeSonginAlbum,
  likeAlbum,
  unlikeAlbum,
  checklikeAlbum,
  likeSong,
  unlikeSong,
  checklikeSong,
  createPost,
  updatePost,
  deletePost,
};
