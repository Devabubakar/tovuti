import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

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
  const posts = data.allSanityPost;

  return (
    <Layout>
      <Seo title='Home' />
      <h1>Hi people</h1>
      <p>Welcome to my new Blog.</p>

    
        {posts.nodes.map((post) => (
          <Blog key={post.title}>
            <p>
              {post.date} - {post.title}
            </p>
            <p>{post.description}</p>

            <BlockContent blocks={post._rawContent} />

            <br />
          </Blog>
        ))}
   
    </Layout>
  );
};

export const query = graphql`
  query getAllPost {
    allSanityPost(sort: { fields: date, order: DESC }) {
      nodes {
        title
        description
        date(fromNow: true)
        _rawContent(resolveReferences: { maxDepth: 10 })
      }
    }
  }
`;

export default IndexPage;
