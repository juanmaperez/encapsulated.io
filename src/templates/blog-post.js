import React from 'react'
import styled from 'styled-components'
import SEO from './../components/seo';
import Layout from './../components/layout'
import { graphql, Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'


const BlogPostView = styled.div`
  padding-bottom: 50px;
  position: relative;
  overflow: hidden;

  .post-header {
    width: 100%;
    background: url(${props => props.image });
    height: 900px;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 60px;
  }

  .prev {
    box-sizing:border-box;
    position: fixed;
    left: 0px;
    top: 50%;
    width: 200px;
    transform: translateX(-200px);
    transition: transform 300ms linear;
    min-height: 25px;
    padding: 10px 5px;
    a { 
      color:var(--secondaryColor);
      margin-top: 5px;
      display: block;
    }
    &:hover {
      transform: translateX(0px);
    }
    svg {
      border-radius: 50%;
      padding: 4px;
      border: 1px solid var(--secondaryColor);
      position: absolute;
      right: -25px;
      color:var(--secondaryColor);
    }
  }
  .next {
    padding: 10px 5px;
    box-sizing:border-box;
    position: fixed;
    right: 0px;
    top: 50%;
    width: 200px;
    transform: translateX(200px);
    transition: transform 300ms linear;
    min-height: 25px;
    a { 
      color:var(--secondaryColor);
      margin-top: 5px;
      display: block;
    }
    &:hover {
      transform: translateX(0px);
    }
    svg {
      border-radius: 50%;
      padding: 4px;
      border: 1px solid var(--secondaryColor);
      position: absolute;
      left: -25px;
      color:var(--secondaryColor);
    }
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
        margin-bottom: 45px;
      }
      h2 {
        color: var(--secondaryColor);
        margin: 10px 0px 5px;
        font-size: 28px;
      }
      a {
        color: var(--tertiaryColor);
        text-decoration: none;
      }
      ul {
        margin: 40px 0px 60px;
      }
    }
  }
`

const BlogPostTemplate = ({data, location, pageContext }) => {
  const { markdownRemark: post } = data;
  const { frontmatter, html } = post;
  const { next, prev } = pageContext;

  return(
    <Layout>
      <SEO title={frontmatter.title} description={ frontmatter.excerpt } />
      <BlogPostView image={ frontmatter.thumbnail.childImageSharp.fluid.src } icon={ frontmatter.icon.childImageSharp.fluid.src }>
        <div className="post-header">
        </div>
        
        { prev && <div className="prev">
            <FontAwesomeIcon icon={ faArrowLeft }/>
            <Link to={prev.frontmatter.path}>
              {prev.frontmatter.title}
            </Link>
          </div>
        }
        { next && <div className="next">
            <FontAwesomeIcon icon={ faArrowRight }/>
            <Link to={next.frontmatter.path}>
              {next.frontmatter.title}
            </Link>
          </div>
        }
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