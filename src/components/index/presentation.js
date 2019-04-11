import React, { Component } from 'react';
import { TimelineLite, Power1 } from 'gsap';
import styled from 'styled-components';
import Image from './../image';

import face from './../../images/jp_brush_normal.png'

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
      color: var(--tertiaryColor);
      font-size: 1.5vw;
      display: block;
      font-weight: bolder;
      text-align: center;
      font-style: italic;
      margin-top: 50px;
    }
    .face {
      position: absolute;
      width: 400px;
      height: 400px;
      top: 50%;
      left: 50%;
      margin-top: -200px;
      margin-left: -200px;
      opacity: 0;

      img {
        width: 100%;
      }
    }

    .mouse {
      position: fixed;
      bottom: 20px;
      left: 50%;
      margin-left: -9px;
      display: block;
      width: 18px;
      height: 28px;
      border-radius: 11px 11px 15px 15px;
      border: 1px solid var(--secondaryColor);
  
      span.scroll {
        display: block;
        margin: 6px auto;
        width: 1px;
        height: 3px;
        border-radius: 4px;
        background: var(--secondaryColor);
        border: 1px solid transparent;
        -webkit-animation-duration: 2s;
        animation-duration: 2s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-name: scroll;
        animation-name: scroll;
      }
    }
`

class Presentation extends Component {

  state = { complete: false }

  animationComplete = () => {
    this.setState({
      complete: true
    })
  }

  componentDidMount(){
    const creative = document.querySelector('.creative'),
          developer = document.querySelector('.developer'),
          face = document.querySelector('.face'),
          year = document.querySelector('.year'),
          tl = new TimelineLite();
    
    tl
    .fromTo(face, 3, {opacity: 0}, { opacity: 1, ease: Power1.easeOut})
    .fromTo(face, 1, {opacity: 1}, { opacity: 0, ease: Power1.easeOut}, '+=1')
    .add('name')
    .from(creative, 2, {x: -1500, opacity: 0, ease: Power1.easeOut}, 'name')
    .from(developer, 2, {x: 1500 , opacity: 0, ease: Power1.easeOut}, 'name')
    .from(year, 2, { opacity: 0, delay: 1.5, ease: Power1.easeOut, onComplete: this.animationComplete})

  }
  
  render(){
    const height = window.innerHeight;
    const { complete } = this.state;
    return (
      <PresentationView height={ height } >
        <h1 className="creative">Creative</h1>
        <h2 className="developer">Developer</h2>
        <span className="year">since 1986</span>
        <span className="face">
          <Image imageUrl={face} title="Juanma Pérez" />
        </span>
        { complete && <span className="mouse"><span className="scroll"></span></span> }
      </PresentationView>
    )
  }
}

export default Presentation;