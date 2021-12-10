import * as React from 'react';

import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Test = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: ASC }) {
        totalCount
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const BlogLink = styled(Link)`
    color: blue;
  `;

  return (
    <Layout>
      <Seo title='Page Test' />
      <h1>Hi from the Test Page</h1>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <BlogLink to={node.fields.slug}>{node.frontmatter?.title}</BlogLink>
          <span>{node.frontmatter?.date}</span>
          <br />
          {node.excerpt}
        </div>
      ))}

      <Link to='/'>Go back to the homepage</Link>
      <br />
      <Link to='/page-2'>Go To Page 2</Link>
    </Layout>
  );
};

export default Test;
