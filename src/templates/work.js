import React from 'react'
import styled from 'styled-components'
import SEO from './../components/seo';
import Layout from './../components/layout'
import { graphql } from 'gatsby'
import Image from './../components/image';

const WorkView = styled.div`
  margin: 180px auto 100px;
  box-sizing: border-box;
  width: 40%;
  @media(max-width:1590px){ width: 40% }
  @media(max-width:1100px){ width:55% }
  @media(max-width:878px){ width:75% }
  @media(max-width:510px){
    width:95%;
    padding:25px 0px;
  }

  .title-wrapper {
    margin-bottom: 50px;
    h1 {
      text-align: center;
      font-size: 160px;
      color: transparent;
      -webkit-text-stroke: 3px var(--primaryColor);
      margin-bottom: 0px;
      font-weight: normal;
    }
    .tags {
      width: 100%;
      text-align: center;
      span { 
        margin: -50px 5px 0;
      }
    }
  }

  .thumbnail-wrapper {
    text-align: center;
    img {
      max-width: 600px;
      width: 100%;
    }
  }

  .work-content {
    margin-top: 150px;
    line-height: 1.6;
    font-size: 22px;
    letter-spacing: 1px;
    color: var(--primaryColor);
    h2 {
      color: var(--secondaryColor);
      margin: 10px 0px 5px;
      font-size: 28px;
    }
    p {
      margin-bottom: 45px;
    }

    a {
      color: var(--tertiaryColor);
      text-decoration: none;
    }
    ul {
      margin: 40px 0px 60px;
    }
  }

`

const WorkTemplate = ({data, location, pageContext }) => {
  const { markdownRemark: work } = data;
  const { frontmatter, html } = work;
  // const { next, prev } = pageContext;
  return (
    <Layout>
      <SEO title={ frontmatter.title } description={frontmatter.excerpt} keywords={frontmatter.tags}/>
      <WorkView>
        <div className="title-wrapper">
          <h1> { frontmatter.title } </h1>
          <div className="tags">
            {frontmatter.tags.map((tag, index)=> (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="thumbnail-wrapper">
          <Image title={ frontmatter.title } imageUrl={ frontmatter.thumbnail.childImageSharp.fluid.src } />
        </div>
        
        <div className="work-content" dangerouslySetInnerHTML={{__html: html}}>
        </div>
      
      </WorkView>
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