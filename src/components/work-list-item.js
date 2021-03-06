import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'; 
import Image from './image'

const colors = ['var(--bgColor)', 'var(--secondaryColor)', '#a3cccc', 'var(--tertiaryColor)']

const WorkListItemView = styled.div`
  height: ${props => props.height}px;
  position: relative;
  width: 100%;
  overflow: hidden;
  .work-wrapper {
    background: ${props => colors[props.index]};
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    -webkit-clip-path: inset(0 0 0 0);
    clip-path: inset(0 0 0 0);
    
    .container-fixed {
      background: ${props => colors[props.index]};
      position:fixed; //absolute
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-around;
      align-items: center;
      
      .title-wrapper {
        padding: 0px 50px;
        width: 40%;
        .title {
          font-size: 150px;
          color: ${props => props.index >= colors.length -1 ? colors[0] : colors[(props.index + 1)]} !important;
        }
        p {
          padding: 0px 10px;
          font-size: 20px;
          margin: 20px 0px;
          font-weight: bold;
          line-height: 1.6;
          color: ${props => props.index >= colors.length -1 ? colors[0] : colors[(props.index + 1)]} !important;
          opacity: .8;
        }
        .discover {
          margin-top: 15px;
          text-align: center;
          font-size: 20px;
          width:150px;
          padding: 15px 10px;
          background: ${props => colors[props.index]};
          border: 2px solid ${props => props.index >= colors.length -1 ? colors[0] : colors[(props.index + 1)]};
          border-radius: 20%/50%;
          opacity: .8;

          a {
            display: block;
            width:100%:
            height: 100%;
            color: ${props => props.index >= (colors.length - 1) ? colors[0] : colors[(props.index + 1)]} ;
          }
          &:hover {
            background: ${props => props.index >= colors.length -1 ? colors[0] : colors[(props.index + 1)]};
            a {
              color: ${props => colors[props.index]};
            }
          }
        
        }
      }
      .image-wrapper {
        width: 50%;
        padding: 0px 0px;
        img {
          width:100%
        }
      }
    }
    .container-fixed:before {
      display: block;
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  @media(max-width:768px){
    .image-wrapper {
      margin-top: 150px;
    }
  }
  @media(max-width: 480px){
    height: auto;
    .work-wrapper {
      position:relative;
      top: auto;
      left: auto;
      .container-fixed {
        height: 100%;
        position:relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 60px;
        .image-wrapper {
          margin-top: 80px;
          width: 90%;
          margin-bottom: 20px;
        }
        .title-wrapper {
          width: 95%;
          padding: 0px 10px;

          .title {
            padding: 0px 10px;
            font-size: 70px;
            color: ${props => props.index >= colors.length -1 ? colors[0] : colors[(props.index + 1)]} !important;
          }
          p {
            font-size: 20px;
            margin-bottom: 20px;
          }

        }

      }
    }
  }


`

const WorkListItem = ({height, frontmatter, index}) => (
    <WorkListItemView height={ height } index={index}>
      <div className="work-wrapper">
        <div className="container-fixed">
          <div className="image-wrapper">
            <Image title={ frontmatter.title } imageUrl={ frontmatter.thumbnail.childImageSharp.fluid.src } />
          </div>
          <div className="title-wrapper">
            <h1 className="title">{ frontmatter.title }</h1>
            <p>{ frontmatter.excerpt }</p>
            <div className="discover"><Link to={frontmatter.path}>Discover</Link></div>
          </div>
        </div>
      </div>
    </WorkListItemView>
  )

export default WorkListItem;