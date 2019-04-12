import React from "react"
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogView = styled.div`
  margin: 80px auto;
  border: 1px solid red;
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
          const {frontmatter} = post;
          return (
            <div>
              <h2>
                <Link to={frontmatter.path}>
                  {frontmatter.title}
                </Link>
              </h2>

              <span>{frontmatter.date}</span>
              <p>{ frontmatter.excerpt }</p>
            </div>
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
          }
        }
      }
    }
  }
`

export default BlogPage
