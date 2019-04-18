import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby'; 
import Image from './image'

const WorkListItemView = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  .work-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    -webkit-clip-path: inset(0 0 0 0);
    clip-path: inset(0 0 0 0);
    
    .container-fixed {
      position:fixed; //absolute
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
    }
    .container-fixed:before {
      background: var(--bgColor);
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

const WorkListItem = ({height, frontmatter}) => (
    <WorkListItemView height={ height }>
      <div className="work-wrapper">
        <div className="container-fixed">
          <div className="title">
            <h1>asdfsd{ frontmatter.title }</h1>
          </div>
          <div className="image">
            <Image title={ frontmatter.title } imageUrl={ frontmatter.thumbnail.childImageSharp.fluid.src } />
          </div>
        </div>
      </div>
    </WorkListItemView>
  )

export default WorkListItem;