import React, { Component } from "react"
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from './../components/post-item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faGripHorizontal } from '@fortawesome/free-solid-svg-icons'

const CategoryView = styled.div`
  margin: 150px auto 80px;
  width: 100%;
  min-height: 10px;
  .category-header {
    margin: 100px auto;
    box-sizing: border-box;
    width: 35%;
    p {
      text-align: center;
      font-size: 50px;
      color: var(--primaryColor);
      -webkit-text-stroke: 1.5px var(--primaryColor);
    }
    .category-title {
      text-align: center;
      margin-top: -10px;
      font-size: 85px;
      color: transparent;
      -webkit-text-stroke: 0.0002em var(--primaryColor);
    }
    @media(max-width:1590px){ width: 40% }
    @media(max-width:1100px){ width:55% }
    @media(max-width:878px){ width:65% }
    @media(max-width:510px){
      width:95%;
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    padding: 0px;
    margin: 0px auto 40px !important;
    button {
      color: var(--primaryColor);
      display:block;
      border: 0px;
      -webkit-appearance: none !important;
      background:var(--bgColor); 
      color:var(--primaryColor); 
      margin: 5px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      outline: none;
      box-shadow: 0 0 0 1px rgba(var(--primaryColorRGB), 0.05), 0 2px 4px rgba(var(--primaryColorRGB), 0.08);      
      &.active {
        background: #a3cccc;
      }
    }
    @media(max-width:510px){
      display:none;
    }
  }

  .post-list {
    display: block;

    &.grid {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      flex-direction: row;
    }
  }
  @media(min-width: 768px){
    .post-list {
      transition: all 1s linear;
      &.grid {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        flex-direction: row;
      }
    }
  }

`
class CategoryTemplate extends Component {

  state = {
    view: 'list'
  }

  constructor(props){
    super(props)
    this.store = typeof localStorage === 'undefined' ? null : localStorage;  
  }

  componentDidMount(){
    if (this.store) {
      const view = this.store.getItem('view') || 'list'
      this.setState({ view });
    }
  }

  setView = (view) => {
    this.setState({ view })
    this.storeView(view)
  }

  toggleToGrid = () => {    
    this.setView('grid')
  }

  toggleToList = () => {    
    this.setView('list')
  }

  storeView = (view) => {
    if (this.store) {
      this.store.setItem('view', view);
    }
  }

  render() {
    const { pageContext, data } = this.props;
    const { category } = pageContext;
    const { edges: posts } = data.allMarkdownRemark;
    const { view } = this.state;

    return (
      <Layout>
        <SEO title={`${ category } pills`} description={`Little pills about ${category}`} />
        <CategoryView>
          <div className="category-header">
            <p>Little pills about</p>
            <h2 className="category-title">{category}</h2>
          </div>
          <div className="buttons">
              <button className={ view === 'list' ? 'active' : ''} onClick={ this.toggleToList }><FontAwesomeIcon icon={faList}/></button>
              <button className={ view === 'grid' ? 'active' : ''}onClick={ this.toggleToGrid }><FontAwesomeIcon icon={faGripHorizontal}/></button>
          </div>
          <div className={`post-list ${view}`}>
            {posts.map(({node: post})=>{
              const { frontmatter } = post;
              return (
                <PostItem listPath={ this.props.location.pathname } key={frontmatter.path} frontmatter={frontmatter} view={view}/>
              )
            })}
          </div>
        </CategoryView>
      </Layout>
    )
  }
}
export const CategoryQuery = graphql`
  query($category: String!) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
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
            excerpt
            category
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


export default CategoryTemplate
