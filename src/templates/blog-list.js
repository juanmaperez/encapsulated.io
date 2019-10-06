import React, { Component } from "react"
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from './../components/post-item'
import Image from './../components/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faGripHorizontal } from '@fortawesome/free-solid-svg-icons'
import juanma from './../images/juanma_perez.jpg'



const BlogView = styled.div`
  margin: 150px auto 80px;
  width: 100%;
  min-height: 10px;
  @media(max-width: 510px){
    margin: 100px auto 80px;
  }
  .list-header {
    margin: 100px auto 0px;
    box-sizing: border-box;
    width: 30%;
    display:flex;
    padding: 20px;
   

    .image-wrapper {
      margin-right: 20px;

      img {
        display:block;
        max-width: 120px;
        max-height: 120px;
        border-radius: 50%;
        width: 100%;
        overflow: hidden;
        box-shadow: 0 0 0 1px rgba(var(--primaryColorRGB), 0.05), 0 2px 4px rgba(var(--primaryColorRGB), 0.08);      
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .list-title {
        text-align: left;
        font-size: 30px;
        margin: 0px 0px 0px;
        color: var(--secondaryColor);
        -webkit-text-stroke: 0.2px var(--secondaryColor);
       
      }
      p {
        font-size: 18px;
        color: var(--secondaryColor);
        opacity: .6;
        font-style: italic;

      }
      @media(max-width: 510px) {
        .list-title {
          font-size: 18px;
          text-align:center;
        }
        p {
          font-size: 16px;
        }
      }
    }
  
    @media(max-width:1590px){ width: 30% }
    @media(max-width:1100px){ width:30% }
    @media(max-width:878px){ width:65% }
    @media(max-width:510px){
      margin: 0px auto 50px;
      width:98%;
      flex-direction: column;
      align-items: center;
      .image-wrapper {
        margin-bottom: 20px;
      }
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

  .pagination {
    display: flex;
    justify-content: space-between;
    width: 40%;
    margin: 10px auto;
    @media(max-width: 480px) {
      width: 95%; 
    }
  }
  @media(min-width: 768px){
    .post-list {
      transition: all 1s linear;
      &.grid {
        margin: 0px auto;
        max-width: 1496px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        flex-direction: row;
      }
    }
  }

  
`

class BlogPage extends Component {
  
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
    const { edges: posts } = this.props.data.allMarkdownRemark;
    const { view } = this.state;
    const { currentPage, numPages } = this.props.pageContext 
    const isFirst = currentPage === 1;
    const isLast = currentPage ===  numPages;
    const prevPage = currentPage -1 === 1 ? '/' : `/page/${(currentPage - 1 ).toString()}`
    const nextPage = `/page/${(currentPage  + 1).toString()}`
    return (
      <Layout>
        <SEO 
          title="Blog" 
          description={'Juanma Perez personal blog about javascript and other technologies related to front end development'} 
          keywords={['javascript', 'development', 'front end', 'react', 'angular', 'gatsbyjs']} 
        />
        <BlogView>
          <div className="list-header">
            <div className="image-wrapper">
              <Image imageUrl={juanma} title="juanma perez" />
            </div>
            <div className="info">
              <h2 className="list-title">Personal blog</h2>
              <p>by Juanma Pérez</p>
            </div>
          </div>
          <div className="buttons">
              <button className={ view === 'list' ? 'active' : ''} onClick={ this.toggleToList }><FontAwesomeIcon icon={faList}/></button>
              <button className={ view === 'grid' ? 'active' : ''}onClick={ this.toggleToGrid }><FontAwesomeIcon icon={faGripHorizontal}/></button>
          </div>
          <div className={`post-list ${view}`}>
            {posts.map(({node: post})=>{
              const { frontmatter } = post;
              return (
                <PostItem listPath={this.props.location.pathname} key={frontmatter.path} frontmatter={frontmatter} view={view}/>
              )
            })}
          </div>
          <div className="pagination">
            <div>
              {!isFirst && (
                <Link to={prevPage} rel="prev">
                  ← Previous Page
                </Link>
              )}
            </div>
            <div>
              {!isLast && (
                <Link to={nextPage} rel="next">
                  Next Page →
                </Link>
              )}
            </div>
          </div>
        </BlogView>
      </Layout>
    )
  }

}

export const query = graphql`
  query BlogQuery ($skip: Int!, $limit: Int!) {
    allMarkdownRemark (
      limit: $limit
      skip: $skip
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {type: {eq: "post"}}}
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
            category
            thumbnail {
              childImageSharp {
                  fluid(maxWidth: 800) {
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

export default BlogPage
