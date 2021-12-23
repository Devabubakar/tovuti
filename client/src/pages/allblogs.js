import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { useBlogData } from '../hooks/useBlogData';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CardContainer from '../components/card';
import Typography from '@mui/material/Typography';

const AllBlogs = () => {
  const blogs = useBlogData();
  return (
    <Layout>
      <Seo title='AllBlogs' />
      <Container maxWidth='md'>
        <Typography variant='h4'>All Blogs</Typography>
        <Grid container spacing={3} direction='row' mt={2}>
          {blogs.map((blog, index) => {
            return (
              <Grid item xs={12} sm={6} key={index}>
                <CardContainer blog={blog.node} key={index} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Layout>
  );
};

export default AllBlogs;
