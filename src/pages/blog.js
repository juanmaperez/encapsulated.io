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
`

const BlogPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark  
  return (
    <Layout>
      <SEO title="Encapsulated Blog"  />
      <BlogView>
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
    allMarkdownRemark {
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
