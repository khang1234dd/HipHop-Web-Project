import React,{useRef, useState} from "react";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Replay10Icon from '@mui/icons-material/Replay10';
import Forward10Icon from '@mui/icons-material/Forward10';


import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import IconButton from '@mui/material/IconButton';




import { styled } from '@mui/material/styles';

const ControlsMain = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "30px",
});

const StyleButtonSkip = styled("button")({
  background: "none",
  border: "none",
  outline: "none",
  cursor: "pointer",
  fontSize: "18px",
  color: "#888",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
});

const StyleButtonPlay = styled("button")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
  background: "none",
  border: "none",
  outline: "none",
  cursor: "pointer",
  color: "#FFF",
  fontSize: "24px",
  borderRadius: "50%",
  boxShadow:
    "4px 4px 10px rgba(0, 0, 0, 0.8),-4px -4px 10px rgba(255,255,255,0.4),inset -4px -4px 10px rgba(0,0,0,0.4),inset 4px 4px 10px rgba(255,255,255,0.4)",
  backgroundColor: "#FFCE00",
  margin: "0px 20px",
});

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.5,
  fontWeight: 500,
  letterSpacing: 0.2,
  color: 'white',
});

const SongControls = ({...song}) => {
  const audioRef = useRef();
  const [position, setPosition] = React.useState(32);
  const [audioIndex, setAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(50);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);

  function formatDuration(value) {
    let minute = Math.floor(value / 60);
    let secondLeft = value - minute * 60;
    const valueFormat = Math.ceil(secondLeft)
    return `${minute}:${valueFormat}`
  }


  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };

  const handlePausePlayClick = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!isPlay);
  };

  const handleTimeSliderChange = (_, x ) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);

    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };

  const handleVolumeChange = (_, x ) => {
    const volume = x / 100

    audioRef.current.volume =volume
    setCurrentVolume(x);
  };

  const handleReplay = () => {
    audioRef.current.currentTime -=10
    setCurrentTime(currentTime-10);
  };

  const handleForward = () => {
    audioRef.current.currentTime +=10
    setCurrentTime(currentTime+10);
  };

  return (
    <ControlsMain>
      <Stack 
      sx={{width:'80%', display: 'flex', flexDirection: 'column' }}>
      
      <Slider
          aria-label="time-indicator"
          size="small"
          value={currentTime}
          min={0}
          step={1}
          max={duration}
          onChange={handleTimeSliderChange}
          sx={{
            color: "9b2335",
            height: 4,
            '& .MuiSlider-thumb': {
              width: 8,
              height: 8,
              transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
              '&:before': {
                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
              },
              '&:hover, &.Mui-focusVisible': {
                boxShadow: '0px 0px 0px 8px (255 255 255 / 16%)'
                },

              '&.Mui-active': {
                width: 20,
                height: 20,
              },
            },
            '& .MuiSlider-rail': {
              opacity: 0.28,
            },
            '& .MuiSlider-valueLabel': {
              lineHeight: 1.2,
              fontSize: 12,
              background: 'unset',
              padding: 0,
              width: 32,
              height: 32,
              borderRadius: '50% 50% 50% 0',
              backgroundColor: '#1976d2',
              transformOrigin: 'bottom left',
              transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
              '&:before': { display: 'none' },
              '&.MuiSlider-valueLabelOpen': {
                transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
              },
              '& > *': {
                transform: 'rotate(45deg)',
              },
            },
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: -2,
          }}

        >
          <TinyText>{formatDuration(currentTime)}</TinyText>
          <TinyText>-{formatDuration(duration - currentTime)}</TinyText>
        </Box>
        <audio
        ref={audioRef}
        src={song.link}
        onLoadedData={handleLoadedData}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onEnded={() => setPlay(false)}
      />
      </Stack>
      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 1, px: 1 }}
        alignItems="center"
      >
        <StyleButtonSkip>
          <IconButton onClick={handleReplay} sx={{color: '#FFCE00'}}>
            <Replay10Icon></Replay10Icon>
          </IconButton>
        </StyleButtonSkip>

        <StyleButtonPlay>
          <IconButton onClick={handlePausePlayClick}>
            {isPlay ? <PauseIcon></PauseIcon> : <PlayArrowIcon></PlayArrowIcon>}
          </IconButton>
          
          
        </StyleButtonPlay>

        <StyleButtonSkip>
          <IconButton onClick={handleForward} sx={{color: '#FFCE00'}}>
            <Forward10Icon></Forward10Icon>
          </IconButton>
        </StyleButtonSkip>
      </Stack>

      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 1, px: 1, width:'100%' }}
        alignItems="center"
        fullwidth
      >
        <VolumeDownRounded sx={{color: "#fff"}} />
        <Slider
          aria-label="Volume"
          value={typeof currentVolume === 'number' ? currentVolume : 0}
          min={0}
          step={1}
          onChange={handleVolumeChange}
          valueLabelDisplay="auto"
          sx={{
            color: "#9b2335",
            "& .MuiSlider-track": {
              border: "none",
            },
            "& .MuiSlider-thumb": {
              width: 24,
              height: 24,
              backgroundColor: "#fff",
              "&:before": {
                boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
              },
              "&:hover, &.Mui-focusVisible, &.Mui-active": {
                boxShadow: "none",
              },
            },
            '& .MuiSlider-valueLabel': {
              lineHeight: 1.2,
              fontSize: 12,
              background: 'unset',
              padding: 0,
              width: 32,
              height: 32,
              borderRadius: '50% 50% 50% 0',
              backgroundColor: '#9b2335',
              transformOrigin: 'bottom left',
              transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
              '&:before': { display: 'none' },
              '&.MuiSlider-valueLabelOpen': {
                transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
              },
              '& > *': {
                transform: 'rotate(45deg)',
              },
            },
          }}
        />
        <VolumeUpRounded sx={{color: "#fff"}} />
      </Stack>
    </ControlsMain>
  );
};

export default SongControls;
