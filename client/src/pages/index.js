import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Hero from '../components/hero';

export const Blog = styled.div`
  background-color: #333333;
  color: white;
  border-radius: 12px;
  padding: 1%;

  text-align: start;
  margin: 5%;

  p :last-of-type {
    padding: 0 12px;
    margin: 5%;
  }
`;

const IndexPage = ({ data }) => {
  const blogs = data.allSanityPost.nodes;

  return (
    <Layout>
      <Seo title='Home' />
      <Hero blogs={blogs} />
    </Layout>
  );
};

export const query = graphql`
  query GetAllPost {
    allSanityPost(
      filter: { image: { asset: { gatsbyImageData: { ne: "null" } } } }
    ) {
      nodes {
        date(fromNow: true)
        description
        _rawContent(resolveReferences: { maxDepth: 10 })
        id
        title
        image {
          asset {
            gatsbyImageData
          }
        }
      }
      totalCount
    }
  }
`;

export default IndexPage;
