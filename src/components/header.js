import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
 
import Image from './image';

import logo from './../images/logo_pill.png';
import ThemeSwitch from "./theme-switcher";

const HeaderView = styled.header`
  padding: 0px;
  color: #000;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
  box-sizing: border-box;

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
        color: var(--primaryColor);
        display: inline-block;
        font-family: 'Questrial', sans-serif;
        mix-blend-mode: difference;
        
  
        .title-link {
          color: var(--primaryColor);
          letter-spacing: 1.4px;
          -webkit-text-stroke: 0.3px var(--primaryColor);
          text-decoration: none;
          mix-blend-mode: difference;
        }

        @media(max-width: 510px){
          display:none;
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
          <Link className="title-link"
              to={"/"}>
          <Image className="logo" title="finejavascript logotype" imageUrl={logo}/> 
          </Link>
   
        </div>
        <h1 className="title">
          <Link className="title-link"
            to={"/"}>
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div>
        <ThemeSwitch />
      </div>
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
