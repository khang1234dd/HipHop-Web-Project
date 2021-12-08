const User = require("../models/User");
const Post = require("../models/Post");
const Category = require("../models/Category");

const getAllPostPassAndPublic = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 10

    const postAll = await Post.find({pass: true, public: true, banned: false })
    const post = await Post.find({pass: true, public: true, banned: false }).skip(skipPage).limit(10)
    .populate("owner")
    .populate({path: "category"})
    .populate({path: "favoriteuser"})
    .populate({path: "comment"})
    return res.status(200).json({post,  pagination: {_page: _page, _limit: _limit, _total: postAll.length}})
  }
  else if(_page && _limit){
    _page = parseInt(_page)
    _limit = parseInt(_limit)
    var skipPage = (_page - 1) * _limit


    const postAll = await Post.find({pass: true, public: true, banned: false })
    const post = await Post.find({pass: true, public: true, banned: false }).skip(skipPage).limit(_limit)
    .populate("owner")
    .populate({path: "category"})
    .populate({path: "favoriteuser"})
    .populate({path: "comment"})
    return res.status(200).json({post, pagination: {_page: _page, _limit: _limit, _total: postAll.length}})
  }
  else{
    const post = await Post.find({pass: true, public: true, banned: false })
    .populate("owner")
    .populate({path: "category"})
    .populate({path: "favoriteuser"})
    .populate({path: "comment"});
    return res.status(200).json({ post, pagination: '?_page=1&_limit=10' });
  }
}; //done

const getPostPassAndPublicById = async (req, res, next) => {
  const postId = req.value.params.id;

  const post = await Post.findOne({ _id: postId , pass: true, public: true, banned: false })
  .populate("owner")
  .populate({path: "category"})
  .populate({path: "favoriteuser"})
  .populate({path: "comment"});
  if (!post) return res.status(404).json({ message: "Post does not exist or isn't public or have banned or not approved yet" });

  return res.status(200).json({
    post
  });
}; // done

const getPostHipHopTopDay = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 12
    const day = new Date()
    const postAll = await Post.find({pass: true, public: true, banned: false, createdAt: {$gte: day - (1000*60*60*24)}})
    const post = await Post.find({pass: true, public: true, banned: false, createdAt: {$gte: day - (1000*60*60*24)}})
    .skip(skipPage)
    .limit(12)
    .sort({$natural:-1})
    .populate("owner")
    .populate({path: "category"})
    .populate({path: "favoriteuser"})
    .populate({path: "comment"})
    return res.status(200).json({post,  pagination: {_page: _page, _limit: _limit, _total: postAll.length}})
  }
  else if(_page && _limit){
    _page = parseInt(_page)
    _limit = parseInt(_limit)
    var skipPage = (_page - 1) * _limit
    const day = new Date()
    const postAll = await Post.find({pass: true, public: true, banned: false, createdAt: {$gte: day - (1000*60*60*24)}})
    const post = await Post.find({pass: true, public: true, banned: false, createdAt: {$gte: day - (1000*60*60*24)}})
    .skip(skipPage)
    .limit(_limit)
    .sort({$natural:-1})
    .populate("owner")
    .populate({path: "category"})
    .populate({path: "favoriteuser"})
    .populate({path: "comment"})
    return res.status(200).json({post , pagination: {_page: _page, _limit: _limit, _total: postAll.length}})
  }
  else{
    const day =Date.now()
    const post = await Post.find({pass: true, public: true, banned: false, createdAt: {$gte: day - (1000*60*60*24)}})
    .limit(12)
    .sort({$natural:-1})
    .populate("owner")
    .populate({path: "category"})
    .populate({path: "favoriteuser"})
    .populate({path: "comment"})
    return res.status(200).json({ post, pagination: '?_page=1&_limit=12' });
  }
};//done

