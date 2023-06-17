import React from 'react'
import { Stack, Typography, Button } from '@mui/material'
import { categories } from '../utils/constants'
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
  '&.MuiButton-text': {
    color: theme.palette.primary.main,
    padding: theme.spacing(1, 4, 1, 2),
    backgroundColor: theme.palette.secondary.dark,
    margin: theme.spacing(1),
    minWidth: 'auto',
    justifyContent: 'flex-start',
    alignItems: 'center',
    outline: 'none',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

const Sidebar = (props) => {
  return (
    <Stack
      direction={{ xs: 'row', sm: 'row', md: 'column' }}
      sx={{
        overflowY: 'auto',
        height: { xs: 'auto', md: '100%' },
        backgroundColor: '#141414',
        padding: '5px',
      }}
    >
      {categories.map((category) => (
        <ThemeProvider theme={buttonTheme}>
          <StyledButton
            onClick={() => props.setSelectedCategory(category.name)}
            variant='text'
            key={category.name}
            sx={{ boxShadow: 'rgba(108, 2, 2, 0.4) 0px 30px 60px -12px inset' }}
            style={{ background: category.name === props.selectedCategory && buttonTheme.palette.secondary.main }}
          >
            <Typography variant='subtitle2' marginRight='15px' display='flex' alignItems='center' justifyContent='center'
              style={{ color: category.name === props.selectedCategory ? buttonTheme.palette.primary.light : buttonTheme.palette.primary.main }}
            >
              {category.icon}
            </Typography>
            <Typography variant='subtitle2' display='flex' alignItems='center' justifyContent='center'
              style={{ color: category.name === props.selectedCategory ? buttonTheme.palette.primary.light : buttonTheme.palette.primary.main }}
            >
              {category.name}
            </Typography>
          </StyledButton>
        </ThemeProvider>
      ))}
    </Stack>
  )
}

export default Sidebar



/* <button
            className='category-btn'
            onClick={() => props.setSelectedCategory(category.name)}
            style={{
              background: category.name === props.selectedCategory && '#FC1503',
              color: 'white'
            }}
            key={category.name}
          >
            <span
              style={{ color: category.name === props.selectedCategory ? 'white' : 'red', marginRight: '15px' }}
            >
              {category.icon}
            </span>
            <span
              style={{ opacity: category.name === props.selectedCategory ? '1' : '0.4' }}
            >
              {category.name}
            </span>
          </button> */