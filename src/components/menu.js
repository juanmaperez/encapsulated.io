import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby'

const MenuView = styled.div`
  position: relative;
  .menu-list {
    opacity: 0;
    display: none;
    transition: all 400ms linear;
    position: absolute;
    bottom: -110px;
    right: 5px;
    &.open {
      display:block;
      opacity: 1;
    }
    ul {
      list-style: none;
      li {
        margin-bottom: 10px;
        text-align: right;
        a { 
          color: var(--primaryColor);
          font-size: 22px;
          &.active {
            text-decoration: line-through;
          }
          &:hover {
            text-decoration: line-through;
          }
        }
      }
    }
  }
  
  #nav-icon {
    margin: 5px;
    width: 35px;
    height: 20px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;

    .bar {
      display: block;
      position: absolute;
      height: 2px;
      width: 100%;
      background: var(--primaryColor);
      border-radius: 9px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: .25s ease-in-out;
      -moz-transition: .25s ease-in-out;
      -o-transition: .25s ease-in-out;
      transition: .25s ease-in-out;

      &:nth-child(1) { top: 0px }
      &:nth-child(2), &:nth-child(3) { top: 9px }
      &:nth-child(4) { top: 18px }
    }

    &.open {
      .bar {
        &:nth-child(1) {
          top: 18px;
          width: 0%;
          left: 50%;
          opacity: 0;
        }
        
        &:nth-child(2) {
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          transform: rotate(45deg);
        }
        
        &:nth-child(3) {
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
        
        &:nth-child(4) {
          top: 18px;
          width: 0%;
          left: 50%;
          opacity:0;
        }

      }
    }
  }
`

class Menu extends Component {

  state = {
    open: false
  }

  toggleMenu = () =>{
    const { open } = this.state;
    this.setState(()=>({
      open: !open
    }))
  }

  render(){
    const { open } = this.state;
    return (
      <MenuView >
        <div className={ open ? 'open': ''} id="nav-icon" onClick={ this.toggleMenu }>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={ open ? 'open menu-list': 'menu-list'}>
          <ul>
            <li><Link activeClassName="active" to={'/'}> Home </Link></li>
            <li><Link activeClassName="active" to={'/work'}> Work </Link></li>
            <li><Link activeClassName="active" to={'/blog'}> Blog </Link></li>
          </ul>
        </div>
      </MenuView>
    )
  }
} 

export default Menu;