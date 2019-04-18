import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'; 
import Image from './image'

const colors = ['var(--bgColor)', 'var(--primaryColor)', 'var(--secondaryColor)', 'var(--tertiaryColor)']

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
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      
      .title-wrapper {
        padding: 0px 50px;
        width: 40%;
        .title {
          font-size: 150px;
          background: ${props => props.index > colors.length -1 ? colors[0] : colors[(props.index + 1)]};
        }
        .discover {
          margin-top: 15px;
          text-align: center;
          font-size: 20px;
          width:150px;
          padding: 15px 10px;
          background: ${props => colors[props.index]};
          border-radius: 20%/50%;
          &:hover {
            background: ${props => props.index > colors.length -1 ? colors[0] : colors[(props.index + 1)]};
            a {
              background: ${props => colors[props.index]};
            }
          }
          a {
            background: ${props => props.index > colors.length -1 ? colors[0] : colors[(props.index + 1)]};
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

`

const WorkListItem = ({height, frontmatter, index}) => (
    <WorkListItemView height={ height } index={index}>
      <div className="work-wrapper">
        <div className="container-fixed">
          <div className="title-wrapper">
            <h1 className="title">{ frontmatter.title }</h1>
            <div className="discover"><Link to={frontmatter.path}>Discover</Link></div>
          </div>
          <div className="image-wrapper">
            <Image title={ frontmatter.title } imageUrl={ frontmatter.thumbnail.childImageSharp.fluid.src } />
          </div>
        </div>
      </div>
    </WorkListItemView>
  )

export default WorkListItem;