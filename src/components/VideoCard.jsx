import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoChannelUrl, demoVideoTitle, demoVideoUrl, demoChannelTitle, demoThumbnailUrl } from '../utils/constants'

const VideoCard = ({ video: { video: { author, badges, lengthSeconds, stats, thumbnails, videoId, title, publishedTimeText } } }) => {
  return (
    <Card sx={{ width: { xs: '280px', sm: '356px', md: '330px' }, boxShadow: 'none', borderRadius: 0, backgroundColor: '#141414' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={thumbnails[1]?.url || demoThumbnailUrl}
          alt={title}
          sx={{ width: { xs: '280px', sm: '356px', md: '330px' }, height: '180px', borderRadius: '20px', }}
        />
      </Link>
      <CardContent disableSpacing sx={{ backgroundColor: '#141414', width: { xs: '100%', sm: '356px', md: '330px' }, p: 0, pt: 2 }}>
        <Stack direction='row'>
          {author?.title && <Link to={author?.channelId ? `/channel/${author?.channelId}` : demoChannelUrl}>
            <CardMedia
              image={author?.avatar[0].url}
              alt={title}
              sx={{ minWidth: '36px', height: '36px', borderRadius: '50%', mr: '10px' }}
            />
          </Link>}
          <Typography component='div'>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
              <Typography variant='subtitle1' fontWeight='bold' color='white' overflow='hidden'>
                {title || demoVideoTitle}
              </Typography>
            </Link>
            <Link to={author?.channelId ? `/channel/${author?.channelId}` : demoChannelUrl}>
              <Typography variant='subtitle2' color='#a6a6a6'>
                {author?.title || demoChannelTitle}
                {author?.title && <CheckCircle sx={{ fontSize: 12, color: '#a6a6a6', ml: '5px' }} />}
              </Typography>
            </Link>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
              <Typography variant='subtitle2' color='#a6a6a6' overflow='hidden'>
                {stats?.views && `${(stats?.views).toLocaleString('en-US', { notation: 'compact' })} views • ${publishedTimeText} `}
              </Typography>
            </Link>
          </Typography>
        </Stack>

      </CardContent>
    </Card>
  )
}

export default VideoCard