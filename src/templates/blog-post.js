import React from 'react'
import styled from 'styled-components'
import SEO from './../components/seo';
import Layout from './../components/layout'
import { graphql } from 'gatsby'


const BlogPostView = styled.div`
  padding-bottom: 50px;
  .post-header {
    width: 100%;
    background: url(${props => props.image });
    height: 900px;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 60px;
  }
  .post-container {
    box-sizing: border-box;
    width: 40%;
    margin: 0px auto;
    @media(max-width:1590px){ width: 40% }
    @media(max-width:1100px){ width:55% }
    @media(max-width:878px){ width:75% }
    @media(max-width:510px){
      width:95%;
      padding:25px 0px;
    }
    .post-date {
      font-size: 18px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      color: var(--tertiaryColor);
      .post-icon {
        position: relative;
        top: -3px;
        margin-right: 10px;
        display: inline-block;
        width: 10px;
        height: 20px;
        background: url(${props=> props.icon});
        border-radius: 50%/25%;
        background-size: 130%;
        background-position:center 1px;
        background-repeat: no-repeat;
        box-shadow: 0px 1px 1px 1px rgba(var(--primaryColorRGB),0.2), 0 2px 4px rgba(var(--primaryColorRGB),0.08); 
        overflow: hidden;    
        background-color: transparent; 
      }
    }
    .post-title {
      margin: 20px 0px 60px;
      font-size: 62px;
      color: var(--secondaryColor);
      -webkit-text-stroke: 1px var(--secondaryColor);
    }

    .post-content {
      margin-top: 10px;
      line-height: 1.6;
      font-size: 22px;
      letter-spacing: 1px;
      color: var(--primaryColor);
      p {
        margin-bottom: 30px;
      }
    }
  }
`

const BlogPostTemplate = ({data, location }) => {
  const { markdownRemark: post } = data;
  const { frontmatter, html } = post;

  return(
    <Layout>
      <SEO title={frontmatter.title} description={ frontmatter.description } />
      <BlogPostView image={ frontmatter.thumbnail.childImageSharp.fluid.src } icon={ frontmatter.icon.childImageSharp.fluid.src }>
        <div className="post-header">
        </div>
        <div className="post-container">
          <h2 className="post-title">
           {frontmatter.title}
          </h2>
          <div className="post-date">
            <span className="post-icon"></span>{frontmatter.date}
          </div>

          <div className="post-content" dangerouslySetInnerHTML={{__html: html}} />

        </div>
      </BlogPostView>
    </Layout>
  )
}

export const PostQuery = graphql`
  query PostByPath($path: String!) {
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
`

export default BlogPostTemplate;