const User = require("../models/User");
const Album = require("../models/Album");
const Category = require("../models/Category");
const Song = require("../models/Song");
const Post = require("../models/Post");

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
}; //done

const getCategoryById = async (req, res, next) => {
  const categoryId = req.value.params.id;

  const category = await Category.findById(categoryId);
  if (!category)
    return res.status(404).json({ message: "Category does not exist" });

  const album = await Album.find({ _id: { $in: category.album } });

  const newAlbum = album.filter((item) => item.public === true);

  const song = await Song.find({ _id: { $in: category.song } });

  const newSong = song.filter((item) => item.public === true);

  const post = await Post.find({ _id: { $in: category.post } });

  const newPost = post.filter((item) => item.public === true);

  return res
    .status(200)
    .json({
      _id: category._id,
      name: category.name,
      tinydes: category.tinydes,
      album: newAlbum,
      song: newSong,
      post: newPost,
    });
};//done

const createCategory = async (req, res, next) => {
  const { categoryname, categorytinydes } = req.value.body;

  const newCategory = new Category({
    name: categoryname,
    tinydes: categorytinydes,
  });

  await newCategory.save();

  return res.status(201).json({ success: true });
}; // xoa

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
}; // xoa

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

  // const song = await Song.find({_id: {$in: category.song}})

  // if(song.length > 0)
  // {
  //     song.forEach((item) => {
  //         item.category.pull(categoryId)
  //     })
  //     await song.save()
  // }

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
};// xoa
module.exports = {
  getAllCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
