import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./../styles/global.css"

import logo from './../images/logo_pill.png';

import styled from 'styled-components';

const HeaderView = styled.header`
  padding: 0px;
  color: #000;
  max-width: 100%;
  
  .header-wrapper {
    display: flex;
    flex-direction;
    justify-content: flex-start;
    padding: 15px 20px;
    box-sizing: border-box;
    max-width: 100%;

    .logo {
      margin-top: 3px;
      width: 35px;
      height: 24px;
    }
    
    .title {
      margin-left: 5px;
      font-size: 26px;
      line-height: 1.1;
      font-weight: 800;
      color: #000;
      display: inline-block;
      font-family: 'Questrial', sans-serif;

      .title-link {
        color: #000;
        letter-spacing: 1.4px;
        -webkit-text-stroke: 0.3px #000;
        text-decoration: none;
      }
    }
  }
`


const Header = ({ siteTitle }) => (
  <HeaderView>
    <div className="header-wrapper">
      <img className="logo" alt="encapsulated logotype" src={logo}/>    
      <h1 className="title">
        <Link className="title-link"
          to="/">
          {siteTitle}
        </Link>
      </h1>
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
