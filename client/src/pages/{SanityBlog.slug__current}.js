import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Container from '@mui/material/Container';
import { GatsbyImage } from 'gatsby-plugin-image';
import Typography from '@mui/material/Typography';

import { StyledAvator } from '../components/hero';
import BlockContent from '@sanity/block-content-to-react';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';

const StyledImage = styled(GatsbyImage)`
  max-height: 400px;
  border-radius: 12px;
  margin: 0 auto;
`;

const SanityBlog = ({ data }) => {
  const blog = data.sanityBlog;

  return (
    <Layout>
      <Seo title={blog.title} />

      <Container maxWidth='md'>
        <StyledImage
          image={blog.image.asset.gatsbyImageData}
          alt='blog image'
        />
        <Box textAlign='center' sx={{ cursor: 'pointer' }}>
          <Grid container mt={2} my={3}>
            <Grid item sm={1}>
              <StyledAvator
                alt='author avator'
                image={blog.author.cover.asset.gatsbyImageData}
              />
            </Grid>
            <Grid item sm={4} sx={{ textAlign: 'start' }}>
              <Typography sx={{ fontSize: '16px' }}>
                {blog?.author.name} in {blog.categories[0].category}
              </Typography>
              <Typography sx={{ fontSize: '14px', color: 'gray' }}>
                {blog?.date}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant='h4' sx={{ fontWeight: 600 }} my={2}>
            {blog.title}
          </Typography>
        </Box>

        <BlockContent blocks={blog._rawContent} />
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query sanityBlog($id: String!) {
    sanityBlog(id: { eq: $id }) {
      slug {
        current
      }
      date(fromNow: true)
      id
      description
      title
      image {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      _rawContent(resolveReferences: { maxDepth: 10 })
      categories {
        category
      }
      author {
        name
        cover {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export default SanityBlog;
