import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardContainer from './card';

import TopicHeading from './topic';
const List = ({ blogs }) => {
  //shuffle the blogs
  const shuffled = blogs.sort(() => 0.5 - Math.random());
  
  return (
    <Box mb={2} mt={3}>
      <TopicHeading topic='Explore...' />
      <Grid container spacing={3} direction='row' mt={2}>
        {shuffled.slice(0, 2).map((blog, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <CardContainer blog={blog.node} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default List;
