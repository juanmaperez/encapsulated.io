import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from './../components/post-item'

const BlogView = styled.div`
  margin: 150px auto 80px;
  width: 100%;
  min-height: 10px;
  .list-header {
    margin: 100px auto;
    box-sizing: border-box;
    width: 35%;

    .list-title {
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

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark  
  return (
    <Layout>
      <SEO title="Encapsulated Blog"  />
      <BlogView>
        <div className="list-header">
          <h2 className="list-title">Little pills of code</h2>
        </div>
        {posts.map(({node: post})=>{
          const { frontmatter } = post;
          return (
            <PostItem key={frontmatter.path} frontmatter={frontmatter}/>
          )
        })}
      </BlogView>
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark (
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {type: {eq: "post"}}}
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
            type
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

export default BlogPage
