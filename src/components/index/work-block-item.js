import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Image from './../image';

const colors = ['var(--secondaryColor)', '#a3cccc', 'var(--tertiaryColor)']


const WorkBlockItemView = styled.div`
  width: 33%;
  padding: 150px 20px 30px;
  background: var(--bgColor);
  box-sizing: border-box;
  min-height: ${props => props.height}px;
  @media(max-width: 768px){
    width: 100%;
    display: ${props => props.index > 1 ? 'none' : 'block'};
    padding: 40px 10px;
    min-height: ${props => props.height/1.3}px;
  }
  @media(max-width: 510px){
    width: 100%;
    display: ${props => props.index > 0 ? 'none' : 'block'};
    padding: 40px 10px;
    min-height: ${props => props.height/1.3}px;
  }

  a {
    background: ${props => colors[props.index]};
    padding: 0px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
`

const WorkBlockItem = ({height, frontmatter, index}) => (
  
  <WorkBlockItemView index={index} height={ height} >
    <Link to={frontmatter.path}>
      <Image imageUrl={ frontmatter.thumbnail.childImageSharp.fluid.src }  title={frontmatter.title}/>
    </Link>
  </WorkBlockItemView>
);

export default WorkBlockItem;