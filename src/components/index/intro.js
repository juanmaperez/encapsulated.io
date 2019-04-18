import React from 'react'
import styled from 'styled-components'

const london ="https://www.google.com/maps/place/London/@51.5287718,-0.2416815,11z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5073509!4d-0.1277583"


const IntroView = styled.div`
  padding-top:200px;
  min-height: 600px;
  background: var(--bgColor);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .intro-text {
    width: 100%;
    font-size: 8vw;
    color: var(--primaryColor);
    line-height: 1.2;
    padding: 20px 80px;
    box-sizing: border-box;
    font-weight: bolder;
    -webkit-text-stroke: 1px var(--primaryColor);
    p {
      margin-bottom: 100px;
 
      strong, a {
        color: var(--tertiaryColor);
        -webkit-text-stroke: 0.0002em var(--tertiaryColor);
        &:hover {text-decoration: underline}
      }
    }
  }
  @media(max-width: 1080px) {
    padding-top:200px;
    min-height: 400px;
    .intro-text {
      padding: 20px;
      font-size: 9vw;
      p {
        margin-bottom: 80px;
      }
    }
  }
  @media(max-width: 768px) {
    padding-top:200px;
    min-height: 400px;
    .intro-text {
      font-size: 9vw;
      p {
        margin-bottom: 50px;
      }
    }
  }
  @media(max-width: 480px) {
    padding-top:120px;
    min-height: 400px;
    .intro-text {
      padding:10px;
      -webkit-text-stroke: 0px var(--primaryColor);
      font-size: 9vw;
      p {
        margin-bottom: 20px;
        strong {
          color: var(--secondaryColor);
          -webkit-text-stroke: 0px var(--secondaryColor);
        }
      }
  }
`

const Intro = () => (
  <IntroView>
    <div className="intro-text">
      <p>I'm <span>Juanma Pérez </span>, a javascript <a target="_blank" href="https://www.linkedin.com/in/juanmaperezvargas/">Front End Developer</a> from Seville.</p> 
      <p>I grew up professionally in Barcelona until I moved to <a target="_blank" href={london}>London</a> in 2018.</p>
      <p>Nowadays, I work at <a target="_blank" href="https://colossusbets.com/">ColossusBets</a>.</p> 
      <p>I also love music, books, films sports and <a target="_blank" href="https://www.instagram.com/worldoftypographies/">typography</a>.</p>
    </div>
  </IntroView>
)

export default Intro;