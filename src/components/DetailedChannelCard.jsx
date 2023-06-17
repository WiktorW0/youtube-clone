import React from 'react'
import { Box, CardContent, CardMedia, Typography, Card } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture, demoChannelTitle } from '../utils/constants'

const DetailedChannelCard = ({ channelDetail }) => {

  if (!channelDetail.avatar) return 'Loading...'

  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '180px',
        margin: 'auto',
        mt: '20px',
        px: '4px'
      }}
    >
      <Card
        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', background: 'transparent' }}
      >
        <CardMedia
          image={channelDetail?.avatar[2]?.url || demoProfilePicture}
          alt={channelDetail?.title}
          sx={{ border: '1px solid #c9c9c9', borderRadius: '50%', height: { xs: '80px', sm: '120px', md: '180px' }, width: { xs: '80px', sm: '120px', md: '180px' }, mb: 2 }}
          component='img'
        />
        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h6' fontWeight='bold' color='white'>
            {channelDetail?.title || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: '5px' }} />
          </Typography>
          <Typography variant='subtitle1' color='#a6a6a6' >
            {`${channelDetail?.username} • ${channelDetail?.stats?.subscribersText} • ${channelDetail?.stats?.videosText}`}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default DetailedChannelCard