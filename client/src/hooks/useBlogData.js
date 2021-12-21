import { useStaticQuery, graphql } from 'gatsby';

export const useBlogData = () => {
  const data = useStaticQuery(
    graphql`
      query AllBlogs {
        allSanityBlog(sort: { fields: date, order: DESC }) {
          edges {
            node {
              id
              date(fromNow: true)
              description
              title
              slug {
                current
              }
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
                slug {
                  current
                }
              }
              _rawContent(resolveReferences: { maxDepth: 10 })
            }
          }

          totalCount
        }
      }
    `
  );
  
  return data.allSanityBlog.edges;
};
