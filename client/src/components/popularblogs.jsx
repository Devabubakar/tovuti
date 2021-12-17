import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TopicHeading from './topic';

const PopularBlogs = ({ blogs }) => {
  return (
    <Box mx={3} sx={{ position: 'sticky', cursor: 'pointer' }}>
      <TopicHeading topic='Popular Blogs' />
      {blogs.slice(0, 5).map((blog, index) => {
        return (
          <Grid container my='2em' key={index}>
            <Grid item lg={2}>
              <Typography variant='h4' color='gray' sx={{ opacity: '.7' }}>
                0{index + 1}
              </Typography>
            </Grid>
            <Grid item lg={10}>
              <Typography
                variant='p'
                sx={{ fontWeight: 600, '&:hover': { color: 'success.main' } }}
              >
                {blog.node.title}
              </Typography>
              <Typography fontSize='16px' mt={1}>
                {blog.node.author.name} in {blog.node.categories[0].category}
              </Typography>
              <Typography color='gray' fontSize='16px'>
                {blog.node.date}
              </Typography>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};
export default PopularBlogs;
