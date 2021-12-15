import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
const TopicHeading = () => {
  return (
    <Box sx={{ flexShrink: 1 }}>
      <Typography variant='h6' mb={2} sx={{ fontWeight: 600 }}>
        Featured Blogs
      </Typography>
      <LinearProgress variant='determinate' value={10} color='inherit' />
    </Box>
  );
};

export default TopicHeading;
