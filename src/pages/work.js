import React from 'react';
import styled from 'styled-components';
import SEO from './../components/seo';
import Layout from './../components/layout';
import { graphql } from 'gatsby';

const WorkView = styled.div``

const WorkPage = ({data}) => {
  const { edges: works } = data.allMarkdownRemark  

  return(
    <Layout>
      <SEO title="Works" description="Web development by Juanma Perez for different clients. Portfolio" keywords={[`development`, `web design`, `websites`]}/>
        <WorkView> 
        {works.map(({node: work})=>{
          const { frontmatter } = work;
          return (
           <h1>{frontmatter.title}</h1>
          )
        })}
        </WorkView>
    </Layout>
  )
}

export const query = graphql`
  query WorksQuery {
    allMarkdownRemark (
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: {type: {eq: "project"}}}
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


export default WorkPage;