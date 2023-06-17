import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoChannelUrl, demoVideoTitle, demoVideoUrl, demoChannelTitle, demoThumbnailUrl } from '../utils/constants'

const VideoCardSearch = ({ video: { video: { author, stats, thumbnails, videoId, title, badges, publishedTimeText, descriptionSnippet } } }) => {
  return (
    <Card sx={{ boxShadow: 'none', borderRadius: 0, backgroundColor: '#141414', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }}>
          <CardMedia
            image={thumbnails[1]?.url || demoThumbnailUrl}
            alt={title}
            sx={{ width: { xs: '300px', sm: '356px', md: '330px' }, height: '180px', borderRadius: '20px', }}
          />
          <CardContent disableSpacing sx={{ backgroundColor: '#141414', width: { xs: '280px', sm: '350px', md: "720px" }, p: 0, pl: 2 }}>
            <Stack direction='row'>
              <Typography component='div'>
                <Typography variant='h5' color='white' overflow='hidden'>
                  {title || demoVideoTitle}
                </Typography>
                <Typography variant='subtitle2' color='#a6a6a6' overflow='hidden'>
                  {stats?.views && `${(stats?.views).toLocaleString('en-US', { notation: 'compact' })} views • ${publishedTimeText} `}
                </Typography>
                <Link to={author?.channelId ? `/channel/${author?.channelId}` : demoChannelUrl}>
                  <Stack direction='row' alignItems='center' sx={{ pt: 1, pb: 1 }}>
                    <CardMedia
                      image={author?.avatar[0].url}
                      alt={title}
                      sx={{ width: '36px', height: '36px', borderRadius: '50%', mr: '10px' }}
                    />
                    <Typography variant='subtitle2' color='#a6a6a6'>
                      {author?.title || demoChannelTitle}
                      {author?.title && <CheckCircle sx={{ fontSize: 12, color: '#a6a6a6', ml: '5px' }} />}
                    </Typography>
                  </Stack>
                </Link>
                <Typography variant='subtitle2' color='#a6a6a6'>
                  {descriptionSnippet}
                </Typography >
                <Typography variant='subtitle2' fontWeight='bold' sx={{ mt: 2, borderRadius: '4px', pl: '5px', pr: '5px', width: '28px', color: '#c9c9c9', backgroundColor: '#3d3d3d' }}>
                  {badges[0]}
                </Typography>
              </Typography>
            </Stack>
          </CardContent>
        </Stack>
      </Link >
    </Card >
  )
}

export default VideoCardSearch