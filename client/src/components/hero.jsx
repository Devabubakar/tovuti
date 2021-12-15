import React from 'react';
import Grid from '@mui/material/Grid';

import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Typography from '@mui/material/Typography';
import BlockContent from '@sanity/block-content-to-react';
import Box from '@mui/material/Box';
import styled from 'styled-components';

const StyledImage = styled(GatsbyImage)`
  border-radius: 6px;
  object-fit: 'cover';
  max-height: 450px;
`;

const Hero = ({ blogs }) => {
  const blog = blogs[Math.floor(Math.random() * blogs.length)];

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <StyledImage
            image={blog.image?.asset.gatsbyImageData}
            placeholder='blurred'
            alt='Blog preview'
          />
        </Grid>
        <Grid item xs={12} md={4} pl={2} mt={2}>
          <Typography mb={3} variant='h4' sx={{ fontWeight: '600' }}>
            {blog.title}
          </Typography>
          <Typography variant='p' color='gray'>
            {blog.description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
