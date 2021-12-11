import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';

export const query = graphql`
  query getAllBlog {
    allSanityEpisode(
      limit: 20
      sort: { fields: date, order: DESC }
      filter: { youtubeID: { ne: null } }
    ) {
      totalCount
      nodes {
        date(fromNow: true)
        slug {
          current
        }
        id
        title
        gatsbyPath(filePath: "/episodes/{SanityEpisode.slug__current}")
        description
        youtubeID
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const episodes = data.allSanityEpisode;

  return (
    <Layout>
      <Seo title='Home' />
      <h1>Hi people</h1>
      <p>Welcome to my new Blog.</p>
      <p>{episodes.totalCount} Blogs</p>
      <ul>
        {episodes.nodes.map((episode) => (
          <div key={episode.id}>
            <Link to={episode.gatsbyPath}>{episode.title}</Link>

            <br />
          </div>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;
