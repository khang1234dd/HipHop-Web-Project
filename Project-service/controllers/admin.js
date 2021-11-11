const User = require("../models/User");
const Album = require("../models/Album");
const Post = require("../models/Post");
const Song = require("../models/Song");
const Category = require("../models/Category");
const { unlink } = require('fs/promises');

// user
const getAllUser = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 10

    const users = await User.find({role: 0}).skip(skipPage).limit(10)
    return res.status(200).json({users})
  }
  else if(_page && _limit){
    _page = parseInt(_page)
    _limit = parseInt(_limit)
    var skipPage = (_page - 1) * _limit

    const users = await User.find({role: 0}).skip(skipPage).limit(_limit)
    return res.status(200).json({users})
  }
  else{
    const users = await User.find({ role: 0 });
    return res.status(200).json({ users, pagination: '?_page=1&_limit=10' });
  }
}; //done

const getUserById = async (req, res, next) => {
  const userId = req.value.params.id;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  return res.status(200).json({ user });
}; //done

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
}; //done

//album
const getAllAlbum = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 10

    const album = await Album.find({}).skip(skipPage).limit(10)
    return res.status(200).json({album})
  }
  else if(_page && _limit){
    _page = parseInt(_page)
    _limit = parseInt(_limit)
    var skipPage = (_page - 1) * _limit

    const album = await Album.find({}).skip(skipPage).limit(_limit)
    return res.status(200).json({album})
  }
  else{
    const album = await Album.find({});
    return res.status(200).json({ album, pagination: '?_page=1&_limit=10' });
  }
}; // done

const getAlbumById = async (req, res, next) => {
  const albumId = req.value.params.id;

  const album = await Album.findById(albumId);

  if (!album) return res.status(404).json({ message: "Album does not exist" });

  return res.status(200).json({ album });
};//done

const changeAlbumPublic = async (req, res, next) => {
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
}; //done

const changeAlbumHot = async (req, res, next) => {
  const albumId = req.value.params.id;

  const album = await Album.findById(albumId);

  if (!album) return res.status(404).json({ message: "Album does not exist" });

  if(album.hot === true){
    album.hot = false
  }
  else{
    album.hot = true
  }

  await album.save()

  return res.status(200).json({success: true});
}; //done



//category
const getAllCategory = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 10

    const category = await Category.find({}).skip(skipPage).limit(10)
    return res.status(200).json({category})
  }
  else if(_page && _limit){
    _page = parseInt(_page)
    _limit = parseInt(_limit)
    var skipPage = (_page - 1) * _limit

    const category = await Category.find({}).skip(skipPage).limit(_limit)
    return res.status(200).json({category})
  }
  else{
    const category = await Category.find({});
    return res.status(200).json({ category, pagination: '?_page=1&_limit=10' });
  }

};//done

const getCategoryById = async (req, res, next) => {
  const categoryId = req.value.params.id;

  const category = await Category.findById(categoryId);

  if (!category) return res.status(404).json({ message: "Category does not exist" });

  return res.status(200).json({ category });
};//done

const createCategory = async (req, res, next) => {
  const { categoryname, categorytinydes } = req.value.body;

  const newCategory = new Category({
    name: categoryname,
    tinydes: categorytinydes,
  });

  await newCategory.save();

  return res.status(201).json({ success: true });
}; // done

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
}; // done

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
}; //done



//Song
const getAllSong = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 10

    const song = await Song.find({}).skip(skipPage).limit(10)
    return res.status(200).json({song})
  }
  else if(_page && _limit){
    _page = parseInt(_page)
    _limit = parseInt(_limit)
    var skipPage = (_page - 1) * _limit

    const song = await Song.find({}).skip(skipPage).limit(_limit)
    return res.status(200).json({song})
  }
  else{
    const song = await Song.find({});
    return res.status(200).json({ song, pagination: '?_page=1&_limit=10' });
  }
};//done
  
const getSongById = async (req, res, next) => {
  const songId = req.value.params.id;

  const song = await Song.findById(songId);

  if (!song) return res.status(404).json({ message: "Song does not exist" });

  return res.status(200).json({ song });
};//done

const createSong = async (req,res,next) => {
  const userId = req.body.token.sub;

  const { nameSong, link, categoryId, ownerSong } = req.value.body;

  const user = await User.findById(userId);
  if (!user) res.status(404).json({ message: "User does not exist" });

  const category= await Category.findById(categoryId)
  if(!category) res.status(404).json({ message: "Category does not exist" });

  const newSong = new Song({
    name: nameSong,
    link: link,
    ownersong: ownerSong,
  });

  if(req.file){
    newSong.image = req.file.path
  }

  newSong.category.push(category._id)
  newSong.owner = user._id;
  user.song.push(newSong._id);
  category.song.push(newSong._id)

  await newSong.save();
  await user.save();
  await category.save();

  return res.status(201).json({ success: true });
}//done

