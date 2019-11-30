const path = require ('path');

exports.createPages = ({ actions, graphql}) => {
  const { createPage } = actions;
  const BlogPostTemplate = path.resolve('src/templates/blog-post.js');
  const WorkTemplate = path.resolve('src/templates/work.js');

  return graphql(
    `{
      allMarkdownRemark (sort: { order: DESC, fields: [frontmatter___date]}) {
        edges {
          node {
            html
            id
            frontmatter {
              date(formatString: "DD MMMM, YYYY")
              path
              title
              excerpt
              tags
              type
              category
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

    const edges = result.data.allMarkdownRemark.edges;

    const works = edges.filter(({node}) => node.frontmatter.type === 'project')
    const posts = edges.filter(({node}) => node.frontmatter.type === 'post')

    // post list page

    const postsPerPage = 12;
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/` : `page/${ i + 1}`,
        component: path.resolve('./src/templates/blog-list.js'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        }
      })
    })
    
    // post pages
    posts.forEach(({node})=> console.log(node.frontmatter.title))

    posts.forEach(({node}, index ) => {
      createPage({
        path: node.frontmatter.path,
        component: BlogPostTemplate,
        context: {
          prev: index === 0 ? null : posts[index - 1 ].node,
          next: index === (posts.length - 1) ? null : posts[index + 1].node
        } 
      })
    })

    // work Pages

    works.forEach(({node}, index)=> {
      createPage({
        path: node.frontmatter.path,
        component: WorkTemplate,
        context: {
          prev: index === 0 ? null : works[index - 1 ].node,
          next: index === (works.length - 1) ? null : works[index + 1].node
        } 
      })
    })

    // categories pages

    const categories = [];
    const categoryTemplate = path.resolve('src/templates/category.js');

    posts.forEach(({node}, index) => {
      if( !categories.includes(node.frontmatter.category)){
        categories.push(node.frontmatter.category);
      }
    })

    categories.forEach(category => {
      createPage({
        path: `/category/${category}`,
        component: categoryTemplate,
        context: {
          category,
        },
      })
    })

  })
}
