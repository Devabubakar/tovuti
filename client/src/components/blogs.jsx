import React from 'react';
import Grid from '@mui/material/Grid';
import LatestBlogs from './latestblogs';
import PopularBlogs from './popularblogs';
const Blogs = ({ blogs }) => {
  return (
    <Grid container direction='row' spacing={3}>
      <Grid item sm={7} md={8}>
        <LatestBlogs blogs={blogs} />
      </Grid>
      <Grid item sm={5} md={4}>
        <PopularBlogs blogs={blogs} />
      </Grid>
    </Grid>
  );
};
export default Blogs;
