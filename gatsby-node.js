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
                  headings {
                    value
                    depth
                  }
                  frontmatter {
                    path
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        console.log('I Ran');

        const posts = result.data.allMarkdownRemark.edges;
        posts.forEach(({ node }, index) => {
          const path = node.frontmatter.path;
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
              prev: index === 0 ? null : posts[index - 1],
              next: index === posts.length - 1 ? null : posts[index + 1],
            },
          });

          resolve();
        });
      })
    );
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/tags/)) {
    page.matchPath = '/tags/:tag';
    createPage(page);
  }
};
