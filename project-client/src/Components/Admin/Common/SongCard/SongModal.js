import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import AddPhoto from "@mui/icons-material/AddPhotoAlternate";
import MusicIcon from "@mui/icons-material/LibraryMusic";
import Chip from "@mui/material/Chip";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SongInput from "./SongInput";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

import {createSongApi, updateSongApi,updateSongImageApi,updateSongFileApi} from "../../../../Apis/admin.api"
import {vlCreateSong, vlUpdateSong,vlUpdateSongImage,vlUpdateSongFile} from "../Validate"
import toastNotify from "../../../Toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "58%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "1px solid #9B2335",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};

const StyleBoxUpdate = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  height: "auto",
  margin: 0,
  marginBottom: "12px",
});

const StyleImage = styled("img")({
  width: "150px",
  height: "150px",
  objectFit: "cover",
  borderRadius: "50%",
  marginBottom: "12px",
  transition: "width 2s",
  "&:hover": {
    borderRadius: "2%",
    width: "375px",
  },
});

const ButtonImage = styled(Button)({
  width: "200px",
  transition: "width 2s",
  "&:hover": {
    borderRadius: "2%",
    width: "375px",
  },
});

const ButtonFileInput = styled(Button)({
  width: "100%",
  backgroundColor: "#9B2335",
  color: "#fff",
  borderBottomRightRadius: 0,
  borderTopRightRadius:0,
  "&:hover": {
    backgroundColor: "#7b1c2a",
  },
});

const StyledInputElement = styled("input")`
  width: 90%;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
  background: rgb(243, 246, 249);
  border: 1px solid #e5e8ec;
  border-radius: 10px;
  padding: 6px 10px;
  color: #20262d;
  transition: width 300ms ease;

  &:hover {
    background: #eaeef3;
    border-color: #e5e8ec;
  }

  &:focus {
    outline: none;
    width: 100%;
    transition: width 200ms ease-out;
  }
`;

