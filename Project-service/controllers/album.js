const User = require("../models/User");
const Album = require("../models/Album");

const getAllAlbumPublic = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 10

    const album = await Album.find({public: true}).skip(skipPage).limit(10)
    return res.status(200).json({album})
  }
  else if(_page && _limit){
    _page = parseInt(_page)
    _limit = parseInt(_limit)
    var skipPage = (_page - 1) * _limit

    const album = await Album.find({public:true}).skip(skipPage).limit(_limit)
    return res.status(200).json({album})
  }
  else{
    const album = await Album.find({ public: true });
    return res.status(200).json({ album, pagination: '?_page=1&_limit=10' });
  }
}; //done

const getAlbumPublicById = async (req, res, next) => {
  const albumId = req.value.params.id
  const album = await Album.find({_id: albumId,public: true});
  return res.status(200).json({ album });
}; //done


const getAlbumTopDay = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 12
    const day = new Date()
    const album = await Album.find({ public: true, createdAt: {$gte: day - (1000*60*60*24)}})
    .skip(skipPage)
    .limit(12)
    .sort({$natural:-1})
    return res.status(200).json({album})
  }
  else if(_page && _limit){
    _page = parseInt(_page)
    _limit = parseInt(_limit)
    var skipPage = (_page - 1) * _limit
    const day = new Date()
    const album = await Album.find({public: true, createdAt: {$gte: day - (1000*60*60*24)}})
    .skip(skipPage)
    .limit(_limit)
    .sort({$natural:-1})
    return res.status(200).json({album})
  }
  else{
    const day =Date.now()
    const album = await Album.find({public: true, createdAt: {$gte: day - (1000*60*60*24)}})
    .limit(12)
    .sort({$natural:-1})
    return res.status(200).json({ album, pagination: '?_page=1&_limit=12' });
  }
};//done

const getAlbumMostLike = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 6
    const album = await Album.find({public: true})
    .skip(skipPage)
    .limit(6)
    .sort({favoriteuser: -1})
    return res.status(200).json({album})
  }
  else if(_page && _limit){
    _page = parseInt(_page)
    _limit = parseInt(_limit)
    var skipPage = (_page - 1) * _limit
    const album = await Album.find({public: true})
    .skip(skipPage)
    .limit(_limit)
    .sort({favoriteuser: -1})
    return res.status(200).json({album})
  }
  else{
    const album = await Album.find({public: true})
    .limit(6)
    .sort({favoriteuser: -1})
    return res.status(200).json({ album, pagination: '?_page=1&_limit=6' });
  }
};//done

const getAlbumNow = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 6
    const album = await Album.find({public: true, hot: true})
    .skip(skipPage)
    .limit(6)
    .sort({$natural:-1})
    return res.status(200).json({album})
  }
  else if(_page && _limit){
    _page = parseInt(_page)
    _limit = parseInt(_limit)
    var skipPage = (_page - 1) * _limit
    const album = await Album.find({public: true, hot: true})
    .skip(skipPage)
    .limit(_limit)
    .sort({$natural:-1})
    return res.status(200).json({album})
  }
  else{
    const album = await Album.find({public: true, hot: true})
    .limit(6)
    .sort({$natural:-1})
    return res.status(200).json({ album, pagination: '?_page=1&_limit=6' });
  }
};//done


module.exports = {
    getAllAlbumPublic,
    getAlbumPublicById,
    getAlbumTopDay,
    getAlbumMostLike,
    getAlbumNow,
};
