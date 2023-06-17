import React from 'react'
import { Stack, Box, Typography, CardMedia } from '@mui/material'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const CommentsFeed = ({ comments, statistics: { stats } }) => {

  if (!comments) return 'Loading...'

  return (
    <Stack
      direction='column'
      sx={{
        gap: 4,
        justifyContent: 'flex-start',
        py: 1,
        px: 1,
        width: '98%'
      }}
    >
      <Box display='flex' justifyContent='flex-start' alignItems='center' sx={{ backgroundColor: '#141414', borderTop: '1px solid #3d3d3d', pt: 2 }}>
        <Typography variant='h6' color='white'>
          {stats.comments.toLocaleString('en-US', { notation: 'compact' })} Comments
        </Typography>
      </Box>
      {
        comments.map((item, index) => (
          <Stack direction='row' key={index}  >
            <Box sx={{ minWidth: '48px', minHeight: '48px', mr: 2, }}>
              <CardMedia
                image={item.author?.avatar[0]?.url}
                sx={{ borderRadius: '50%' }}
                component='img'
              />
            </Box>
            <Box>
              <Typography variant='body1' color='white' fontWeight='bold' >
                {item.author?.title}
              </Typography>
              <Typography color='white' sx={{ mt: 1 }} >
                {item.content}
              </Typography>
              <Stack direction='row' alignItems='center' mt={1} color='white'>
                <Box>
                  <ThumbUpOffAltIcon />
                </Box>
                {item.stats?.votes === 0 ? '' : <Typography fontSize='16px' color='#a3a3a3' ml={1}>
                  {item.stats?.votes}
                </Typography>}
                <Box ml={1}>
                  <ThumbDownOffAltIcon />
                </Box>
              </Stack>
            </Box>
          </Stack>
        ))
      }
    </Stack>
  )
}

export default CommentsFeed