import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

import Presentation from './../components/index/presentation';
import Intro from './../components/index/intro';
import WorksBlock from './../components/index/works';


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
    console.log('asdf', height)
    const { data } = this.props;
    return(
      <Layout>
        <SEO title="Encapsulated" 
            description="Personal Website by Juanma Perez, Front End developer at Colossus Bets, London" 
            keywords={[`Juanma Perez`, `javascript`, `developer`]} 
        />
        { height > 0 && <Presentation height={height} markAsCompleted={ this.animationCompleted.bind(this) }/> }
        { completed && <Intro/> }
        { completed && <WorksBlock height={height} data={data} /> }

      </Layout>
    )}
}  


export const query = graphql`
  query WorksIntroQuery {
    allMarkdownRemark (
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: {type: {eq: "project"}}}
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            type
            thumbnail {
              childImageSharp {
                  fluid(maxWidth: 500) {
                      src
                  }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
