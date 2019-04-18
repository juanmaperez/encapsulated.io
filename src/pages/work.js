import React, {Component} from 'react';
import styled from 'styled-components';
import SEO from './../components/seo';
import Layout from './../components/layout';
import { graphql } from 'gatsby';
import WorkListItem from './../components/work-list-item'

const WorkView = styled.div`
  height: ${props => props.height}px;
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
`

class WorkPage extends Component {
  
  state = { 
    height: 0,
    width: 0
  }

  constructor(props){
    super(props);
  }

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

  render(){
    const { edges: works } = this.props.data.allMarkdownRemark  
    const { height, width } = this.state
    return(
      <Layout>
        <SEO title="Works" description="Web development by Juanma Perez for different clients. Portfolio" keywords={[`development`, `web design`, `websites`]}/>
          <WorkView height={height} > 
          {works.map(({node: work}, index)=>{
            const { frontmatter } = work;
            return (
              <WorkListItem key={frontmatter.title} index={index} height={ height } frontmatter={ frontmatter } />
            )
          })}
          </WorkView>
      </Layout>
    )
  }
}

export const query = graphql`
  query WorksQuery {
    allMarkdownRemark (
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: {type: {eq: "project"}}}
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            type
            excerpt
            thumbnail {
              childImageSharp {
                  fluid(maxWidth: 500) {
                      src
                  }
              }
            }
            icon {
              childImageSharp {
                  fluid(maxWidth: 50) {
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


export default WorkPage;