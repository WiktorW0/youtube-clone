import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Stack, Box, Typography, Button, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Videos } from './'
import { CommentsFeed } from './'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { fetchingFromYTAPIV2 } from '../utils/fetchingFromYTAPIV2'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const [comments, setComments] = useState(null)
  const [showMore, setShowMore] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    fetchingFromYTAPIV2(`video/details/?id=${id}`)
      .then(data => setVideoDetail(data))
    fetchingFromYTAPIV2(`video/related-contents/?id=${id}`)
      .then(data => setVideos(data.contents))
    fetchingFromYTAPIV2(`video/comments/?id=${id}`)
      .then(data => setComments(data.comments))
  }, [id])

  if (!videoDetail) return 'Loading...'
  if (!videos) return 'Loading...'

  const { publishedDate, stats: { likes, views }, description, author, title } = videoDetail

  const publishedTime = new Date(publishedDate)
  const publishedTimeString = publishedTime.toDateString()
  console.log(videoDetail)
  return (
    <Box sx={{ ml: { xs: 1, sm: 1, md: 10 }, mr: { xs: 1, sm: 1, md: 10 } }}>
      <Stack direction={{ xs: 'column', md: 'row' }} gap={'20px'}   >
        <Stack sx={{ direction: 'column' }} >
          <Box flex={1}>
            <Box sx={{ position: { xs: 'sticky', sm: 'sticky', md: 'initial' }, top: '105px', zIndex: 10, height: { xs: '25vh', sm: '47vh', md: '77vh' } }}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                width='100%'
                height='100%'
                controls
              />
            </Box>
            <Typography color='white' variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' color='white' py={1} px={2} sx={{ borderBottom: '1px solid #3d3d3d', mb: 1 }}>
              <Link to={`/channel/${author?.channelId}`}>
                <Stack direction='row' alignItems='center'>
                  <CardMedia
                    component='img'
                    image={author.avatar[0].url}
                    sx={{ borderRadius: '50%', height: '40px', width: '40px' }}
                  />
                  <Typography variant='div'>
                    <Typography variant='h6' color='white' sx={{ ml: 2 }}>
                      {author?.title}
                      <CheckCircle sx={{ fontSize: '16px', color: 'white', ml: '5px' }} />
                    </Typography>
                    <Typography variant='subtitle2' color='white' sx={{ ml: 2 }}>
                      {author?.stats.subscribersText}
                    </Typography>
                  </Typography>
                  <Stack direction='row' sx={{ alignItems: 'center', ml: 2 }}>
                    <ThumbUpOffAltIcon sx={{ fontSize: '18px', color: 'white' }} />
                    <Typography variant='body1' sx={{ color: 'white', alignItems: 'center', ml: 1 }}>
                      {parseInt(likes).toLocaleString()}
                    </Typography>
                  </Stack>
                </Stack>
              </Link>

            </Stack>
            <Box sx={{ px: 2, py: { xs: 1, md: 1 }, backgroundColor: '#3d3d3d', borderRadius: '20px' }}>
              <Typography variant='subtitle1' fontWeight='bold' color='white'>
                {`${views.toLocaleString('en-US', { notation: 'compact' })} views • ${publishedTimeString}`}
              </Typography>
              <Typography variant='subtitle1' color='white' >
                Description
              </Typography>
              <Typography variant='body2' color='white' sx={{ mt: 2 }}>
                {showMore ? `${description}` : `${description.substring(0, 250)} ...`}
                <Button
                  variant='text'
                  sx={{ color: 'white' }}
                  onClick={() => setShowMore(!showMore)}
                  endIcon={
                    showMore ? <KeyboardDoubleArrowUpIcon /> : <KeyboardDoubleArrowDownIcon />
                  }
                >
                  {showMore ? 'Show less' : 'Show more'}
                </Button>
              </Typography>

            </Box>
            <Box sx={{ px: 2, py: { xs: 5, md: 1 }, justifyContent: 'center', alignItems: 'center', display: { xs: 'initial', sm: 'flex', md: 'flex', lg: 'none' } }}  >
              <Videos videos={videos} direction='column' isSearchFeed={false} />
            </Box>
            <CommentsFeed comments={comments} statistics={videoDetail} />
          </Box>
        </Stack>
        <Box sx={{ px: 4, py: { xs: 5, md: 1 }, justifyContent: 'center', alignItems: 'center', display: { xs: 'none', sm: 'none', md: 'none', lg: 'initial' } }} >
          <Videos videos={videos} direction='column' isSearchFeed={false} />
        </Box>
      </Stack >
    </Box >
  )
}

export default VideoDetail