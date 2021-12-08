import Cookies from "js-cookie";

const getCategoryApi = async (body) => {
  const token = Cookies.get("jwt");
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/getAllCategory?_page=${body.page}&_limit=${body.limit}`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );

  return response.json();
};

const getAllCategoryApi = async () => {
  const token = Cookies.get("jwt");
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/getAllCategory`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );

  return response.json();
};

const createCategoryApi = async (body) => {
  const token = Cookies.get("jwt");
  const response = await fetch(
    "https://hiphop-g28.herokuapp.com/admin/createCategory",
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(body),
    }
  );

  return response.json();
};

const updateCategoryApi = async ({categoryname,categorytinydes,id}) => {
  const token = Cookies.get("jwt");
  console.log(categoryname,categorytinydes,id)
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/updateCategory/${id}`,
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify({categoryname,categorytinydes}),
    }
  );

  return response.json();
};

const deleteCategoryApi = async(_id) => {
  const token = Cookies.get("jwt");
  console.log("body", _id);
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/deleteCategory/${_id}`,
    {
      method: "DELETE",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );
  return response.json();
}

const createPostApi = async (body) => {
  const token = Cookies.get("jwt");
  console.log("body", body);
  const response = await fetch(
    "https://hiphop-g28.herokuapp.com/users/createPost",
    {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token,
        // Accept: "application/json",
        // 'Content-Type': 'multipart/form-data',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
      body: body,
    }
  );

  return response.json();
};

const updatePostApi = async ({
  name,
  tinydes,
  description,
  category,
  _id,
}) => {
  const token = Cookies.get("jwt");
  console.log("body", name, tinydes, description, category);
  console.log("body", _id);
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/users/updatePost/${_id}`,
    {
      method: "PUT",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token,
        // Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify({ name, tinydes, description, category }),
    }
  );

  return response.json();
};

const updatePostImageApi = async ({formData,_id}) => {
  const token = Cookies.get("jwt");
  console.log("body", _id);
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/users/updatePostImage/${_id}`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token,
        // Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
      body: formData,
    }
  );

  return response.json();
};

const deletePostApi = async (_id) => {
  const token = Cookies.get("jwt");
  console.log("body", _id);
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/users/deletePost/${_id}`,
    {
      method: "DELETE",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );

  return response.json();
};

const changePostPassApi = async (_id) => {
  const token = Cookies.get("jwt");
  console.log("body", _id);
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/changePostPass/${_id}`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );

  return response.json();
};

const changePostPublicApi = async (_id) => {
  const token = Cookies.get("jwt");
  console.log("body", _id);
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/changePostPublic/${_id}`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );

  return response.json();
};

const changePostHotApi = async (_id) => {
  const token = Cookies.get("jwt");
  console.log("body", _id);
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/changePostHot/${_id}`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );

  return response.json();
};

const changePostBannedApi = async (_id) => {
  const token = Cookies.get("jwt");
  console.log("body", _id);
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/changePostBanned/${_id}`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );

  return response.json();
};

const getPostApi = async (body) => {
  const token = Cookies.get("jwt");
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/getAllPost?_page=${body.page}&_limit=${body.limit}`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );

  return response.json();
};

const getAllPostApi = async () => {
  const token = Cookies.get("jwt");
  const response = await fetch(
    'https://hiphop-g28.herokuapp.com/admin/getAllPost',
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );

  return response.json();
};


const getAllSongApi = async (body) => {
  const token = Cookies.get("jwt");
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/getAllSong`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );

  return response.json();
};

const getSongApi = async (body) => {
  const token = Cookies.get("jwt");
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/getAllSong?_page=${body.page}&_limit=${body.limit}`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );

  return response.json();
};


const createSongApi = async (body) => {
  const token = Cookies.get("jwt");
  console.log("body", body);
  const response = await fetch(
    "https://hiphop-g28.herokuapp.com/admin/createSong",
    {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
      body: body,
    }
  );

  return response.json();
}

const updateSongApi = async ({
  name,
  ownersong,
  category,
  _id,
}) => {
  const token = Cookies.get("jwt");
  console.log("body", name, ownersong, category);
  console.log("body", _id);
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/updateSong/${_id}`,
    {
      method: "PUT",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify({ name, ownersong, category }),
    }
  );

  return response.json();
};

const deleteSongApi = async (_id) => {
  const token = Cookies.get("jwt");
  console.log("body", _id);
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/deleteSong/${_id}`,
    {
      method: "DELETE",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );

  return response.json();
};



