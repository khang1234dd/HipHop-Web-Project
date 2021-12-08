import validator from "validator";
import toastNotify from "../../../Toast";

const vlCreateCategory = (categoryname, categorytinydes) => {
  const isEmptyName = validator.isEmpty(categoryname);
  const isLengthName = validator.isLength(categoryname, { min: 2, max: 20 });
  const isLengthTiny = validator.isLength(categorytinydes, {
    min: 10,
    max: 40,
  });
  if (isEmptyName) {
    toastNotify("Please enter your Category Name", "error");
    return false;
  } else if (!isLengthName) {
    toastNotify(
      "Please your category name doesnt less than 2 characters",
      "error"
    );
    return false;
  }
  const idEmptyTiny = validator.isEmpty(categorytinydes);
  if (idEmptyTiny) {
    toastNotify("Please enter your TinyDescription", "error");
    return false;
  } else if (!isLengthTiny) {
    toastNotify(
      "Please your category tiny description doesnt less than 10 characters",
      "error"
    );
    return false;
  }
  return {
    categoryname,
    categorytinydes,
  };
};

const vlUpdateCategory = (categoryname, categorytinydes) => {
  const isEmptyName = validator.isEmpty(categoryname);
  const idEmptyTiny = validator.isEmpty(categorytinydes);
  const isLengthName = validator.isLength(categoryname, { min: 2, max: 20 });
  const isLengthTiny = validator.isLength(categorytinydes, {
    min: 10,
    max: 40,
  });
  if (isEmptyName) {
    toastNotify("Please enter your Category Name", "error");
    return false;
  } else if (!isLengthName) {
    toastNotify(
      "Please your category name doesnt less than 2 characters",
      "error"
    );
    return false;
  }
  if (idEmptyTiny) {
    toastNotify("Please enter your TinyDescription", "error");
    return false;
  } else if (!isLengthTiny) {
    toastNotify(
      "Please your category tiny description doesnt less than 10 characters",
      "error"
    );
    return false;
  }
  return {
    categoryname,
    categorytinydes,
  };
};

const vlCreatePost = (namePost, tinydes, description, categoryId, image) => {
  //Empty
  const isEmptyName = validator.isEmpty(namePost);
  const isEmptyTiny = validator.isEmpty(tinydes);
  const isEmptyDes = validator.isEmpty(description);
  const isEmptyCat = validator.isEmpty(categoryId);

  //Length
  const isLengthName = validator.isLength(namePost, { min: 2 });
  const isLengthTiny = validator.isLength(tinydes, { min: 6 });
  const isLengthDes = validator.isLength(description, { min: 20 });
  const isLengthCatId = validator.isMongoId(categoryId);

  if (isEmptyName) {
    toastNotify("Please enter your Post Name", "error");
    return false;
  } else if (!isLengthName) {
    toastNotify("Please your post name doesnt less than 2 characters", "error");
    return false;
  }

  if (isEmptyCat) {
    toastNotify("Please choose your Category", "error");
    return false;
  } else if (!isLengthCatId) {
    toastNotify("category is wrong", "error");
  }

  if (isEmptyTiny) {
    toastNotify("Please enter your Tiny Description", "error");
    return false;
  } else if (!isLengthTiny) {
    toastNotify(
      "Please your category tiny description doesnt less than 6 characters",
      "error"
    );
    return false;
  }

  if (isEmptyDes) {
    toastNotify("Please enter your Description", "error");
    return false;
  } else if (!isLengthDes) {
    toastNotify(
      "Please your post description doesnt less than 20 characters",
      "error"
    );
    return false;
  }

  if (image === undefined) {
    toastNotify("Please upload your post image", "error");
    return false;
  }

  return {
    namePost,
    tinydes,
    description,
    categoryId,
    image,
  };
};

const vlUpdatePost = (namePost, tinydes, description, categoryId) => {
  //Empty
  const isEmptyName = validator.isEmpty(namePost);
  const isEmptyTiny = validator.isEmpty(tinydes);
  const isEmptyDes = validator.isEmpty(description);
  const isEmptyCat = validator.isEmpty(categoryId);

  //Length
  const isLengthName = validator.isLength(namePost, { min: 2 });
  const isLengthTiny = validator.isLength(tinydes, { min: 6 });
  const isLengthDes = validator.isLength(description, { min: 20 });
  const isLengthCatId = validator.isMongoId(categoryId);

  if (isEmptyName) {
    toastNotify("Please enter your Post Name", "error");
    return false;
  } else if (!isLengthName) {
    toastNotify("Please your post name doesnt less than 2 characters", "error");
    return false;
  }

  if (isEmptyCat) {
    toastNotify("Please choose your Category", "error");
    return false;
  } else if (!isLengthCatId) {
    toastNotify("category is wrong", "error");
  }

  if (isEmptyTiny) {
    toastNotify("Please enter your Tiny Description", "error");
    return false;
  } else if (!isLengthTiny) {
    toastNotify(
      "Please your category tiny description doesnt less than 6 characters",
      "error"
    );
    return false;
  }

  if (isEmptyDes) {
    toastNotify("Please enter your Description", "error");
    return false;
  } else if (!isLengthDes) {
    toastNotify(
      "Please your post description doesnt less than 20 characters",
      "error"
    );
    return false;
  }


  

  return {
    namePost,
    tinydes,
    description,
    categoryId,
  };
};

const vlUpdatePostImage = (image) => {
  
  if (image === undefined) {
    toastNotify("Please upload your post image", "error");
    return false;
  }
  else{
    return true
  }
  
}

