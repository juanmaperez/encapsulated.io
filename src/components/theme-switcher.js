import React, { Component } from 'react'
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const ThemeSwitcherView = styled.div`
  margin-top: 5px;
  margin-right: 5px;
  border: 1px solid var(--primaryColor);
  width: 40px;
  height: 20px;
  border-radius: 20px/20px;
  position: relative;  
  .dark-icon {
    font-size: 12px; 
    position: absolute; 
    left: 5px; 
    top: 4px; 
    color: var(--primaryColor);
  }
  .light-icon { 
    font-size: 12px;
    position: absolute; 
    right: 5px; 
    top: 4px;
    color: var(--primaryColor); 
  }
  .ball-button { 
    position: absolute; 
    z-index: 10; 
    top: -1px;
    left: -1px; 
    border: 1px solid var(--primaryColor); 
    width: 20px; 
    height: 20px; 
    border-radius: 50%;
    background: var(--bgColor);
    transition: all 300ms ease-in;
    :hover {
      border: 1px solid var(--secondaryColor); 
    }
    &.dark {
      transform: translateX(20px);
    }
  }
` 

class ThemeSwitch extends Component {  

  state = { theme: 'light'}

  constructor(props){
    super(props);
    this.store = typeof localStorage === 'undefined' ? null : localStorage;  
  }

  componentDidMount(){
    if (this.store) {
      const theme = this.store.getItem('theme') || 'light'
      this.setState({ theme });
      this.setTheme(theme);
    }
  }

  toggleButton = () => {
    let { theme } = this.state;
    theme = theme === 'light' ? 'dark' : 'light';
    this.setTheme(theme);
    this.storeTheme(theme);
  }

  setTheme = (theme) => {
    this.setState({theme}, () => {
      const element = document.querySelector('body');
      element.className = "";
      element.classList.add(theme);
    })
  }

  storeTheme = (theme) => {
    if (this.store) {
      this.store.setItem('theme', theme);
    }
  }

  render() {
    const { theme } = this.state;
    return(
      <ThemeSwitcherView onClick={ this.toggleButton }>
         <FontAwesomeIcon className="light-icon" icon={ faSun } />
         <FontAwesomeIcon className="dark-icon" icon={ faMoon } />
          <div className={`ball-button ${theme}`}></div>
      </ThemeSwitcherView>
    )
  }
}

export default ThemeSwitch;  