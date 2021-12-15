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
  const blogs = data.allSanityBlog.nodes;
  const totalCount = data.totalCount;

  return (
    <Layout>
      <Seo title='Home' />
      <Hero blogs={blogs} totalCount={totalCount} />
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allSanityBlog {
      nodes {
        id
        date(fromNow: true)
        description
        title
        image {
          asset {
            gatsbyImageData
          }
        }
        author {
          name
          cover {
            asset {
              gatsbyImageData
            }
          }
        }
        categories {
          category
        }
        _rawContent(resolveReferences: { maxDepth: 10 })
      }
      totalCount
    }
  }
`;

export default IndexPage;
