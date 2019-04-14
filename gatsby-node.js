const path = require ('path');

exports.createPages = ({ actions, graphql}) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/blog-post.js');

  return graphql(
    `{
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              date(formatString: "MMMM, DD, YYYY")
              path
              title
              excerpt
              tags
              thumbnail {
                childImageSharp {
                    fluid(maxWidth: 1500) {
                        src
                    }
                }
              }
              icon {
                childImageSharp {
                    fluid(maxWidth: 50) {
                        src
                    }
                }
              }
            }
          }
        }
      }
    }`
  ).then(result => {
    if (result.errors) {
      return Promise.reject (result.errors);
    }
    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({node}, index ) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          prev: index === 0 ? null : posts[index - 1 ].node,
          next: index === (posts.length - 1) ? null : posts[index + 1].node
        } 
      })
    })

  })
}