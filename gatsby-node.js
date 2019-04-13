const path = require ('path');

exports.createPages = ({ boundActionCreators, graphql}) => {
  const { createPage } = boundActionCreators;
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
        component: blogPostTemplate 
      })
    })

  })
}