const vlCreateSong = (nameSong,ownerSong,categoryId,song) => {
  //Empty
  const isEmptyName = validator.isEmpty(nameSong);
  const isEmptyOwner = validator.isEmpty(ownerSong);
  const isEmptyCat = validator.isEmpty(categoryId);

  //Length
  const isLengthName = validator.isLength(nameSong, { min: 2 });
  const isLengthCatId = validator.isMongoId(categoryId);

  if (isEmptyName) {
    toastNotify("Please enter your Song Name", "error");
    return false;
  } else if (!isLengthName) {
    toastNotify("Please your song name doesnt less than 2 characters", "error");
    return false;
  }

  if (isEmptyCat) {
    toastNotify("Please choose your Category", "error");
    return false;
  } else if (!isLengthCatId) {
    toastNotify("category is wrong", "error");
  }

  if (isEmptyOwner) {
    toastNotify("Please enter your Owner Song", "error");
    return false;
  }

  if (song === undefined) {
    toastNotify("Please upload your song file", "error");
    return false;
  }

  return {
    nameSong,
    ownerSong,
    categoryId,
    song,
  };
};

const vlUpdateSong = (namesong, ownersong, categoryId) => {
  //Empty
  const isEmptyName = validator.isEmpty(namesong);
  const isEmptyOwner = validator.isEmpty(ownersong);
  const isEmptyCat = validator.isEmpty(categoryId);

  //Length
  const isLengthName = validator.isLength(namesong, { min: 2 });
  const isLengthCatId = validator.isMongoId(categoryId);

  if (isEmptyName) {
    toastNotify("Please enter your Song Name", "error");
    return false;
  } else if (!isLengthName) {
    toastNotify("Please your song name doesnt less than 2 characters", "error");
    return false;
  }

  if (isEmptyCat) {
    toastNotify("Please choose your Category", "error");
    return false;
  } else if (!isLengthCatId) {
    toastNotify("category is wrong", "error");
  }

  if (isEmptyOwner) {
    toastNotify("Please enter your Owner Song", "error");
    return false;
  } 

  return {
    namesong,
    ownersong,
    categoryId,
  };
};

const vlUpdateSongImage = (image) => {
  
  if (image === undefined) {
    toastNotify("Please upload your song image", "error");
    return false;
  }
  else{
    return true
  }
  
}

const vlUpdateSongFile = (file) => {
  
  if (file === undefined) {
    toastNotify("Please upload your song file", "error");
    return false;
  }
  else{
    return true
  }
  
}

const vlCreateVideoMusic = (nameVideo,ownerVideo,categoryId,embedId) => {
  //Empty
  const isEmptyName = validator.isEmpty(nameVideo);
  const isEmptyOwner = validator.isEmpty(ownerVideo);
  const isEmptyEmbedId = validator.isEmpty(embedId);
  const isEmptyCat = validator.isEmpty(categoryId);

  //Length
  const isLengthName = validator.isLength(nameVideo, { min: 2 });
  const isLengthEmbed = validator.isLength(embedId, { min: 2 });
  const isLengthCatId = validator.isMongoId(categoryId);

  if (isEmptyName) {
    toastNotify("Please enter your Video Name", "error");
    return false;
  } else if (!isLengthName) {
    toastNotify("Please your video name doesnt less than 2 characters", "error");
    return false;
  }

  if (isEmptyCat) {
    toastNotify("Please choose your Category", "error");
    return false;
  } else if (!isLengthCatId) {
    toastNotify("category is wrong", "error");
  }

  if (isEmptyOwner) {
    toastNotify("Please enter your Owner Video", "error");
    return false;
  }
  if (isEmptyEmbedId) {
    toastNotify("Please enter your Embed", "error");
    return false;
  }else if (!isLengthEmbed) {
    toastNotify("Please your video embed doesnt less than 2 characters", "error");
  }



  return {
    nameVideo,
    ownerVideo,
    categoryId,
    embedId,
  };
};

const vlUpdateVideoMusic = (nameVideo,ownerVideo,categoryId,embedId) => {
  //Empty
  const isEmptyName = validator.isEmpty(nameVideo);
  const isEmptyOwner = validator.isEmpty(ownerVideo);
  const isEmptyEmbedId = validator.isEmpty(embedId);
  const isEmptyCat = validator.isEmpty(categoryId);

  //Length
  const isLengthName = validator.isLength(nameVideo, { min: 2 });
  const isLengthEmbed = validator.isLength(embedId, { min: 2 });
  const isLengthCatId = validator.isMongoId(categoryId);

  if (isEmptyName) {
    toastNotify("Please enter your Video Name", "error");
    return false;
  } else if (!isLengthName) {
    toastNotify("Please your video name doesnt less than 2 characters", "error");
    return false;
  }

  if (isEmptyCat) {
    toastNotify("Please choose your Category", "error");
    return false;
  } else if (!isLengthCatId) {
    toastNotify("category is wrong", "error");
  }

  if (isEmptyOwner) {
    toastNotify("Please enter your Owner Video", "error");
    return false;
  }
  if (isEmptyEmbedId) {
    toastNotify("Please enter your Embed", "error");
    return false;
  }else if (!isLengthEmbed) {
    toastNotify("Please your video embed doesnt less than 2 characters", "error");
  }



  return {
    nameVideo,
    ownerVideo,
    categoryId,
    embedId,
  };
};
const vlUpdateVideoImage = (image) => {
  
  if (image === undefined) {
    toastNotify("Please upload your video image", "error");
    return false;
  }
  else{
    return true
  }
  
}

export { vlCreateCategory,vlUpdateCategory, vlCreatePost, vlUpdatePost, vlUpdatePostImage, vlCreateSong, vlUpdateSong, vlUpdateSongImage, vlUpdateSongFile, vlCreateVideoMusic,vlUpdateVideoMusic,vlUpdateVideoImage };
