import React from 'react';
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby';
import Image from './../image';

const PostsBlockView = styled.div`
  min-height: ${props => props.height}px;
  padding: 100px 20px;
  box-sizing: border-box;
  .posts-block-list {
    width: 70%;
    margin: 20px auto 60px;
    overflow: hidden;

  
    .post-item {
      width: 100%;
      margin-bottom: 70px;
      display:flex;
      flex-direction: row;
      justify-content:flex-start;
      align-items: center;
      img {
        width: 25px;
        height: auto;
        margin-right: 20px;
      }
      span {
        font-size: 80px;
        font-weight: bolder;
        letter-spacing: 1px;
        color: var(--primaryColor);
      }
      &:hover {
        span {
          text-decoration: underline;
        }
      }
    }


  }
  .all {
    box-sizing: border-box;
    padding: 0px 20px;
    display: block;
    font-size: 20px;
    color: var(--primaryColor);
  }

  @media(max-width: 510px){
    min-height: ${props => props.height/1.2}px;
    padding: 50px 20px;
    .posts-block-list {
      margin: 30px 0px 0px;
      width: 100%;
      .post-item {
        padding: 20px;
        margin-bottom: 10px;
        box-sizing: border-box;
        img {
          width: 25px;
          margin-right: 10px;
        }
        span {
          font-size: 30px;
        }
      }
    }
  }
`

const PostsBlock = ({height}) => {

  return (
    <PostsBlockView height={height}>
      <StaticQuery query={
        graphql`
          query {
            allMarkdownRemark (
              limit: 3
              sort: { fields: [frontmatter___date], order: DESC }
              filter: { frontmatter: {type: {eq: "post"}}}
            ) {
              totalCount
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    category
                    icon {
                      childImageSharp {
                          fluid(maxWidth: 200) {
                              src
                          }
                      }
                    }
                  }
                }
              }
            }
          }`
      } 
      render={ data => {
        const { edges: posts } = data.allMarkdownRemark  
        return(
          <>
          <div className="posts-block-list">
            { posts.map(({node: post}, index)=>{
                const { frontmatter } = post;
                return (
                  <div className="post-item" key={index} index={index} height={ height } frontmatter={ frontmatter }>
                    <Link to={`${frontmatter.path}`}>
                      <Image imageUrl={frontmatter.icon.childImageSharp.fluid.src} title={frontmatter.category}/>
                      <span>{frontmatter.title}</span>
                    </Link>
                  </div>
                )
              })
            }   
          </div>
          <Link className="all" to={`/blog`}>View all posts</Link>
          </>
        )
      }} />
    </PostsBlockView>
  )
}


export default PostsBlock;