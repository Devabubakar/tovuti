const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  createPage({
    path: '/using-dsg',
    component: require.resolve('./src/templates/using-dsg.js'),
    context: {},
    defer: true,
  });
};



exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((results) =>
    results.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/blogs.js'),
        context: {
          slug: node.fields.slug,
        },
      });
    })
  );
};
