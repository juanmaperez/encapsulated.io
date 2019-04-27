import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PresentationBlock from './../components/index/presentation-block';
import IntroBlock from './../components/index/intro-block';
import WorksBlock from './../components/index/works-block';
import PostsBlock from './../components/index/posts-block';

class IndexPage extends Component {

  state = { completed: false, height: 0, width: 0 };

  componentDidMount(){
    this.resize();
    window.addEventListener('resize', this.resize.bind(this))
  }

  resize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.setState({height, width})
  }
  
  componentWillUnmount(){
    window.removeEventListener('resize', this.resize.bind(this))
  }

  animationCompleted = () => {
    this.setState({ completed : true })
  }

  render = () => {
    const { completed, height } = this.state;
    return(
      <Layout>
        <SEO title="Encapsulated" 
            description="Personal Website by Juanma Perez, Front End developer at Colossus Bets, London" 
            keywords={[`Juanma Perez`, `javascript`, `developer`]} 
        />
        { height > 0 && <PresentationBlock height={height} markAsCompleted={ this.animationCompleted.bind(this) }/> }
        { completed && <IntroBlock/> }
        { completed && <WorksBlock height={height} /> }
        { completed && <PostsBlock height={height} /> }
      </Layout>
    )}
}  

export default IndexPage
