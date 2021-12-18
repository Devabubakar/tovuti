import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContainer from '../components/card';
import Box from '@mui/material/Box';

export default function Categories({ data }) {
  return (
    <Layout>
      <Seo title={data.sanityCategories.category} />
      <Container>
        <Typography>{data.sanityCategories.category}</Typography>
        {data.sanityCategories.blogs.map((blog, index) => {
          return (
            <Box key={index}>
              <CardContainer blog={blog} />;
            </Box>
          );
        })}
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
