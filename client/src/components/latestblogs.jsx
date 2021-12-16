import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { GatsbyImage } from 'gatsby-plugin-image';
import Box from '@mui/material/Box';
import { StyledAvator } from './hero';
import TopicHeading from './topic';

const LatestBlogs = ({ blogs }) => {
  return (
    <Box>
      <TopicHeading topic='Latest Blogs' />
      {blogs.slice(0, 5).map((blog, index) => {
        return (
          <Grid
            container
            key={index}
            spacing={3}
            my={2}
            sx={{ md: { width: '60%' } }}
          >
            <Grid item sm={8}>
              <Typography variant='h6' sx={{ fontWeight: '600' }}>
                {blog.node.title}
              </Typography>
              <Typography my={2} sx={{ color: 'gray' }}>
                {blog.node.description}
              </Typography>
              <Grid container spacing={1}>
                <Grid item md={2}>
                  <StyledAvator
                    image={blog.node?.author.cover.asset.gatsbyImageData}
                    alt='blog image'
                    placeholder='blurred'
                  />
                </Grid>
                <Grid item md={10}>
                  <Typography sx={{ fontSize: '16px' }}>
                    {blog.node.author.name} in{' '}
                    {blog.node.categories[0].category}
                  </Typography>
                  <Typography sx={{ fontSize: '16px', color: 'gray' }}>
                    {blog.node.date}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={4} my={1}>
              <GatsbyImage
                image={blog.node.image.asset.gatsbyImageData}
                alt='blog image'
              />
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};

export default LatestBlogs;