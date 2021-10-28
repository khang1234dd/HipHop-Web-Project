const User = require("../models/User");
const Album = require("../models/Album");
const Category = require("../models/Category")

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

  return res.status(200).json({_id: category._id, newAlbum});
};

const createCategory = async (req, res, next) => {

  const { categoryname, categorytinydes } = req.value.body;

  const newCategory = new Category({
    name: categoryname,
    tinydes: categorytinydes,
  });

  await newCategory.save();

  console.log("category.js --> line:34 --> newCategory", newCategory);

  return res.status(201).json({ success: true });
}; // da test

const updateCategory= async (req, res, next) => {

  const categoryId = req.value.params.id;

  const { categoryname, categorytinydes } = req.value.body;

  await Category.findByIdAndUpdate(categoryId, {
    name: categoryname,
    tinydes: categorytinydes,
  });

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
    await category.remove()
  
    return res.status(200).json({ success: true });
}; // da test ( luu y chi moi co album)

module.exports = {
    getAllCategory,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
};