const updateSong = async (req,res,next) => {

  const newSong = req.value.body;
  const songId = req.value.params.id;

  if(newSong.categoryId){
    const category= await User.findById(newSong.categoryId)
    if(!category) res.status(404).json({ message: "Category does not exist" });
  }

  const updateSong = await Song.findByIdAndUpdate(songId, newSong)

  if(req.file){
    if(updateSong.image !== 'upload/image/2.jpg') await unlink(updateSong.image)
    updateSong.image = req.file.path
  }

  await updateSong.save()

  return res.status(200).json({ success: true });
} // done

const changeSongHot = async (req, res, next) => {
  const songId = req.value.params.id;

  const song = await Song.findById(songId);

  if (!song) return res.status(404).json({ message: "Song does not exist" });

  if(song.hot === true){
    song.hot = false
  }
  else{
    song.hot= true
  }
  await song.save()

  return res.status(200).json({ success: true });
};//done
const changeSongPublic = async (req, res, next) => {
  const songId = req.value.params.id;

  const song = await Song.findById(songId);

  if (!song) return res.status(404).json({ message: "Song does not exist" });

  if(song.public === true){
    song.public = false
  }
  else{
    song.public= true
  }
  await song.save()

  return res.status(200).json({ success: true });
};//done

const deleteSong = async (req,res,next) => {
  const userId = req.body.token.sub;

  const songId = req.value.params.id;

  const user = await User.findById(userId);
  if (!user) res.status(404).json({ message: "User does not exist" });

  const song = await Song.findById(songId)

  user.song.pull(song._id)

  await user.save()

  if (song.album.length > 0) {
    song.album.forEach(async (item) => {
      const albumPlus = await Album.findById(item._id);
      albumPlus.song.pull(song._id);
      await albumPlus.save();
    });
  }

  if (song.category.length > 0) {
    song.category.forEach(async (item) => {
      const categoryPlus = await Category.findById(item._id);
      categoryPlus.song.pull(song._id);
      await categoryPlus.save();
    });
  }

  if (song.favoriteuser.length > 0) {
    song.favoriteuser.forEach(async (item) => {
      const userPlus = await User.findById(item._id);
      userPlus.favoritesong.pull(song._id);
      await userPlus.save();
    });
  }

  if(song.image !== 'upload/image/2.jpg'){
    await unlink(song.image)
  }

  await song.remove()

  return res.status(200).json({ success: true });
}//done

//Post
const getAllPost = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 10

    const post = await Post.find({}).skip(skipPage).limit(10)
    return res.status(200).json({post})
  }
  else if(_page && _limit){
    _page = parseInt(_page)
    _limit = parseInt(_limit)
    var skipPage = (_page - 1) * _limit

    const post = await Post.find({}).skip(skipPage).limit(_limit)
    return res.status(200).json({post})
  }
  else{
    const post = await Post.find({});
    return res.status(200).json({ post, pagination: '?_page=1&_limit=10' });
  }
};//done
  
const getPostById = async (req, res, next) => {
  const postId = req.value.params.id;

  const post = await Post.findById(postId);

  if (!post) return res.status(404).json({ message: "Post does not exist" });

  return res.status(200).json({ post });
};//done

const changePostPass = async (req, res, next) => {
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
  
  return res.status(200).json({ success: true });
};//done

const changePostPublic = async (req, res, next) => {
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

  return res.status(200).json({ success: true });
};//done

const changePostBanned = async (req, res, next) => {
  const postId = req.value.params.id;

  const post = await Post.findById(postId);

  if (!post) return res.status(404).json({ message: "Post does not exist" });

  if(post.banned === true){
    post.banned = false
  }
  else{
    post.banned= true
  }
  await post.save()

  return res.status(200).json({ success: true });
};//done

const changePostHot = async (req, res, next) => {
  const postId = req.value.params.id;

  const post = await Post.findById(postId);

  if (!post) return res.status(404).json({ message: "Post does not exist" });

  if(post.hot === true){
    post.hot = false
  }
  else{
    post.hot= true
  }
  await post.save()

  return res.status(200).json({ success: true });
};//done

const deleteComment = async (req, res, next) => {
  const {idPost, idComment} = req.value.params;

  const post = await Post.find({_id: idPost, "comment._id": idComment})

  if(post.length  === 0) return res.status(404).json({message: 'Post and comment do not exist'})
  
  const newPost = await Post.findByIdAndUpdate(idPost,{$pull: {comment: {_id: idComment}}});

  return res.status(200).json({ success: true });
}; //done
module.exports = {
  getAllUser,
  getUserById,
  changeLockUser,

  getAllAlbum,
  getAlbumById,
  changeAlbumPublic,
  changeAlbumHot,

  getAllCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,

  getAllSong,
  getSongById,
  createSong,
  updateSong,
  changeSongHot,
  changeSongPublic,
  deleteSong,

  getAllPost,
  getPostById,
  changePostPass,
  changePostPublic,
  changePostBanned,
  changePostHot,
  deleteComment,
};
