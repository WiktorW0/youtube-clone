import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconButton, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputAdornment from '@mui/material/InputAdornment';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const searchTheme = createTheme({
  palette: {
    primary: {
      main: '#FF0000',
    },
    secondary: {
      main: '#343835',
    },
  },
  shape: {
    borderRadius: 20
  }
});

const Search = styled('div')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  backgroundColor: alpha(theme.palette.common.white, 1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.15)
  },
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    color: theme.palette.secondary.main,
    padding: theme.spacing(1, 1, 1, 2),
    paddingLeft: theme.spacing(0, 4),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      width: '100px',
      '&:focus': {
        width: '110px',
      },
    },
    [theme.breakpoints.up('sm')]: {
      width: '120px',
      '&:focus': {
        width: '180px',
      },
    },
    [theme.breakpoints.up('md')]: {
      width: '300px',
      '&:focus': {
        width: '500px',
      },
    },
  },
}));

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <ThemeProvider theme={searchTheme}>
      <Paper
        component='form'
        onSubmit={handleSubmit}
        width='auto'
      >
        <Search>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            value={searchTerm}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position='start'>
                <IconButton type='submit'>
                  <SearchIcon color='primary' />
                </IconButton>
              </InputAdornment>
            }
          />
        </Search>
      </Paper>
    </ThemeProvider>
  )
}

export default SearchBar