const getPostHipHopNow = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 6
    const postAll = await Post.find({pass: true, public: true, banned: false, hot: true})
    const post = await Post.find({pass: true, public: true, banned: false, hot: true})
    .skip(skipPage)
    .limit(6)
    .sort({$natural:-1})
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
    const postAll = await Post.find({pass: true, public: true, banned: false, hot: true})
    const post = await Post.find({pass: true, public: true, banned: false, hot: true})
    .skip(skipPage)
    .limit(_limit)
    .sort({$natural:-1})
    .populate("owner")
    .populate({path: "category"})
    .populate({path: "favoriteuser"})
    .populate({path: "comment"})
    return res.status(200).json({post, pagination: {_page: _page, _limit: _limit, _total: postAll.length}})
  }
  else{
    const post = await Post.find({pass: true, public: true, banned: false, hot: true})
    .limit(6)
    .sort({$natural:-1})
    .populate("owner")
    .populate({path: "category"})
    .populate({path: "favoriteuser"})
    .populate({path: "comment"})
    return res.status(200).json({ post, pagination: '?_page=1&_limit=6' });
  }
};//done

const getPostHipHopMostViewed = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 6
    const postAll = await Post.find({pass: true, public: true, banned: false})
    const post = await Post.find({pass: true, public: true, banned: false})
    .skip(skipPage)
    .limit(6)
    .sort({view: -1})
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
    const postAll = await Post.find({pass: true, public: true, banned: false})
    const post = await Post.find({pass: true, public: true, banned: false})
    .skip(skipPage)
    .limit(_limit)
    .sort({view: -1})
    .populate("owner")
    .populate({path: "category"})
    .populate({path: "favoriteuser"})
    .populate({path: "comment"})
    return res.status(200).json({post, pagination: {_page: _page, _limit: _limit, _total: postAll.length}})
  }
  else{
    const post = await Post.find({pass: true, public: true, banned: false})
    .limit(6)
    .sort({view: -1})
    .populate("owner")
    .populate({path: "category"})
    .populate({path: "favoriteuser"})
    .populate({path: "comment"})
    return res.status(200).json({ post, pagination: '?_page=1&_limit=6' });
  }
};//done

const getPostHipHopMostComment = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 6
    const postAll = await Post.find({pass: true, public: true, banned: false})
    const post = await Post.find({pass: true, public: true, banned: false})
    .skip(skipPage)
    .limit(6)
    .sort({comment: -1})
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
    const postAll = await Post.find({pass: true, public: true, banned: false})
    const post = await Post.find({pass: true, public: true, banned: false})
    .skip(skipPage)
    .limit(_limit)
    .sort({comment: -1})
    .populate("owner")
    .populate({path: "category"})
    .populate({path: "favoriteuser"})
    .populate({path: "comment"})
    return res.status(200).json({post, pagination: {_page: _page, _limit: _limit, _total: postAll.length}})
  }
  else{
    const post = await Post.find({pass: true, public: true, banned: false})
    .limit(6)
    .sort({comment: -1})
    .populate("owner")
    .populate({path: "category"})
    .populate({path: "favoriteuser"})
    .populate({path: "comment"})
    return res.status(200).json({ post, pagination: '?_page=1&_limit=6' });
  }
};//done

const getPostHipHopMostLike = async (req, res, next) => {
  var {_page, _limit} = req.query;
  if(_page && !_limit){
    _page = parseInt(_page)
    var skipPage = (_page - 1) * 6
    const postAll = await Post.find({pass: true, public: true, banned: false})
    const post = await Post.find({pass: true, public: true, banned: false})
    .skip(skipPage)
    .limit(6)
    .sort({favoriteuser: -1})
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
    const postAll = await Post.find({pass: true, public: true, banned: false})
    const post = await Post.find({pass: true, public: true, banned: false})
    .skip(skipPage)
    .limit(_limit)
    .sort({favoriteuser: -1})
    .populate("owner")
    .populate({path: "category"})
    .populate({path: "favoriteuser"})
    .populate({path: "comment"})
    return res.status(200).json({post, pagination: {_page: _page, _limit: _limit, _total: postAll.length}})
  }
  else{
    const post = await Post.find({pass: true, public: true, banned: false})
    .limit(6)
    .sort({favoriteuser: -1})
    .populate("owner")
    .populate({path: "category"})
    .populate({path: "favoriteuser"})
    .populate({path: "comment"})
    return res.status(200).json({ post, pagination: '?_page=1&_limit=6' });
  }
};//done

module.exports = {
  getAllPostPassAndPublic,
  getPostPassAndPublicById,
  getPostHipHopTopDay,
  getPostHipHopNow,
  getPostHipHopMostViewed,
  getPostHipHopMostComment,
  getPostHipHopMostLike,
};
