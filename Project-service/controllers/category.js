const User = require("../models/User");
const Album = require("../models/Album");
const Category = require("../models/Category")
const Song = require("../models/Song");
const Post = require("../models/Post");


const getAllCategory = async (req, res, next) => {
  const category = await Category.find({});
  return res.status(200).json({ category });
}; //done

const getCategoryById = async (req, res, next) => {
  const categoryId = req.value.params.id;

  const category = await Category.findById(categoryId)
  if(!category) return res.status(404).json({message: 'Category does not exist'})

  const album = await Album.find({_id: {$in: category.album}})

  const newAlbum = album.filter((item) => item.public === true)

  const song = await Song.find({_id: {$in: category.song}})

  const newSong = song.filter((item) => item.public === true)

  const post = await Post.find({_id: {$in: category.post}})

  const newPost = post.filter((item) => item.public === true)
  

  return res.status(200).json({_id: category._id, name: category.name, tinydes: category.tinydes, album: newAlbum,song: newSong,post: newPost});
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

const updateCategory= async (req, res, next) => {

  const categoryId = req.value.params.id;

  const { categoryname, categorytinydes } = req.value.body;

  const category = await Category.findById(categoryId)
  if(!category) return res.status(404).json({message: 'Category does not exist'})

  category.name = categoryname
  category.tinydes = categorytinydes

  category.save()
  
  return res.status(200).json({ success: true });
}; // da test 

const deleteCategory = async (req, res, next) => {

    const categoryId = req.value.params.id;
    
    const category = await Category.findById(categoryId)
    if(!category) return res.status(404).json({message: 'Category does not exist'})

    const album = await Album.find({_id: {$in: category.album}})
    
    if(album.length > 0)
    {
        album.forEach((item) => {
            item.category.pull(categoryId)
        })
        await album.save()
    }

    const song = await Song.find({_id: {$in: category.song}})
    
    if(song.length > 0)
    {
        song.forEach((item) => {
            item.category.pull(categoryId)
        })
        await song.save()
    }

    const post = await Post.find({_id: {$in: category.post}})
    
    if(post.length > 0)
    {
        post.forEach((item) => {
            item.category.pull(categoryId)
        })
        await post.save()
    }

    await category.remove()
  
    return res.status(200).json({ success: true });
}; // da test

module.exports = {
    getAllCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
};
