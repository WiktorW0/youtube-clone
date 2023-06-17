import React from 'react'
import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard, VideoCardSearch } from './'

const Videos = ({ videos, direction, isSearchFeed, widthSearch }) => {

  if (!videos?.length) return 'Loading...'

  return (
    <Stack
      direction={direction || 'row'}
      justifyContent='start'
      flexWrap='wrap'
      gap={2}
    >
      {
        videos.map((item, index) => (
          <Box key={index}>
            {isSearchFeed ? item.type === 'video' && <VideoCardSearch video={item} /> : item.type === 'video' && <VideoCard video={item} />}
            {item.type === 'channel' && <ChannelCard channelDetail={item} widthSearch={widthSearch} />}
          </Box>
        ))
      }
    </Stack >
  )
}

export default Videos