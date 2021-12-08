const User = require("../models/User");
const Album = require("../models/Album");
const Post = require("../models/Post");
const Song = require("../models/Song");
const Category = require("../models/Category");
const VideoMusic = require("../models/VideoMusic");
const { unlink } = require('fs/promises');
const {deleteFile} = require("../common/deleteFile");

// user
const getAllUser = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 10

    const users = await User.find({role: 0}).skip(skipPage).limit(10)
    const userAll = await User.find({role: 0})
    return res.status(200).json({users, pagination: {_page: _page, _limit: _limit, _total: userAll.length}})
  }
  else if(_page && _limit){
    _page = parseInt(_page)
    _limit = parseInt(_limit)
    var skipPage = (_page - 1) * _limit

    const users = await User.find({role: 0}).skip(skipPage).limit(_limit)
    const userAll = await User.find({role: 0})
    return res.status(200).json({users, pagination: {_page: _page, _limit: _limit, _total: userAll.length}})
  }
  else{
    const users = await User.find({ role: 0 })
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
    const categoryAll = await Category.find({})
    const category = await Category.find({}).skip(skipPage).limit(10)
    
    return res.status(200).json({category, pagination: {_page: _page, _limit: _limit, _total: categoryAll.length}})
  }
  else if(_page && _limit){
    _page = parseInt(_page)
    _limit = parseInt(_limit)
    var skipPage = (_page - 1) * _limit
    const categoryAll = await Category.find({})
    const category = await Category.find({}).skip(skipPage).limit(_limit)
    return res.status(200).json({category,pagination: {_page: _page, _limit: _limit, _total: categoryAll.length} })
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

  await category.save();

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
    const songAll = await Song.find({})
    return res.status(200).json({song,pagination: {_page: _page, _limit: _limit, _total: songAll.length}})
  }
  else if(_page && _limit){
    _page = parseInt(_page)
    _limit = parseInt(_limit)
    var skipPage = (_page - 1) * _limit
    const songAll = await Song.find({})
    const song = await Song.find({}).skip(skipPage).limit(_limit)
    return res.status(200).json({song,pagination: {_page: _page, _limit: _limit, _total: songAll.length}})
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

  const { nameSong, categoryId, ownerSong } = req.body;

  const user = await User.findById(userId);
  if (!user) res.status(404).json({ message: "User does not exist" });

  const category= await Category.findById(categoryId)
  if(!category) res.status(404).json({ message: "Category does not exist" });

  const newSong = new Song({
    name: nameSong,
    ownersong: ownerSong,
  });

  if (req.file) {
    newSong.link = req.file.firebaseUrl
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

  if(newSong.category){
    const category= await Category.findById(newSong.category)
    if(!category) res.status(404).json({ message: "Category does not exist" });
  }

  const updateSong = await Song.findByIdAndUpdate(songId, newSong)

  await updateSong.save()

  return res.status(200).json({ success: true });
} // done

const updateSongImage = async (req,res,next) => {

  const songId = req.value.params.id;

  const updateSong = await Song.findById(songId)

  if(req.file){
    if(updateSong.image !== '') deleteFile(updateSong.image)
    updateSong.image = req.file.firebaseUrl
  } else{
    res.status(400).json({message:'Please select the file image you want to upload'})
  }


  await updateSong.save()

  return res.status(200).json({ success: true });
} // done

const updateSongFile = async (req,res,next) => {

  const songId = req.value.params.id;

  const updateSong = await Song.findById(songId)


  if(req.file){
    if(updateSong.link !== '') deleteFile(updateSong.link)
    updateSong.link = req.file.firebaseUrl
  } else{
    res.status(400).json({message:'Please select the file song you want to upload'})
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

  if(song.image !== '') deleteFile(song.image)
  if(song.link !== '') deleteFile(song.link)

  await song.remove()

  return res.status(200).json({ success: true });
}//done

//Post
const getAllPost = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 10
    const postAll = await Post.find({});
    const post = await Post.find({}).skip(skipPage).limit(10)
    .populate("owner")
    .populate({path: "category"})
    .populate({path: "favoriteuser"})
    .populate({path: "comment"})
    return res.status(200).json({post, pagination: {_page: _page, _limit: _limit, _total: postAll.length}})
  }
  else if(_page && _limit){
    _page = parseInt(_page)
    _limit = parseInt(_limit)
    var skipPage = (_page - 1) * _limit

    const postAll = await Post.find({});
    const post = await Post.find({}).skip(skipPage).limit(_limit)
    .populate("owner")
    .populate({path: "category"})
    .populate({path: "favoriteuser"})
    .populate({path: "comment"})
    return res.status(200).json({post, pagination: {_page: _page, _limit: _limit, _total: postAll.length}})
  }
  else{
    const post = await Post.find({})
    .populate("owner")
    .populate({path: "category"})
    .populate({path: "favoriteuser"})
    .populate({path: "comment"})
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

//Song
const getAllVideoMusic = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 10

    const video = await VideoMusic.find({}).skip(skipPage).limit(10)
    const videoAll = await VideoMusic.find({})
    return res.status(200).json({video,pagination: {_page: _page, _limit: _limit, _total: videoAll.length}})
  }
  else if(_page && _limit){
    _page = parseInt(_page)
    _limit = parseInt(_limit)
    var skipPage = (_page - 1) * _limit
    const videoAll = await VideoMusic.find({})
    const video = await VideoMusic.find({}).skip(skipPage).limit(_limit)
    return res.status(200).json({video,pagination: {_page: _page, _limit: _limit, _total: videoAll.length}})
  }
  else{
    const video = await VideoMusic.find({});
    return res.status(200).json({ video, pagination: '?_page=1&_limit=10' });
  }
};//done

