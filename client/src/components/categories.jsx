import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Categories = () => {
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
    whiteSpace: 'nowrap',
    gap: '50px',
    textTransform: 'uppercase',
    overflowX: 'scroll',
    overflowY: 'hidden',
    margin: '1% 2%',
    padding: '1em',

    cursor: 'pointer',
  }));
  const categories = data.site.siteMetadata.categories;

  return (
    <StyledBox>
      {categories.map((category) => (
        <Typography
          variant='p'
          color='gray'
          sx={{
            '&:first-child': {
              color: 'black',
            },
            '&:hover': {
              color: 'black',
            },
          }}
        >
          {' '}
          {category}
        </Typography>
      ))}
    </StyledBox>
  );
};

export default Categories;
