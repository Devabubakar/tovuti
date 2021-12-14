import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Categories from './categories';
const StyledBox = styled(Box)(({ theme }) => ({
  '& .MuiTextField-root': { width: '15ch' },
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const Header = ({ siteTitle }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} color='inherit' position='static'>
        <Toolbar sx={{ md: { mx: 3 }, mt: 3 }}>
          <IconButton color='success'>
            <AutoAwesomeIcon />
          </IconButton>
          <Typography
            variant='h5'
            color='inherit'
            sx={{ flexGrow: 1, fontWeight: 500, cursor: 'pointer' }}
          >
            BLOGGER
          </Typography>
          <StyledBox component='form' noValidate autoComplete='off'>
            <TextField
              label='Search...'
              type='search'
              variant='standard'
              startadornment={
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </StyledBox>
          <Button color='success' sx={{ mx: 3 }}>
            Sign In
          </Button>
          <StyledButton variant='outlined' color='success'>
            Create an Account
          </StyledButton>
        </Toolbar>
      </AppBar>
      <Categories />
    </Box>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
