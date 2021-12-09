import * as React from 'react';

import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const Test = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          name
        }
      }
    }
  `);
  return (
    <Layout>
      <Seo title='Page Test' />
      <h1>Hi from the Test Page</h1>
      <p>{data.allFile.nodes.map((name) => name.name)}</p>

      <Link to='/'>Go back to the homepage</Link>
      <br />
      <Link to='/page-2'>Go To Page 2</Link>
    </Layout>
  );
};

export default Test;
