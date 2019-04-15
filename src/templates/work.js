import React from 'react'
import styled from 'styled-components'
import SEO from './../components/seo';
import Layout from './../components/layout'
import { graphql, Link } from 'gatsby'



const WorkTemplate = ({data, location, pageContext }) => {
  const { markdownRemark: work } = data;
  const { frontmatter, html } = work;
  const { next, prev } = pageContext;

  return (
    <Layout>
      {frontmatter.title}
    </Layout>
  )
}


export const WorkQuery = graphql`
  query WorkByPath($path: String!) {
    markdownRemark (frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM, DD, YYYY")
        path
        tags
        excerpt
        thumbnail {
          childImageSharp {
              fluid(maxWidth: 1500) {
                  src
              }
          }
        }
      }
    }
  }
`

export default WorkTemplate