const SongModal = ({ open, handleClose,setCongTacHanhTrinh,congtachanhtrinh , data, dataCat, ...modal }) => {
  const valueDefaultCat = data && data.category[0]._id ? data.category[0]._id : "";
  const [category, setCategory] = useState(valueDefaultCat);
  const [imagepreview, setImagePreview] = useState(
    "https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg"
  );
  const [uploadfile, setUploadFile] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleImage = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImagePreview(reader.result);
      }
    };

    if (event.target.files[0] && event.target.files[0].type.match("image.*")) {
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleUploadFile = (event) => {
    if (event.target.files[0].size <= 5 * 1024 * 1024) {
      const reader = new FileReader();
      setUploadFile(event.target.files[0].name);
    } else {
      alert("Please upload file low size");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameSong = e.target.songname.value;
    const ownerSong = e.target.songauthor.value;
    const categoryId = e.target.categoryId.value.toString();
    const song = e.target.song.files[0];
    const isvaliddata = vlCreateSong(
      nameSong,
      ownerSong,
      categoryId,
      song
    );
    if (isvaliddata) {
      const formData = new FormData();
      formData.append("song", song);
      formData.append("nameSong", nameSong);
      formData.append("ownerSong", ownerSong);
      formData.append("categoryId", categoryId);

      const res = await createSongApi(formData);
      if (res.success) {
        toastNotify("Your Post has been created", "success");
        setCongTacHanhTrinh(congtachanhtrinh ? false : true)
        handleClose(false);
      } else {
        toastNotify(res.message, "error");
      }
    }
  };

  const handleUpdate = async (e) =>{
    e.preventDefault();
    const nameSong =
      data && e.target.songname.value === ""
        ? data.name
        : e.target.songname.value;
    const songAuthor =
      data && e.target.songauthor.value === ""
        ? data.ownersong
        : e.target.songauthor.value;
    const categoryId = e.target.categoryId.value.toString();
    const isvaliddata = vlUpdateSong(
      nameSong,
      songAuthor,
      categoryId
    );

    if (isvaliddata) {
      const res = await updateSongApi({
        name: nameSong,
        ownersong: songAuthor,
        category: categoryId,
        _id: data._id,
      });
      if (res.success) {
        toastNotify("Your Song has been updated", "success");
        setCongTacHanhTrinh(congtachanhtrinh ? false : true)
        handleClose(false)
      } else {
        toastNotify(res.message, "error");
      }
    }
    
  }

  const handleUpdateImage = async (e) =>{
    e.preventDefault();
    const image = e.target.image.files[0];
    const isvaliddata = vlUpdateSongImage(
      image
    );

    if (isvaliddata) {
      const formData = new FormData();
      formData.append("image", image);
      const res = await updateSongImageApi({formData: formData, _id: data._id});
      if (res.success) {
        toastNotify("Your Song Image has been updated", "success");
        setCongTacHanhTrinh(congtachanhtrinh ? false : true)
        handleClose(false)
      } else {
        toastNotify(res.message, "error");
      }
    }
  }

  const handleUpdateFile = async (e) =>{
    e.preventDefault();
    const songfile = e.target.song.files[0];
    const isvaliddata = vlUpdateSongFile(
      songfile
    );

    if (isvaliddata) {
      const formData = new FormData();
      formData.append("song", songfile);
      const res = await updateSongFileApi({formData: formData, _id: data._id});
      if (res.success) {
        toastNotify("Your Song File has been updated", "success");
        setCongTacHanhTrinh(congtachanhtrinh ? false : true)
        handleClose(false)
      } else {
        toastNotify(res.message, "error");
      }
    }
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style} 
          component="form"
          onSubmit={modal.typeCreate===1 ? handleSubmit : modal.typeCreate===2 ?handleUpdate : modal.typeCreate===3 ? handleUpdateImage : handleUpdateFile}>
          <Typography
            id="transition-modal-title"
            variant="h4"
            component="h2"
            sx={{
              fontFamily: "Chakra Petch, sans-serif",
              fontWeight: 600,
              color: "#9B2335",
              textTransform: "uppercase",
            }}
          >
            {modal.title}
          </Typography>

          {modal.chill.map((value, index) => {
            return (
              <>
                {value.boxImage ? (
                  <StyleBoxUpdate>
                    <Typography
                      id="transition-modal-description"
                      variant="inherit"
                      sx={{
                        mt: 2,
                        mb: 1,
                        fontFamily: "Chakra Petch, sans-serif",
                      }}
                    >
                      {value.field}
                    </Typography>
                    <StyleImage src={imagepreview} alt="image" />
                    <ButtonImage
                      variant="contained"
                      component="label"
                      startIcon={<AddPhoto></AddPhoto>}
                      fullWidth
                    >
                      Upload Image
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImage}
                        name={value.inputName}
                        hidden
                      />
                    </ButtonImage>
                  </StyleBoxUpdate>
                ) : value.boxSelect ? (
                  <Grid
                    container
                    spacing={1}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="left"
                  >
                    <Grid
                      container
                      item
                      xs={6}
                      spacing={1}
                      direction="column"
                      justifyContent="center"
                      alignItems="left"
                    >
                      <Grid item xs>
                        <Typography
                          id="transition-modal-description"
                          variant="inherit"
                          sx={{ mt: 2, fontFamily: "Chakra Petch, sans-serif" }}
                        >
                          {value.field}
                        </Typography>
                      </Grid>
                      <Grid item xs>
                        <StyledInputElement
                          name={value.inputName1}
                          aria-label="input"
                          placeholder={data ? data.name : "Type something..."}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={6}
                      spacing={1}
                      direction="column"
                      justifyContent="center"
                      alignItems="left"
                    >
                      <Typography
                        id="transition-modal-description"
                        variant="inherit"
                        sx={{
                          mt: 2,
                          ml: 1,
                          fontFamily: "Chakra Petch, sans-serif",
                        }}
                      >
                        {value.fieldSelect}
                      </Typography>
                      <FormControl sx={{ ml: 1, mt: 1.5 }} size="small">
                        <InputLabel id="select-category">Category</InputLabel>
                        <Select
                          labelId="select-category"
                          id="select"
                          name={value.inputName2}
                          value={category}
                          label="Category"
                          onChange={handleChange}
                          autoHeight
                        >
                          {dataCat.map((value, index) => {
                            return (
                              <MenuItem
                                key={index.toString()}
                                value={value._id}
                              >
                                {value.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                ) : value.boxFile ? (
                  <Grid
                    container
                    spacing={0}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    mt={2}
                  >
                    <Grid item xs={4}>
                      <ButtonFileInput 
                      component="label"
                      fullWidth
                      >
                        Select your file
                        <input
                        type="file"
                        accept="audio/*"
                        onChange={handleUploadFile}
                        name={value.inputName}
                        hidden
                      />
                      </ButtonFileInput>
                    </Grid>
                    <Grid item xs={8}>
                      <StyledInputElement readOnly={true} placeholder='Your file name here ...' value={uploadfile} style={{borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}} >
                        
                      </StyledInputElement>
                    </Grid>
                  </Grid>
                ) : (
                  <Grid
                    container
                    spacing={1}
                    direction="column"
                    justifyContent="center"
                    alignItems="left"
                  >
                    <Grid item xs>
                      <Typography
                        id="transition-modal-description"
                        variant="inherit"
                        sx={{ mt: 2, fontFamily: "Chakra Petch, sans-serif" }}
                      >
                        {value.field}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <StyledInputElement
                        name={value.inputName}
                        aria-label="input"
                        placeholder={data ? data.ownersong : "Type something..."}
                      />
                    </Grid>
                  </Grid>
                )}
              </>
            );
          })}
          <Divider variant light={true} sx={{ mt: 2, mb: 2 }} />

          <Grid
            container
            alignItems="left"
            direction="column"
            justifyContent="center"
          >
            <Button
              type="submit"
              sx={{ color: "#9B2335", fontFamily: "Chakra Petch, sans-serif" }}
            >
              {modal.typeCreate===1 ? "Submit" : modal.typeCreate===2  ? "Update" : "OKE!"}
            </Button>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
};

export default SongModal;
