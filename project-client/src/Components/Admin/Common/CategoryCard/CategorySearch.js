import React from 'react'

import SearchIcon from '@mui/icons-material/Search';

// material
import { styled } from '@mui/material/styles';
import { Box, TextField, Autocomplete, InputAdornment } from '@mui/material';

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

const CategorySearch = ({category}) => {
    return (
        <RootStyle>
            <Autocomplete
                size="small"
                disablePortal
                popupIcon={null}
                options={category}
                getOptionLabel={(category) => category.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Search category..."
                    InputProps={{
                      ...params.InputProps,
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
                          {params.InputProps.startAdornment}
                        </>
                      )
                    }}
                  />
                )}
            />
    </RootStyle>
    )
}

export default CategorySearch
