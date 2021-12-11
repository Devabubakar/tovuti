import * as React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Seo from '../../components/seo';

export const query = graphql`
  query sanityEpisode($id: String!) {
    sanityEpisode(id: { eq: $id }) {
      slug {
        current
      }
      youtubeID
      title
      date(fromNow: true)
      description
      image {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`;

const SanityEpisode = ({ data }) => {
  const episode = data.sanityEpisode;
  return (
    <Layout>
      <Seo title={episode.title} description={episode.description} />
      <GatsbyImage
        image={episode.image?.asset?.gatsbyImageData}
        alt={episode.title}
      />
      <h1>{episode.title}</h1>
      <p>{episode.description}</p>
      <p>{episode.date}</p>
      {console.log(episode.youtubeID)}
      <iframe
        width='420'
        height='315'
        src={`https://www.youtube.com/embed/${episode?.youtubeID}`}
      ></iframe>
    </Layout>
  );
};

export default SanityEpisode;
