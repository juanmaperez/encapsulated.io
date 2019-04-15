import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from './../components/post-item'

const CategoryView = styled.div`
  margin: 150px auto 80px;
  width: 100%;
  min-height: 10px;
  .category-header {
    margin: 100px auto;
    box-sizing: border-box;
    width: 35%;
    p {
      text-align: center;
      font-size: 50px;
      color: var(--primaryColor);
      -webkit-text-stroke: 1.5px var(--primaryColor);
    }
    .category-title {
      text-align: center;
      margin-top: -10px;
      font-size: 85px;
      color: transparent;
      -webkit-text-stroke: 0.0002em var(--primaryColor);
    }
    @media(max-width:1590px){ width: 40% }
    @media(max-width:1100px){ width:55% }
    @media(max-width:878px){ width:65% }
    @media(max-width:510px){
      width:95%;
    }
  }
`

const CategoryTemplate = ({ pageContext, data }) => {
  const { category } = pageContext;
  const { edges: posts } = data.allMarkdownRemark

  if(posts) {
    return (
      <Layout>
        <SEO title={`${ category } pills`} description={`Little pills about ${category}`} />
        <CategoryView>
          <div className="category-header">
            <p>Little pills about</p>
            <h2 className="category-title">{category}</h2>
          </div>
          {posts.map(({node: post})=>{
            const { frontmatter } = post;
            return (
              <PostItem key={frontmatter.path} frontmatter={frontmatter}/>
            )
          })}
        </CategoryView>
      </Layout>
    )
  }

}

export const CategoryQuery = graphql`
  query($category: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
            category
            thumbnail {
              childImageSharp {
                  fluid(maxWidth: 500) {
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
  }
`


export default CategoryTemplate
