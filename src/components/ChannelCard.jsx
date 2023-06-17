import React from 'react'
import { Link } from 'react-router-dom'
import { Box, CardContent, CardMedia, Typography, } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture, demoChannelTitle } from '../utils/constants'

const ChannelCard = ({ channelDetail: { channel: { avatar, channelId, descriptionSnippet, stats, title, username } }, marginTop, widthSearch }) => {

  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '280px', sm: ('712px'), md: (widthSearch || '676px') },
        height: '320px',
        margin: 'auto',
        marginTop
      }}
    >
      <Link to={`/channel/${channelId}`}>
        <CardContent
          sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center' }}
        >
          <Box sx={{ height: '180px', width: '180px', }}>
            <CardMedia
              image={avatar[1]?.url || demoProfilePicture}
              alt={title}
              sx={{ border: '1px solid #c9c9c9', borderRadius: '50%', height: '180px', width: '180px', mb: 2 }}
            />
          </Box>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', sm: 'center', md: 'flex-start' } }}>
            <Typography variant='h6' fontWeight='bold' color='white'>
              {title || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 14, color: '#a6a6a6', ml: '5px' }} />
            </Typography>
            <Typography variant='subtitle2' color='#a6a6a6' sx={{ mt: '10px' }}>
              {`${username} • ${stats.subscribersText}`}
            </Typography>
            <Typography
              variant='subtitle2'
              color='#a6a6a6'
              sx={{
                mt: '5px',
                width: {
                  xs: '100%', sm: (widthSearch ? '720px' : '356px'),
                  md: (widthSearch ? '720px' : '320px')
                },
                display: { xs: 'none', sm: 'none', md: 'initial' }
              }}
            >
              {descriptionSnippet}
            </Typography>
          </CardContent>
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard