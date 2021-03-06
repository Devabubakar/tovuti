import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Typography from '@mui/material/Typography';
import CardContainer from '../components/card';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';

export default function Categories({ data }) {
  return (
    <Layout>
      <Seo title={data.sanityCategories.category} />
      <Box>
        <Typography
          variant='h5'
          mt={2}
          sx={{ fontWeight: 800, textAlign: 'center' }}
        >
          {data.sanityCategories.category}
        </Typography>
        {data.sanityCategories.blogs.length === 0 ? (
          <Box>
            <Typography> Empty for now . come back later</Typography>
          </Box>
        ) : (
          <Grid container direction='row' mt={2}>
            {data.sanityCategories.blogs.map((blog, index) => {
              return (
                <Grid item xs={12} sm={6} key={index}>
                  <CardContainer blog={blog} />
                </Grid>
              );
            })}
          </Grid>
        )}
      </Box>
    </Layout>
  );
}
export const query = graphql`
  query CategoryTemplateQuery($id: String!) {
    sanityCategories(id: { eq: $id }) {
      slug {
        current
      }
      category

      blogs {
        image {
          asset {
            gatsbyImageData
          }
        }
        title
        slug {
          current
        }
        id
        description
        date(fromNow: true)
        author {
          cover {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          name
        }
        _rawContent(resolveReferences: { maxDepth: 10 })
      }
    }
  }
`;
