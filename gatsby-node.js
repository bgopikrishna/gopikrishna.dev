const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/template/blogPostTemplate.js');

    resolve(
      graphql(
        `
          query BlogPostList {
            allMarkdownRemark(
              sort: { order: DESC, fields: frontmatter___date }
            ) {
              edges {
                node {
                  frontmatter {
                    path
                  }
                  
                }
              }
            }
          }
        `
      ).then(result => {
        console.log('I Ran');

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const path = node.frontmatter.path;
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
            },
          });

          resolve();
        });
      })
    );
  });
};
