import React from 'react';
import Grid from '@mui/material/Grid';
import Archive from './archive';
import LatestBlogs from './latestblogs';
const Blogs = ({ blogs }) => {
  return (
    <Grid container direction='row' spacing={3}>
      <Grid item sm={7} md={8} order={{ xs: 2, sm: 1 }}>
        <Archive blogs={blogs} />
      </Grid>
      <Grid item sm={5} md={4} order={{ xs: 1, sm: 2 }}>
        <LatestBlogs blogs={blogs} />
      </Grid>
    </Grid>
  );
};
export default Blogs;
