import React from 'react';
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby';
import Image from './../image';

const PostsBlockView = styled.div`
  min-height: ${props => props.height}px;
  margin: 250px 20px 50px;
  padding: 0px 0px;
  box-sizing: border-box;
  .posts-block-list {
    width: 70%;
    margin: 20px auto 60px;
    overflow: hidden;

    @media(max-width: 510px){
      margin: 30px 0px 0px;
    }
    .post-item {
      width: 100%;
      margin-bottom: 30px;
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
        font-size: 65px;
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