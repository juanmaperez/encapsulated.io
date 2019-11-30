import React, { Component } from 'react'
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
    height: ${props => props.height}px;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 60px;
    background-position: center center;
    background-attachment: fixed;
    @media(max-width:490px){
      background-attachment: scroll;
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
      padding:25px 10px;
    }
    .step-buttons {
      margin: 20px 0px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      div {
        flex: 1;
        display: flex;
        &:hover { text-decoration: underline}
        &.next { text-align: right;
          div {
            text-align: right;
            display: flex;
            justify-content: flex-end;
          }
        }
        &.prev { text-align: left;}
        svg { margin: 0px 10px; }
      }
    }

    .post-date {
      font-size: 18px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      color: var(--secondaryColor);
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
    .back { 
      opacity: .5;
      box-sizing: border-box;
      cursor: pointer;
      color: var(--primaryColor);
      width: 100%;
      display:block; 
      margin-bottom: 10px;
    }
    .post-title {
      margin: 30px 0px 60px;
      font-size: 54px;
      color: var(--secondaryColor);
      -webkit-text-stroke: 1px var(--secondaryColor);
      @media(max-width:768px){
        font-size: 48px;
        margin: 10px 0px 30px;
      }
      @media(max-width:510px){
        font-size: 42px;
        margin: 0px 0px 30px;
      }
    }

    .post-content {
      margin-top: 10px;
      line-height: 1.5;
      font-size: 19px;
      letter-spacing: 1px;
      pre {
        margin-bottom: 45px;
        max-width: 100%;
        font-size: 16px;
        line-height:1.2;
        display:block;
        padding: 5px;
      }
      p {
        margin-bottom: 30px;      
        color: var(--primaryColor);
      }
      h2 {
        color: var(--secondaryColor);
        margin: 10px 0px 10px;
        font-size: 28px;
      }
      h3 {
        margin: 10px 0px;
        text-decoration:underline;
      }
      a {
        color: var(--tertiaryColor);
        text-decoration: none;
      }
      ul {
        margin: 40px 0px 30px;
        padding-left: 0px;
        li {
          margin-bottom: 10px;
        }
        li:before {
          content: '💊';
          list-style: none;
          padding-right: 15px;
          font-size: 14px;
        }
      }
    }

  }
`

class BlogPostTemplate extends Component {
 
  state = { height: 0, width: 0 }

  resize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.setState({height, width})
  }
  
  componentWillUnmount(){
    window.removeEventListener('resize', this.resize.bind(this))
  }

  componentDidMount(){
    this.resize();
  }
  
  render (){
    const { markdownRemark: post } = this.props.data;
    const { frontmatter, html } = post;
    const { next, prev } = this.props.pageContext;
    const backPath = this.props.location.state ? this.props.location.state.prevPath || '/' : '/';
    const { height } = this.state;

    return(
      <Layout>
        <SEO title={frontmatter.title} description={ frontmatter.excerpt } keywords={ frontmatter.tags } />
        <BlogPostView height={height} image={ frontmatter.thumbnail.childImageSharp.fluid.src } icon={ frontmatter.icon.childImageSharp.fluid.src }>
          <div className="post-header">
          </div>
          
          <div className="post-container">
            <Link className="back" to={ backPath }>
                Back to the list
            </Link>
            <h2 className="post-title">
             {frontmatter.title}
            </h2>
            <div className="post-date">
              <span className="post-icon"></span>{frontmatter.date}
            </div>
  
            <div className="post-content" dangerouslySetInnerHTML={{__html: html}} />

            <div className="step-buttons">
              <div className="prev">
                { prev && <div>
                  <FontAwesomeIcon icon={ faArrowLeft }/>
                  <Link to={prev.frontmatter.path}>
                    {prev.frontmatter.title}
                  </Link></div> }
              </div>
              
              <div className="next">
                { next && <div>
                  <Link to={next.frontmatter.path}>
                    {next.frontmatter.title}
                  </Link>
                  <FontAwesomeIcon icon={ faArrowRight }/>
                </div> }
              </div>
            </div>
          </div>
  
        </BlogPostView>
      </Layout>
    )

  }

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
              fluid(maxWidth: 2000) {
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