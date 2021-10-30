const User = require("../models/User");
const Album = require("../models/Album");
const Song = require("../models/Song");

const getAllUser = async (req, res, next) => {
  const users = await User.find({});
  return res.status(200).json({ users });
};

const getUserById = async (req, res, next) => {
  const userId = req.value.params.id;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  return res.status(200).json({ user });
};

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

  const { nameAlbum, image, description } = req.value.body;

  const user = await User.findById(userId);

  if (!user) return res.status(404).json({ message: "User does not exist" });

  const newAlbum = new Album({
    name: nameAlbum,
    image: image,
    description: description,
  });

  newAlbum.owner = user._id;

  await newAlbum.save();

  user.album.push(newAlbum._id);

  await user.save();

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


  const newAlbum1 = await Album.findByIdAndUpdate(albumId, newAlbum)
  
  newAlbum1.dateupdate = Date.now()

  newAlbum1.save()

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

  console.log("user.js --> line 140 --> song", song);

  album.song.push(song._id);
  song.album.push(album._id);

  album.dateupdate = Date.now;

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

  album.dateupdate = Date.now;

  await album.save();

  await song.save();

  return res.status(200).json({ success: true });
}; // chua test

module.exports = {
  getAllUser,
  getUserById,
  getAlbum,
  createAlbum,
  updateAlbum,
  deleteAlbum,
  addSongforAlbum,
  removeSonginAlbum,
};
