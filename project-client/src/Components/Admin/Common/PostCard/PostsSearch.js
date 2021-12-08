
import React, { useState, useEffect} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ld from 'lodash'

// material
import { styled } from '@mui/material/styles';
import { Box, TextField, Autocomplete, InputAdornment } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  '& .MuiAutocomplete-root': {
    width: 200,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter
    }),
    '&.Mui-focused': {
      width: 240,
    }
  },
  '& .MuiAutocomplete-inputRoot': {
    '& fieldset': {
      borderWidth: `1px !important`,
      borderColor: `${theme.palette.grey[500_32]} !important`
    }
  },
  '& .MuiAutocomplete-option': {
    '&:not(:last-child)': {
      borderBottom: `solid 1px ${theme.palette.divider}`
    }
  }
}));

// ----------------------------------------------------------------------



export default function PostsSearch({ posts,setListPostNew, setCheckLength , total }) {

  const [valueSearch,setValueSearch] = useState("")

  useEffect(() => {
     const postSearch = ld.filter(posts, function(o) {
       const searchSuccess =  ld.includes(ld.toLower(o.name), ld.toLower(valueSearch))
       return searchSuccess
     })
    setListPostNew(postSearch)
    if(postSearch.length !== total){
      setCheckLength(true)
    } else{
      setCheckLength(false)
    }
    
  },[valueSearch])

  const handleChange = (e) => {
    setValueSearch(e.target.value)
  }
  

  return (
    <RootStyle >
     
          <TextField
            placeholder="Search post..."
            value={valueSearch}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <>
                  <InputAdornment position="start">
                    <Box
                      component={SearchIcon}
                      sx={{
                        ml: 1,
                        width: 20,
                        height: 20,
                        color: 'text.disabled'
                      }}
                    />
                  </InputAdornment>
                </>
              )
            }}
          />
    </RootStyle>
  );
}
