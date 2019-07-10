import React from 'react';
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby';
import Image from './../image';
import { Controller, Scene } from 'react-scrollmagic';


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
      opacity: 0;
      transition: opacity 600ms linear;
      &.fade-in { opacity: 1}
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

  @media(max-width: 768px){
    padding: 100px 20px 0px;
    min-height: ${props => props.height/1.3}px;
    .posts-block-list {
      width: 85%;
      margin: 100px auto 0px;

      .post-item {
        img {
          width: 20px;
         }
        span {
          font-size: 40px;
        }
      }
    }
  }

  @media(max-width: 510px){
    min-height: ${props => props.height/2}px;
    padding: 50px 20px;
    .posts-block-list {
      margin: 30px 0px 0px;
      width: 100%;
      .post-item {
        padding: 0px;
        margin-bottom: 30px;
        box-sizing: border-box;
        img {
          transform: translateY(5px);
          width: 20px;
          margin-right: 10px;
        }
        span {
          font-size: 26px;
          font-weight: normal;
        }
      }
    }
    .all {
      padding: 0px;
      margin-top: 30px;
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
                  <Controller key={index}>
                    <Scene classToggle={'fade-in'} triggerHook={0.85}>
                      <div className="post-item" key={index} index={index} height={ height } frontmatter={ frontmatter }>
                        <Link to={`${frontmatter.path}`}>
                          <Image imageUrl={frontmatter.icon.childImageSharp.fluid.src} title={frontmatter.category}/>
                          <span>{frontmatter.title}</span>
                        </Link>
                      </div>
                    </Scene>
                  </Controller>
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