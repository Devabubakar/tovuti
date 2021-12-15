import React from 'react';
import Grid from '@mui/material/Grid';

import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Typography from '@mui/material/Typography';
import BlockContent from '@sanity/block-content-to-react';

const Hero = ({ blogs }) => {
  const blog = blogs[Math.floor(Math.random() * blogs.length)];
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <StaticImage
          src='../images/gatsby-astronaut.png'
          placeholder='blurred'
          alt='A astronaut'
          layout='fixed'
          width={400}
          height={400}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography>{blog.title}</Typography>
        <Typography>{blog.description}</Typography>
      </Grid>
    </Grid>
  );
};

export default Hero;
