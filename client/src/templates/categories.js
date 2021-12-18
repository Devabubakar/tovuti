import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

export default function Categories({ data }) {
  return (
    <Layout>
      <Seo title={data.sanityCategories.category} />
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
    }
  }
`;
