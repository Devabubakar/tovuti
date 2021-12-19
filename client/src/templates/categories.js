import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContainer from '../components/card';
import Grid from '@mui/material/Grid';

export default function Categories({ data }) {
  return (
    <Layout>
      <Seo title={data.sanityCategories.category} />
      <Container maxWidth='md'>
        <Typography variant='h3' sx={{ fontWeight: 800, textAlign: 'center' }}>
          {data.sanityCategories.category}
        </Typography>
        <Grid container spacing={3} direction='row' mt={2}>
          {data.sanityCategories.blogs.map((blog, index) => {
            return (
              <Grid item xs={12} sm={6} key={index}>
                <CardContainer blog={blog} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
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
