import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Typography from '@mui/material/Typography';


import Button from '@mui/material/Button';
import { StyledLink } from './reusableStyles';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';



const Header = ({ siteTitle }) => {
  const location = useLocation();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} color='inherit' position='static'>
        <Toolbar sx={{ md: { mx: 3 }, mt: 3 }}>
          <StyledLink to='/'>
            <IconButton
              color='inherit'
              sx={{ outline: 'green 3px solid', mx: 2 }}
            >
              <AutoAwesomeIcon />
            </IconButton>
          </StyledLink>
          <Typography
            variant='h5'
            component={Link}
            to='/'
            sx={{
              flexGrow: 1,
              fontWeight: 500,
              color: 'success.main',
              textDecoration: 'none',
            }}
          >
            TOVUTI
          </Typography>

          {location.pathname !== '/allblogs' ? (
            <StyledLink to='/allblogs'>
              <Button color='success' sx={{ mx: 3 }}>
                All Blogs
              </Button>
            </StyledLink>
          ) : null}
        </Toolbar>
      </AppBar>
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
