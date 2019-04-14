import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Presentation from './../components/index/presentation';
import Intro from './../components/index/intro';

class IndexPage extends Component {

  state = { completed: false }

  animationCompleted = () => {
    this.setState({ completed : true })
  }

  render = () => {
    const { completed } = this.state;
    return(
      <Layout>
        <SEO title="Encapsulated" 
            description="Personal Website by Juanma Perez, Front End developer at Colossus Bets, London" 
            keywords={[`Juanma Perez`, `javascript`, `developer`]} 
        />
        <Presentation markAsCompleted={ this.animationCompleted.bind(this) }/>
        { completed && <Intro/> }
      </Layout>
    )}
}  



export default IndexPage
