import React from 'react';
import Grid from '@mui/material/Grid';

import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import styled from 'styled-components';
import TopicHeading from './topic';

const StyledImage = styled(GatsbyImage)`
  border-radius: 6px;
  object-fit: 'cover';
  max-height: 400px;
  transition: 'all 250ms';
  '&:hover': {
    scale: 3;
  }
`;
export const StyledAvator = styled(GatsbyImage)`
  border-radius: 50%;
  height: 45px;
  aspect-ratio: 1/1;
`;

const Hero = ({ blogs }) => {
  if (!blogs) {
    return null;
  }

  const blog = blogs[0].node;

  const avatarImage = getImage(blog.author.cover.asset.gatsbyImageData);

  return (
    <Box>
      <TopicHeading topic='Featured Blog' />
      <Grid container spacing={3} py='2%' sx={{ cursor: 'pointer' }}>
        <Grid item md={6} lg={8}>
          <StyledImage
            image={blog?.image.asset.gatsbyImageData}
            placeholder='blurred'
            alt='Blog preview'
          />
        </Grid>
        <Grid item md={6} lg={4} pl={2}>
          <Typography
            mb={1}
            sx={{
              fontWeight: '800',
              transition: 'all 500ms',
              fontSize: '1.85em',
            }}
          >
            {blog?.title}
          </Typography>
          <Typography variant='p' color='gray'>
            {blog?.description}
          </Typography>
          <Grid container spacing={1} mt={1}>
            <Grid item xs={2}>
              <StyledAvator alt='author avator' image={avatarImage} />
            </Grid>
            <Grid item xs={10}>
              <Typography sx={{ fontSize: '16px' }}>
                {blog?.author.name}
              </Typography>
              <Typography sx={{ fontSize: '14px', color: 'gray' }}>
                {blog?.date}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