const changeSongPublicApi = async (_id) => {
  const token = Cookies.get("jwt");
  console.log("body", _id);
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/changeSongPublic/${_id}`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );

  return response.json();
};

const updateSongImageApi = async ({formData,_id}) => {
  const token = Cookies.get("jwt");
  console.log("body", _id);
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/updateSongImage/${_id}`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token,
        // Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
      body: formData,
    }
  );

  return response.json();
};

const updateSongFileApi = async ({formData,_id}) => {
  const token = Cookies.get("jwt");
  console.log("body", _id);
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/updateSongFile/${_id}`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token,
        // Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
      body: formData,
    }
  );

  return response.json();
};


const getAllUserApi = async () => {
  const token = Cookies.get("jwt");
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/getAllUser`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );

  return response.json();
};

const changeLockUserApi = async (_id) => {
  const token = Cookies.get("jwt");
  console.log("body", _id);
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/changeLockUser/${_id}`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );

  return response.json();
};

const getVideoMusicApi = async (body) => {
  const token = Cookies.get("jwt");
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/getAllVideoMusic?_page=${body.page}&_limit=${body.limit}`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );

  return response.json();
};

const getAllVideoMusicApi = async (body) => {
  const token = Cookies.get("jwt");
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/getAllVideoMusic`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );

  return response.json();
};


const createVideoMusicApi = async (body) => {
  const token = Cookies.get("jwt");
  const response = await fetch(
    "https://hiphop-g28.herokuapp.com/admin/createVideoMusic",
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(body),
    }
  );

  return response.json();
};

const updateVideoMusicApi = async ({
  name,
  ownervideo,
  category,
  link,
  _id,
}) => {
  const token = Cookies.get("jwt");
  console.log("body", name, ownervideo, link ,category);
  console.log("body", _id);
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/updateVideoMusic/${_id}`,
    {
      method: "PUT",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify({ name, ownervideo,link, category }),
    }
  );

  return response.json();
};

const updateVideoImageApi = async ({formData,_id}) => {
  const token = Cookies.get("jwt");
  console.log("body", _id);
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/updateVideoMusicImage/${_id}`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token,
        // Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
      body: formData,
    }
  );

  return response.json();
};

const changeVideoMusicPublicApi = async (_id) => {
  const token = Cookies.get("jwt");
  console.log("body", _id);
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/changeVideoMusicPublic/${_id}`,
    {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );

  return response.json();
};

const deleteVideoMusicApi = async (_id) => {
  const token = Cookies.get("jwt");
  console.log("body", _id);
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/deleteVideoMusic/${_id}`,
    {
      method: "DELETE",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );

  return response.json();
};

const getStatisticApi = async () => {
  const token = Cookies.get("jwt");
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/admin/getStatistic`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );

  return response.json();
};

const getPostHipHopTopDayApi = async (body) => {
  const token = Cookies.get("jwt");
  const response = await fetch(
    `https://hiphop-g28.herokuapp.com/post/getPostHipHopTopDay?_page=${body.page}&_limit=${body.limit}`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );

  return response.json();
};

export {
  createCategoryApi,
  getAllCategoryApi,
  getCategoryApi,
  updateCategoryApi,
  deleteCategoryApi,

  getPostApi,
  getAllPostApi,
  createPostApi,
  updatePostApi,
  updatePostImageApi,
  deletePostApi,
  changePostPassApi,
  changePostPublicApi,
  changePostHotApi,
  changePostBannedApi,

  getAllSongApi,
  getSongApi,
  createSongApi,
  updateSongApi,
  deleteSongApi,
  changeSongPublicApi,
  updateSongImageApi,
  updateSongFileApi,

  getAllUserApi,
  changeLockUserApi,

  getVideoMusicApi,
  getAllVideoMusicApi,
  createVideoMusicApi,
  updateVideoMusicApi,
  updateVideoImageApi,
  changeVideoMusicPublicApi,
  deleteVideoMusicApi,

  getStatisticApi,
  getPostHipHopTopDayApi,
};
