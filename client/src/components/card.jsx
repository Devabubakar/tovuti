import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { StyledAvator } from './hero';
import styled from 'styled-components';
import { navigate } from 'gatsby';

const StyledImage = styled(GatsbyImage)`
  max-height: 250px;
`;

const CardContainer = ({ blog }) => {
  const avatarImage = getImage(blog?.author.cover.asset.gatsbyImageData);

  return (
    <Card
      elevation={0}
      my={3}
      sx={{
        maxWidth: 600,
        cursor: 'pointer',
        '&:hover': { color: 'success.main' },
      }}
      onClick={() => navigate(`/${blog.slug.current}`)}
    >
      <CardActionArea>
        <StyledImage
          alt='card media'
          image={blog?.image.asset.gatsbyImageData}
          placeholder='blurred'
        />
        <CardContent>
          <Typography variant='h6' sx={{ fontWeight: '600' }}>
            {blog.title}
          </Typography>
          <Typography variant='p' my={3} color='gray'>
            {blog?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container spacing={1} mt={1}>
          <Grid item xs={2}>
            <StyledAvator alt='author avator' image={avatarImage} />
          </Grid>
          <Grid item xs={10}>
            <Typography sx={{ fontSize: '16px' }}>
              {blog?.author.name}
            </Typography>
            <Typography sx={{ fontSize: '14px', color: 'gray' }}>
              {blog?.date}
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
export default CardContainer;
