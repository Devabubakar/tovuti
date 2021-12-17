import { useStaticQuery, graphql } from 'gatsby';

export const useBlogData = () => {
  const data = useStaticQuery(
    graphql`
      query AllBlogs {
        allSanityBlog {
          edges {
            node {
              id
              date(formatString: "DD MMMM")
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
