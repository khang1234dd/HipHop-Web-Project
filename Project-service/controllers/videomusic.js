const User = require("../models/User");
const VideoMusic = require("../models/VideoMusic");

const getAllVideoMusicPublic = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 10
    const videoAll = await VideoMusic.find({public: true})
    const video = await VideoMusic.find({public: true}).skip(skipPage).limit(10)
    return res.status(200).json({video, pagination: {_page: _page, _limit: _limit, _total: videoAll.length}})
  }
  else if(_page && _limit){
    _page = parseInt(_page)
    _limit = parseInt(_limit)
    var skipPage = (_page - 1) * _limit
    const videoAll = await VideoMusic.find({public: true})
    const video = await VideoMusic.find({public: true}).skip(skipPage).limit(_limit)
    return res.status(200).json({video,pagination: {_page: _page, _limit: _limit, _total: videoAll.length} })
  }
  else{
    const video = await VideoMusic.find({public: true});
    return res.status(200).json({ video, pagination: '?_page=1&_limit=10' });
  }
}; //done

const getVideoMusicPublicById = async (req, res, next) => {
  const videoId = req.value.params.id;

  const video = await VideoMusic.findOne({ _id: videoId, public: true });
  if (!video) return res.status(404).json({ message: "Video Music does not exist or is not public" });

  return res.status(200).json({
    video
  });
}; // done

const getVideoMusicTopDay = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 12
    const day = new Date()
    const videoAll = await VideoMusic.find({public: true, createdAt: {$gte: day - (1000*60*60*24)}})
    const video = await VideoMusic.find({ public: true, createdAt: {$gte: day - (1000*60*60*24)}})
    .skip(skipPage)
    .limit(12)
    .sort({$natural:-1})
    return res.status(200).json({video, pagination: {_page: _page, _limit: _limit, _total: videoAll.length}})
  }
  else if(_page && _limit){
    _page = parseInt(_page)
    _limit = parseInt(_limit)
    var skipPage = (_page - 1) * _limit
    const day = new Date()
    const videoAll = await VideoMusic.find({public: true, createdAt: {$gte: day - (1000*60*60*24)}})
    const video = await VideoMusic.find({public: true, createdAt: {$gte: day - (1000*60*60*24)}})
    .skip(skipPage)
    .limit(_limit)
    .sort({$natural:-1})
    return res.status(200).json({video, pagination: {_page: _page, _limit: _limit, _total: videoAll.length}})
  }
  else{
    const day =Date.now()
    const video = await VideoMusic.find({public: true, createdAt: {$gte: day - (1000*60*60*24)}})
    .limit(12)
    .sort({$natural:-1})
    return res.status(200).json({ video, pagination: '?_page=1&_limit=12' });
  }
};//done

const getVideoMusicMostLike = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 6
    const videoAll = await VideoMusic.find({public: true})
    const video = await VideoMusic.find({public: true})
    .skip(skipPage)
    .limit(6)
    .sort({favoriteuser: -1})
    return res.status(200).json({video,pagination: {_page: _page, _limit: _limit, _total: videoAll.length}})
  }
  else if(_page && _limit){
    _page = parseInt(_page)
    _limit = parseInt(_limit)
    var skipPage = (_page - 1) * _limit
    const videoAll = await VideoMusic.find({public: true})
    const video = await VideoMusic.find({public: true})
    .skip(skipPage)
    .limit(_limit)
    .sort({favoriteuser: -1})
    return res.status(200).json({video,  pagination: {_page: _page, _limit: _limit, _total: videoAll.length}})
  }
  else{
    const video = await VideoMusic.find({public: true})
    .limit(6)
    .sort({favoriteuser: -1})
    return res.status(200).json({ video, pagination: '?_page=1&_limit=6' });
  }
};//done

const getVideoMusicNow = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 6
    const videoAll = await VideoMusic.find({public: true, hot: true})
    const video = await VideoMusic.find({public: true, hot: true})
    .skip(skipPage)
    .limit(6)
    .sort({$natural:-1})
    return res.status(200).json({video, pagination: {_page: _page, _limit: _limit, _total: videoAll.length}})
  }
  else if(_page && _limit){
    _page = parseInt(_page)
    _limit = parseInt(_limit)
    var skipPage = (_page - 1) * _limit
    const videoAll = await VideoMusic.find({public: true, hot: true})
    const video = await VideoMusic.find({public: true, hot: true})
    .skip(skipPage)
    .limit(_limit)
    .sort({$natural:-1})
    return res.status(200).json({video, pagination: {_page: _page, _limit: _limit, _total: videoAll.length}})
  }
  else{
    const video = await VideoMusic.find({public: true, hot: true})
    .limit(6)
    .sort({$natural:-1})
    return res.status(200).json({ video, pagination: '?_page=1&_limit=6' });
  }
};//done


module.exports = {
  getAllVideoMusicPublic,
  getVideoMusicPublicById,
  getVideoMusicMostLike,
  getVideoMusicTopDay,
  getVideoMusicNow,
};
