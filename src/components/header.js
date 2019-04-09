import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

import Image from './image';
import Menu from './menu';

import "./../styles/global.css"

import logo from './../images/logo_pill.png';

console.log(logo)

const HeaderView = styled.header`
  padding: 0px;
  color: #000;
  max-width: 100%;
  
  .header-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 20px;
    box-sizing: border-box;
    max-width: 100%;
    
    div {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      .logo {
        margin-top: 3px;
        width: 35px;
        height: 24px;
  
        img {
          max-width: 100%;
        }
      }
      
      .title {
        margin-left: 5px;
        font-size: 26px;
        line-height: 1.1;
        font-weight: 800;
        color: #0e3746;
        display: inline-block;
        font-family: 'Questrial', sans-serif;
  
        .title-link {
          color: #0e3746;
          letter-spacing: 1.4px;
          -webkit-text-stroke: 0.3px #0e3746;
          text-decoration: none;
        }
      }
    }

  }
`


const Header = ({ siteTitle }) => (
  <HeaderView>
    <div className="header-wrapper">
      <div>
        <div className="logo">
          <Image className="logo" title="encapsulated logotype" imageUrl={logo}/>    
        </div>
        <h1 className="title">
          <Link className="title-link"
            to="/">
            {siteTitle}
          </Link>
        </h1>
      </div>
      <Menu />
    </div>
  </HeaderView>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
