import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { GatsbyImage } from 'gatsby-plugin-image';
import Box from '@mui/material/Box';
import { StyledAvator } from './hero';
import TopicHeading from './topic';
import { StyledLink } from './reusableStyles';
import Divider from '@mui/material/Divider';

const Archive = ({ blogs }) => {
  return (
    <Box>
      <TopicHeading topic='Archive Blogs' />
      {blogs.slice(0, 3).map((blog, index) => {
        return (
          <Box key={index}>
            <Grid container spacing={3} my={2}>
              <Grid item sm={8}>
                <StyledLink to={blog.node.slug.current}>
                  <Typography
                    variant='h6'
                    sx={{
                      fontWeight: '600',
                      cursor: 'pointer',
                      '&:hover': { color: 'success.main' },
                    }}
                  >
                    {blog.node.title}
                  </Typography>

                  <Typography my={2} sx={{ color: 'grey' }}>
                    {blog.node.description}
                  </Typography>
                </StyledLink>
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
                    <Typography sx={{ fontSize: '16px', color: 'grey' }}>
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
            <Divider light />
          </Box>
        );
      })}
    </Box>
  );
};

export default Archive;
