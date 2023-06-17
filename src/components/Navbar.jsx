import React from 'react'
import { Stack, IconButton, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../utils/YouTube.svg'
import SearchBar from './SearchBar'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';

const sxButtonStyling = {
  display: { xs: 'none', sm: 'initial' },
  alignItems: 'center',
  justifyContent: 'flex - start',
  cursor: 'pointer',
  background: 'transparent',
  color: 'white',
  outline: 'none',
  border: 'none',
  padding: '15px 15px',
  margin: '0 5px',
  borderRadius: '20px',
  transition: 'all 0.3s ease',
}

const Navbar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        position: 'sticky',
        background: '#141414',
        top: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 2,
        zIndex: 10
      }}
    >
      <Box display='flex' alignItems='center' justifyContent='center'>
        <IconButton
          sx={sxButtonStyling}
        >
          <MenuIcon sx={{ fontSize: 28 }} />
        </IconButton>
        <Link to='/youtube-clone/' style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="logo" width='110px' />
        </Link>
      </Box>
      <SearchBar />
      <Box display='flex' alignItems='center' justifyContent='center'>
        <IconButton
          sx={sxButtonStyling}
        >
          <VideoCallOutlinedIcon sx={{ fontSize: 28 }} />
        </IconButton>
        <IconButton
          sx={sxButtonStyling}
        >
          <NotificationsNoneIcon sx={{ fontSize: 28 }} />
        </IconButton>
      </Box>
    </Stack>
  )
}

export default Navbar