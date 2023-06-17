import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar, Videos } from './'
import { fetchingFromYTAPIV2 } from '../utils/fetchingFromYTAPIV2'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchingFromYTAPIV2(`search/?q=${selectedCategory}`)
      .then(data => setVideos(data.contents))
  }, [selectedCategory])
  return (
    <Stack
      sx={{ flexDirection: { xs: 'column', md: 'row' }, }}
    >
      <Box
        sx={{
          height: { xs: 'auto', md: '90vh' }, borderRight: '1px solid #3d3d3d', px: { xs: 0, md: 2 }, position: { xs: 'sticky' },
          top: { xs: '105px' }, backgroundColor: '#141414'
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '100%', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
          {selectedCategory} <span style={{ color: '#F31503' }}>
            videos
          </span>
        </Typography>
        <Videos videos={videos} isSearchFeed={false} />
      </Box>
    </Stack>
  )
}
export default Feed  