import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos, } from './'
import { useParams } from 'react-router-dom'
import { fetchingFromYTAPIV2 } from '../utils/fetchingFromYTAPIV2'

const SearchFeed = () => {
  const { searchTerm } = useParams()
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchingFromYTAPIV2(`search/?q=${searchTerm}`)
      .then(data => setVideos(data.contents))
  }, [searchTerm])
  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
        <span style={{ color: '#F31503' }}>
          {searchTerm}
        </span> search results
      </Typography>
      <Videos videos={videos} isSearchFeed={true} direction={'column'} widthSearch={'1096px'} />
    </Box>
  )
}

export default SearchFeed