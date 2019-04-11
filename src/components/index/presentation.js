import React, { Component } from 'react';
import { TweenLite, Power1 } from 'gsap';
import styled from 'styled-components';


const PresentationView = styled.div`
    height: ${ props => props.height}px;
    width: 100%;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .creative {
      color: var(--primaryColor);
      display: block;
      font-size: 22vw;
      text-align: center;
      -webkit-text-stroke: 5px var(--primaryColor);
    }
    .developer {
      color: var(--primaryColor);
      font-size: 20vw;
      display: block;
      font-weight: bolder;
      text-align: center;
      -webkit-text-stroke: 5px var(--primaryColor);
    }
    .year {
      color: var(--primaryColor);
      font-size: 1.5vw;
      display: block;
      font-weight: bolder;
      text-align: center;
      font-style: italic;
      margin-top: 50px;
    }
`

class Presentation extends Component {

  componentDidMount(){
    const creative = document.querySelector('.creative'),
          developer = document.querySelector('.developer'),
          year = document.querySelector('.year');
    
    TweenLite
    .fromTo(creative, 1.5, {x: -1500, opacity: 0}, { x: 0, opacity: 1, ease: Power1.easeOut})
    TweenLite
    .fromTo(developer, 1.5, {x: 1500 , opacity: 0}, { x: 0, opacity: 1, ease: Power1.easeOut})
    TweenLite
    .fromTo(year, 5, { opacity: 0}, { opacity: 1, ease: Power1.easeOut})

  }
  
  render(){
    const height = window.innerHeight;
    return (
      <PresentationView height={ height } >
        <h1 className="creative">Creative</h1>
        <h2 className="developer">Developer</h2>
        <span className="year">since 1986</span>
      </PresentationView>
    )
  }
}

export default Presentation;