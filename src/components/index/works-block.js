import React from 'react';
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby';
import WorkBlockItem from './work-block-item';

const WorksBlockView = styled.div`
  min-height: ${props => props.height}px;
  padding-bottom: 30px;
  .works-block-list {
    width: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }
  .all {
    box-sizing: border-box;
    padding: 0px 20px;
    display: block;
    font-size: 20px;
    color: var(--primaryColor);
  }
  @media(max-width: 768px){
    padding-top: 30px;
    min-height: ${props => props.height/1.3}px;
  }

  @media(max-width: 510px){
    padding-top: 0px;
    min-height: ${props => props.height/1.2}px;
    .works-block-list {
      margin: 30px 0px 0px;
    }
  }
`

const WorksBlock = ({ height}) => {
  return (
    <WorksBlockView height={height}>
      <div className="works-block-list">
        <StaticQuery query={
          graphql`
            query {
              allMarkdownRemark (
                limit: 3
                sort: { fields: [frontmatter___date], order: DESC }
                filter: { frontmatter: {type: {eq: "project"}}}
              ) {
                totalCount
                edges {
                  node {
                    id
                    frontmatter {
                      path
                      type
                      thumbnail {
                        childImageSharp {
                            fluid(maxWidth: 500) {
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
          const { edges: works } = data.allMarkdownRemark  
          return(
            works.map(({node: work}, index)=>{
              const { frontmatter } = work;
              return (
                <WorkBlockItem key={index} index={index} height={ height } frontmatter={ frontmatter } />
              )
            }))
        }}/>
        { 
        }
      </div>
      <Link className="all" to={`/work`}>View all works</Link>
    </WorksBlockView>
  )
}

export default WorksBlock;