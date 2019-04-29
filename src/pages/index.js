import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PresentationBlock from './../components/index/presentation-block';
import IntroBlock from './../components/index/intro-block';
import WorksBlock from './../components/index/works-block';
import PostsBlock from './../components/index/posts-block';
import ContactBlock from './../components/index/contact-block';

class IndexPage extends Component {

  state = { completed: false, height: 0, width: 0 };

  componentDidMount(){
    this.resize();
    window.addEventListener('resize', this.resize.bind(this))
  }

  resize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight; 
    const completed = (!! this.checkCookies())
    this.setState({height, width, completed})
  }
  
  componentWillUnmount(){
    window.removeEventListener('resize', this.resize.bind(this))
  }

  animationCompleted = () => {
    this.setState({ completed : true })
    this.setCookie();
  }

  checkCookies = () => {
    const cookie = document.cookie;
    const allCookies = {}
    cookie.split(';').forEach((cookie) => {
      let el = cookie.split('=');
      allCookies[el[0].trim().toString()] = el[1];
    })
    return (allCookies['animationCompleted']);
  }

  setCookie = () => {
    const date = new Date();
    const daysToExpire = 1;
    const cookieName = 'animationCompleted';
    const cookieValue = true;
    date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
    document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
  }

  render = () => {
    const { completed, height } = this.state;
    return(
      <Layout>
        <SEO title="Encapsulated" 
            description="Personal Website by Juanma Perez, Front End developer at Colossus Bets, London" 
            keywords={[`Juanma Perez`, `javascript`, `developer`]} 
        />
        { height > 0 && <PresentationBlock height={height} completed={completed} markAsCompleted={ this.animationCompleted.bind(this) }/> }
        { completed && <IntroBlock height={height}/> }
        { completed && <WorksBlock height={height} /> }
        { completed && <PostsBlock height={height} /> }
        { completed && <ContactBlock height={height} /> }
      </Layout>
    )}
}  

export default IndexPage
