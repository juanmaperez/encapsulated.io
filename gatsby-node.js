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
  const BlogPostTemplate = path.resolve('src/templates/blog-post.js');
  const WorkTemplate = path.resolve('src/templates/work.js');

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
    let posts = [];
    let works = [];

    edges.forEach(edge => {
      if(edge.node.frontmatter.type === 'project'){
        works.push(edge)
      } else {
        posts.push(edge)
      }
    })

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
