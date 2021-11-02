const User = require("../models/User");
const Album = require("../models/Album");

const getAllAlbumPublic = async (req, res, next) => {
  const album = await Album.find({public: true});
  return res.status(200).json({ album });
}; //done

const getAlbumPublicById = async (req, res, next) => {
  const albumId = req.value.params.id
  const album = await Album.find({_id: albumId,public: true});
  return res.status(200).json({ album });
}; //done



module.exports = {
    getAllAlbumPublic,
    getAlbumPublicById,
};
