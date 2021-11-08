const User = require("../models/User");
const Album = require("../models/Album");
const Song = require("../models/Song");
const Post = require("../models/Post");
const Category = require("../models/Category");
const { unlink } = require('fs/promises');

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

  const { nameAlbum, description, categoryId } = req.value.body;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  const category = await Category.findById(categoryId);

  if (!category)
    return res.status(404).json({ message: "Category does not exist" });

    console.log('user.js -> line 37')
  const newAlbum = new Album({
    name: nameAlbum,
    description: description,
    categoryId: categoryId
  });
  if(req.file){
    newAlbum.image = req.file.path
  }

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


  if(req.file){
    if(newAlbum1.image !== 'upload/image/3.png') await unlink(newAlbum1.image)
    newAlbum1.image = req.file.path
  }

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

  if (album.category.length > 0) {
    album.category.forEach(async (item) => {
      const categoryPlus = await Category.findById(item._id);
      if (!categoryPlus) res.status(404).json({ message: "Category does exist" });
      categoryPlus.album.pull(album._id);
      await categoryPlus.save();
    });
  }

  if(album.image !== 'upload/image/3.png'){
    await unlink(album.image)
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

const likePost = async (req, res, next) => {
  const userId = req.body.token.sub;

  const postId = req.value.params.idPost;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  const post = await Post.findById(postId);
  if (!post) return res.status(404).json({ message: "Post does not exist" });

  const checkPost = user.favoritepost.includes(postId);

  if (checkPost === true)
    return res.status(400).json({ message: "Post has like!" });

  user.favoritepost.push(post._id);

  post.favoriteuser.push(user._id);

  await user.save();

  await post.save();

  return res.status(200).json({ success: true });
};

const unlikePost = async (req, res, next) => {
  const userId = req.body.token.sub;

  const postId = req.value.params.idPost;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  const post = await Post.findById(postId);
  if (!post) return res.status(404).json({ message: "Post does not exist" });

  const checkPost = user.favoritepost.includes(postId);

  if (checkPost !== true)
    return res.status(404).json({ message: "Post has not like!" });

  user.favoritepost.pull(post._id);

  post.favoriteuser.pull(user._id);

  await user.save();

  await post.save();

  return res.status(200).json({ success: true });
};

const checklikePost = async (req, res, next) => {
  const userId = req.body.token.sub;

  const postId = req.value.params.idPost;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  const post = await Post.findById(postId);
  if (!post) return res.status(404).json({ message: "Post does not exist" });

  const checkPost = user.favoritepost.includes(postId);

  if (!checkPost) return res.status(200).json({ message: false });

  return res.status(200).json({ message: true });
};

const createPost = async (req, res, next) => {
  const userId = req.body.token.sub;

  const { namePost, tinydes, description, categoryId } = req.value.body;

  const user = await User.findById(userId);
  if (!user) res.status(404).json({ message: "User does not exist" });

  const category = await Category.findById(categoryId);
  if (!category) res.status(404).json({ message: "Category does not exist" });

  const newPost = new Post({
    name: namePost,
    tinydes: tinydes,
    description: description,
  });

  if(req.file){
    newPost.image = req.file.path
  }

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

  if(!req.file){
    if(newPost1 !== 'upload/image/3.png')
    await unlink(newPost1.image)
    newPost1.image = req.file.path
  }

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

  if(post.image !== 'upload/image/3.png'){
    await unlink(post.image)
  }

  user.post.pull(post._id);

  await post.remove();

  await user.save();

  return res.status(200).json({ success: true });
};

const commentPost = async (req, res, next) => {
  const userId = req.body.token.sub;

  const user = await User.findById(userId);
  if (!user) res.status(404).json({ message: "User does not exist" });

  const { content } = req.value.body;
  const postId = req.value.params.idPost;


  const comment = {"userId": userId, "content": content};
  await Post.findByIdAndUpdate(postId,{$push: {comment: comment}});

  // user.comment.push(post._id)

  // await user.save()

  return res.status(201).json({ success: true });
}; 

const updateCommentPost = async (req, res, next) => {
  const userId = req.body.token.sub;

  const user = await User.findById(userId);
  if (!user) res.status(404).json({ message: "User does not exist" });

  const { content } = req.value.body;
  const {idPost , idComment}= req.value.params;
  
  const post = await Post.findById(idPost)

  const comment = post.comment.find(item=>item.id = idComment)

  if(userId !== comment.userId) return res.status(403).json({message: "User cannot delete this comment"})

  await Post.updateOne({_id: idPost, "comment._id": idComment}, 
  {$set: {"comment.$.content": content , "comment.$.haveChange": true, "comment.$.date": Date.now() }});

  // user.comment.push(post._id)

  // await user.save()

  return res.status(201).json({ success: true });
}; 

const deleteCommentPost = async (req, res, next) => {
  const userId = req.body.token.sub;

  const user = await User.findById(userId);
  if (!user) res.status(404).json({ message: "User does not exist" });

  const {idPost, idComment} = req.value.params;

  const post = await Post.findById(idPost)

  const comment = post.comment.find(item=>item.id = idComment)

  if(userId !== comment.userId) return res.status(403).json({message: "User cannot delete this comment"})

  await Post.findByIdAndUpdate(idPost,{$pull: {comment: {_id: idComment}}});
  // user.comment.push(post._id)

  // await user.save()

  return res.status(201).json({ success: true });
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
  likePost,
  unlikePost,
  checklikePost,
  createPost,
  updatePost,
  deletePost,
  commentPost,
  updateCommentPost,
  deleteCommentPost,
};
