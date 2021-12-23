import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { GatsbyImage } from 'gatsby-plugin-image';
import Typography from '@mui/material/Typography';

import { StyledAvator } from '../components/hero';
import BlockContent from '@sanity/block-content-to-react';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';

const StyledImage = styled(GatsbyImage)`
  max-height: 400px;
  border-radius: 6px;
  margin: 0 auto;
`;

const SanityBlog = ({ data }) => {
  const blog = data.sanityBlog;

  return (
    <Layout>
      <Seo title={blog.title} />

      <Box mx={{  md: '10%' }}>
        <StyledImage
          image={blog.image.asset.gatsbyImageData}
          alt='blog image'
        />
        <Box textAlign='center' sx={{ cursor: 'pointer' }}>
          <Grid container my={3}>
            <Grid item xs={4} sm={1}>
              <StyledAvator
                alt='author avator'
                image={blog.author.cover.asset.gatsbyImageData}
              />
            </Grid>
            <Grid item xs={8} sm={4} sx={{ textAlign: 'start' }}>
              <Typography sx={{ fontSize: '16px' }}>
                {blog?.author.name}
              </Typography>
              <Typography sx={{ fontSize: '14px', color: 'grey' }}>
                {blog?.date}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant='h5' sx={{ fontWeight: 600 }} my={2}>
            {blog.title}
          </Typography>
        </Box>

        <BlockContent blocks={blog._rawContent} />
      </Box>
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