const getVideoMusicById = async (req, res, next) => {
  const videoId = req.value.params.id;

  const video = await VideoMusic.findById(videoId);

  if (!video) return res.status(404).json({ message: "Video Music does not exist" });

  return res.status(200).json({ video });
};//done

const createVideoMusic = async (req,res,next) => {
  const userId = req.body.token.sub;

  const { nameVideo, categoryId, ownerVideo, embedId } = req.value.body;

  const user = await User.findById(userId);
  if (!user) res.status(404).json({ message: "User does not exist" });

  const category= await Category.findById(categoryId)
  if(!category) res.status(404).json({ message: "Category does not exist" });

  const newVideo = new VideoMusic({
    name: nameVideo,
    ownervideo: ownerVideo,
    link: embedId,
  });

  newVideo.category.push(category._id)
  newVideo.owner = user._id;
  user.videomusic.push(newVideo._id);
  category.videomusic.push(newVideo._id)

  await newVideo.save();
  await user.save();
  await category.save();

  return res.status(201).json({ success: true });
}//done

const updateVideoMusic = async (req,res,next) => {

  const newVideo = req.value.body;
  const videoId = req.value.params.id;

  if(newVideo.category){
    const category= await Category.findById(newVideo.category)
    if(!category) res.status(404).json({ message: "Category does not exist" });
  }

  const updateVideo = await VideoMusic.findByIdAndUpdate(videoId, newVideo)

  await updateVideo.save()

  return res.status(200).json({ success: true });
} // done

const updateVideoMusicImage = async (req,res,next) => {

  const videoId = req.value.params.id;

  const updateVideo = await VideoMusic.findById(videoId)

  if(req.file){
    if(updateVideo.image !== '') deleteFile(updateVideo.image)
    updateVideo.image = req.file.firebaseUrl
  } else{
    res.status(400).json({message:'Please select the file image you want to upload'})
  }


  await updateVideo.save()

  return res.status(200).json({ success: true });
} // done

const changeVideoMusicHot = async (req, res, next) => {
  const videoId = req.value.params.id;

  const video = await VideoMusic.findById(videoId);

  if (!video) return res.status(404).json({ message: "Video Music does not exist" });

  if(video.hot === true){
    video.hot = false
  }
  else{
    video.hot= true
  }
  await video.save()

  return res.status(200).json({ success: true });
};//done

const changeVideoMusicPublic = async (req, res, next) => {
  const videoId = req.value.params.id;

  const video = await VideoMusic.findById(videoId);

  if (!video) return res.status(404).json({ message: "Video Music does not exist" });

  if(video.public === true){
    video.public = false
  }
  else{
    video.public= true
  }
  await video.save()

  return res.status(200).json({ success: true });
};//done

const deleteVideoMusic = async (req,res,next) => {
  const userId = req.body.token.sub;

  const videoId = req.value.params.id;

  const user = await User.findById(userId);
  if (!user) res.status(404).json({ message: "User does not exist" });

  const video = await VideoMusic.findById(videoId)

  user.videomusic.pull(video._id)

  await user.save()


  if (video.category.length > 0) {
    video.category.forEach(async (item) => {
      const categoryPlus = await Category.findById(item._id);
      categoryPlus.videomusic.pull(video._id);
      await categoryPlus.save();
    });
  }

  if (video.favoriteuser.length > 0) {
    video.favoriteuser.forEach(async (item) => {
      const userPlus = await User.findById(item._id);
      userPlus.favoritevideomusic.pull(video._id);
      await userPlus.save();
    });
  }

  if(video.image !== '') deleteFile(video.image)

  await video.remove()

  return res.status(200).json({ success: true });
}//done

const statistic = async (req, res, next) => {
  
    const users = await User.find({})
    const videomusic = await VideoMusic.find({})
    const song = await Song.find({})
    const post = await Post.find({})
    return res.status(200).json({ users: users.length,videomusic: videomusic.length, song: song.length, post: post.length  });

}


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
  updateSongImage,
  updateSongFile,
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

  getAllVideoMusic,
  getVideoMusicById,
  createVideoMusic,
  updateVideoMusic,
  updateVideoMusicImage,
  changeVideoMusicHot,
  changeVideoMusicPublic,
  deleteVideoMusic,

  statistic,
};
