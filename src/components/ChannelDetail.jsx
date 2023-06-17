import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, CardMedia, Button, Stack, Typography } from '@mui/material'
import { Videos, DetailedChannelCard } from './'
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { fetchingFromYTAPIV2 } from '../utils/fetchingFromYTAPIV2'

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: '#FF0000',
      light: '#FFFFFF'
    },
    secondary: {
      main: '#343835',
      light: '#a1a1a1',
      dark: '#000000'
    },
  },
  shape: {
    borderRadius: 20
  }
});

const StyledButton = styled(Button)(({ theme }) => ({
  '&.MuiButton-outlined': {
    color: theme.palette.primary.main,
    padding: theme.spacing(1, 2, 1, 2),
    transition: theme.transitions.create('width'),
    width: '140px',
    backgroundColor: theme.palette.secondary.dark,
    marginTop: theme.spacing(2),
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));


const ChannelDetail = () => {
  const [extrasDisplay, setExtrasDisplay] = useState('Video')
  const [channelDetail, setChannelDetail] = useState({})
  const [videos, setVideos] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetchingFromYTAPIV2(`channel/videos/?id=${id}`)
      .then(data => setVideos(data.contents))
    fetchingFromYTAPIV2(`channel/details/?id=${id}`)
      .then(data => setChannelDetail(data))
  }, [id])

  const videoDisplay = () => {
    setExtrasDisplay('Video')
  }
  const informationDisplay = () => {
    setExtrasDisplay('Information')
  }

  return (
    <Box minHeight='96vh'>
      <Box >
        <CardMedia
          image={channelDetail?.banner?.desktop[5]?.url}
          sx={{ height: '400px', zIndex: 10, width: '100%' }}
          component='img'
        />
        <DetailedChannelCard channelDetail={channelDetail} />
      </Box>
      <ThemeProvider theme={buttonTheme}>
        <Stack direction='row' sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <StyledButton
            variant="outlined"
            onClick={videoDisplay}
            style={{
              background: extrasDisplay === 'Video' && buttonTheme.palette.secondary.main,
              color: extrasDisplay === 'Video' && buttonTheme.palette.primary.light
            }}
            sx={{ m: 2 }}
          >
            Videos
          </StyledButton>
          <StyledButton
            variant="outlined"
            onClick={informationDisplay}
            style={{
              background: extrasDisplay === 'Information' && buttonTheme.palette.secondary.main,
              color: extrasDisplay === 'Information' && buttonTheme.palette.primary.light
            }}
            sx={{ m: 2 }}
          >
            Informations
          </StyledButton>
        </Stack>
      </ThemeProvider>
      <Box sx={{ display: 'flex', p: 2, justifyContent: 'center' }}>
        {extrasDisplay === 'Video' ?
          <Box sx={{ ml: { sm: '100px' } }}>
            <Videos videos={videos} isSearchFeed={false} />
          </Box> :
          <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} justifyContent='center'>
            <Box sx={{ mt: 2, mr: 10, width: { xs: '100%', sm: '100%', md: '520px' }, pb: 4 }}>
              <Typography variant='h6' color='white'   >
                Desrciption
              </Typography>
              <Typography variant='subtitle1' color='#a6a6a6' sx={{ borderBottom: '1px solid #3d3d3d', mb: 2, mt: 2, pb: 2 }} >
                {channelDetail?.description}
              </Typography>
              <Typography variant='h6' color='white'   >
                Details
              </Typography>
              <Typography variant='subtitle1' color='#a6a6a6' sx={{ borderBottom: '1px solid #3d3d3d', mb: 2, mt: 2, pb: 2 }} >
                Localization: {channelDetail?.country === undefined ? 'not stated' : channelDetail?.country}
              </Typography>
            </Box>
            <Box sx={{ ml: { xs: 0, sm: 0, md: 2 }, width: { xs: '100%', sm: '300px' } }}>
              <Typography variant='h6' color='white' sx={{ borderBottom: '1px solid #3d3d3d', mb: 2, pb: 2 }} >
                Stats
              </Typography>
              <Typography variant='subtitle1' color='#a6a6a6' sx={{ borderBottom: '1px solid #3d3d3d', mb: 2, pb: 2 }}  >
                {channelDetail?.joinedDateText}
              </Typography>
              <Typography variant='subtitle1' color='#a6a6a6' sx={{ borderBottom: '1px solid #3d3d3d', mb: 2, pb: 2 }} >
                {channelDetail?.stats.views.toLocaleString('pl-PL')} video view count
              </Typography>
            </Box>
          </Stack>
        }
      </Box>
    </Box>
  )

}

export default ChannelDetail