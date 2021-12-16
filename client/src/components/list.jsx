import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardContainer from './card';

import TopicHeading from './topic';
const List = ({ blogs }) => {
  return (
    <Box mb={2}>
      <TopicHeading topic='Explore...' />
      <Grid
        container
        spacing={3}
        direction='row'
        mt={2}
        
      >
        {blogs.slice(0,2).map((blog, index) => (
          <Grid item xs={12}  sm={6} key={index}>
            <CardContainer blog={blog.node} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default List;
