import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { StyledLink } from './reusableStyles';

const Navigation = () => {
  //scroll event listener
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
  }

  const data = useStaticQuery(graphql`
    query MyCategories {
      site {
        siteMetadata {
          categories
        }
      }
    }
  `);
  const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    position: `${scrolled ? 'fixed' : 'relative'}`,
    whiteSpace: 'nowrap',
    gap: '50px',
    textTransform: 'uppercase',
    overflowX: 'scroll',
    overflowY: 'hidden',
    margin: '1% 2%',
    padding: '1em',
    background: `${scrolled ? '#fff' : 'transparent'}`,
    zIndex: 1000,
    top: `${scrolled ? '0' : null}`,
    marginTop: `${scrolled ? '0' : null}`,
    width: `calc(100% - 2%)`,
    transition: 'all 500ms',
  }));
  const categories = data.site.siteMetadata.categories;

  return (
    <StyledBox>
      {categories.map((category, index) => (
        <Box key={index}>
          <StyledLink
            to={`/categories/${category
              .toLowerCase()
              .replace(/ /g, '-')
              .replace(/[^\w-]+/g, '-')}`}
          >
            <Typography
              variant='p'
              color='grey'
              key={index}
              sx={{
                cursor: 'pointer',
                '&:first-of-type': {
                  color: 'black',
                },
                '&:hover': {
                  color: 'success.main',
                },
              }}
            >
              {category}
            </Typography>
          </StyledLink>
        </Box>
      ))}
    </StyledBox>
  );
};

export default Navigation;
