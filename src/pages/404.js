import React, { Component } from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from './../components/image'
import Logo from './../images/logo_pill.png'

const NotFoundView = styled.div`
  height: ${props => props.height}px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    display: inline;
    font-size: 250px;
    font-family: 'Questrial', Helvetica;
    img {
      width: 300px;
      transform: translateY(20px);
    }
  }
  p {
    text-align:center;
    margin: 30px 0px;
    font-size: 36px;
  }
  @media(max-width:510px){
    h1 {
      font-size: 110px;
      img {
        width: 130px;
        transform: translateY(10px);
      }
    }
    p {
      text-align:center;
      margin: 10px 0px;
      font-size: 26px;
    }
    
  }
`

class NotFoundPage extends Component {

  state = { 
    height: 0,
    width: 0
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
    const { height } = this.state
    return (
      <Layout>
        <SEO title="404: Not found" />
          <NotFoundView height={height}>
            <p>Not Found</p>
            <h1 className="notfound">4<Image imageUrl={ Logo } title={ `logo` } />4</h1>
            <p>Get back to the <Link to={`/`}>home</Link></p>
          </NotFoundView>
      </Layout>
    )
  }
}

export default NotFoundPage
