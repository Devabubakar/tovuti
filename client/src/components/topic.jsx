import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
const TopicHeading = ({ topic }) => {
  return (
    <Box sx={{ flexShrink: 1 }}>
      <Typography variant='h6' mb={2} sx={{ fontWeight: 600 }}>
        {topic}
      </Typography>
      <LinearProgress
        role='progressbar'
        aria-valuenow='10'
        aria-valuemin='0'
        aria-valuemax='100'
        variant='determinate'
        value={10}
        color='inherit'
      />
    </Box>
  );
};

export default TopicHeading;
