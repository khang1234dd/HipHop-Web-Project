const User = require("../models/User");
const Song = require("../models/Song");

const getAllSongPublic = async (req, res, next) => {
  const song = await Song.find({ public: false });
  return res
    .status(200)
    .json({song});
}; //done

const getSongPublicById = async (req, res, next) => {
  const songId = req.value.params.id;

  const song = await Song.findOne({ songId, public: false });
  if (!song) return res.status(404).json({ message: "Song does not exist" });

  return res.status(200).json({
    _id: song._id,
    name: song.name,
    image: song.image,
    link: song.link,
    public: song.public,
    datecreate: song.datecreate,
    dateupdate: song.dateupdate,
    category: song.category,
  });
}; // dang lam

const createSong = async (req, res, next) => {
  const userId = req.body.token.sub;

  const { nameSong, image, link, categoryId } = req.value.body;

  const user = await User.findById(userId);
  if (!user) res.status(404).json({ message: "User does not exist" });

  const category= await User.findById(categoryId)
  if(!category) res.status(404).json({ message: "Category does not exist" });

  const newSong = new Song({
    name: nameSong,
    image: image,
    link: link,
  });

  newSong.category.push(category._id)
  newSong.owner = user._id;
  user.song.push(newSong._id);

  await newSong.save();
  await user.save();

  return res.status(201).json({ success: true });
}; // done

module.exports = {
  getAllSongPublic,
  getSongPublicById,
  createSong,
};
