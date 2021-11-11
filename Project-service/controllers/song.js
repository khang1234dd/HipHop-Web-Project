const User = require("../models/User");
const Song = require("../models/Song");

const getAllSongPublic = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 10

    const song = await Song.find({public: true}).skip(skipPage).limit(10)
    return res.status(200).json({song})
  }
  else if(_page && _limit){
    _page = parseInt(_page)
    _limit = parseInt(_limit)
    var skipPage = (_page - 1) * _limit

    const song = await Song.find({public: true}).skip(skipPage).limit(_limit)
    return res.status(200).json({song})
  }
  else{
    const song = await Song.find({public: true});
    return res.status(200).json({ song, pagination: '?_page=1&_limit=10' });
  }
}; //done

const getSongPublicById = async (req, res, next) => {
  const songId = req.value.params.id;

  const song = await Song.findOne({ songId, public: true });
  if (!song) return res.status(404).json({ message: "Song does not exist or is not public" });

  return res.status(200).json({
    _id: song._id,
    name: song.name,
    image: song.image,
    link: song.link,
    public: song.public,
    datecreate: song.datecreate,
    dateupdate: song.dateupdate,
    category: song.category,
    // song
  });
}; // done

const getSongTopDay = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 12
    const day = new Date()
    const song = await Song.find({ public: true, createdAt: {$gte: day - (1000*60*60*24)}})
    .skip(skipPage)
    .limit(12)
    .sort({$natural:-1})
    return res.status(200).json({song})
  }
  else if(_page && _limit){
    _page = parseInt(_page)
    _limit = parseInt(_limit)
    var skipPage = (_page - 1) * _limit
    const day = new Date()
    const song = await Song.find({public: true, createdAt: {$gte: day - (1000*60*60*24)}})
    .skip(skipPage)
    .limit(_limit)
    .sort({$natural:-1})
    return res.status(200).json({song})
  }
  else{
    const day =Date.now()
    const song = await Song.find({public: true, createdAt: {$gte: day - (1000*60*60*24)}})
    .limit(12)
    .sort({$natural:-1})
    return res.status(200).json({ song, pagination: '?_page=1&_limit=12' });
  }
};//done

const getSongMostLike = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 6
    const song = await Song.find({public: true})
    .skip(skipPage)
    .limit(6)
    .sort({favoriteuser: -1})
    return res.status(200).json({song})
  }
  else if(_page && _limit){
    _page = parseInt(_page)
    _limit = parseInt(_limit)
    var skipPage = (_page - 1) * _limit
    const song = await Song.find({public: true})
    .skip(skipPage)
    .limit(_limit)
    .sort({favoriteuser: -1})
    return res.status(200).json({song})
  }
  else{
    const song = await Song.find({public: true})
    .limit(6)
    .sort({favoriteuser: -1})
    return res.status(200).json({ song, pagination: '?_page=1&_limit=6' });
  }
};//done

const getSongNow = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 6
    const song = await Song.find({public: true, hot: true})
    .skip(skipPage)
    .limit(6)
    .sort({$natural:-1})
    return res.status(200).json({song})
  }
  else if(_page && _limit){
    _page = parseInt(_page)
    _limit = parseInt(_limit)
    var skipPage = (_page - 1) * _limit
    const song = await Song.find({public: true, hot: true})
    .skip(skipPage)
    .limit(_limit)
    .sort({$natural:-1})
    return res.status(200).json({song})
  }
  else{
    const song = await Song.find({public: true, hot: true})
    .limit(6)
    .sort({$natural:-1})
    return res.status(200).json({ song, pagination: '?_page=1&_limit=6' });
  }
};//done

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
}; // xoa

module.exports = {
  getAllSongPublic,
  getSongPublicById,
  createSong,
  getSongMostLike,
  getSongTopDay,
  getSongNow,
};
