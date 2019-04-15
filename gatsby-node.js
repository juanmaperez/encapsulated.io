const path = require ('path');

// exports.createCategoryPages = (createPage, posts) => {
//   const CategoryTemplate = path.resolve (`src/templates/category.js`);
  
//   const postsByCategory = {};

//   posts.forEach(({node}) => {
//     if(node.frontmatter.category){
//       if (!postsByCategory[node.frontmatter.category]) {
//         postsByCategory[node.frontmatter.category] = [];
//       }
//       postsByTags[tag].push(node);
//     }
//   })

//   const categories = Object.keys (postsByCategory);
//   categories.forEach (category => {
//     const posts = postsByCategies[category];
//     createPage ({
//       path: `/category/${category}`,
//       component: CategoryTemplate,
//       context: {
//         posts,
//         category,
//       },
//     });
//   });
// }

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

    const categories = [];
    const categoryTemplate = path.resolve('src/templates/category.js');

    posts.forEach(({node}, index) => {
      if( !categories.includes(node.frontmatter.category)){
        categories.push(node.frontmatter.category);
      }
    })

    categories.forEach(category => {
      createPage({
        path: `/blog/category/${category}`,
        component: categoryTemplate,
        context: {
          category,
        },
      })
    })

  })
}