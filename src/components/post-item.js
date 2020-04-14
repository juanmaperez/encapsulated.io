import React from 'react';
import { Link, navigate } from 'gatsby'
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';

const PostItemView = styled.div`
margin: ${props => props && props.view === 'list' ? '40px auto 20px' : '40px 0px 0px' };
padding:${props => props && props.view === 'list' ? '0px' : '0px 20px' };
box-sizing: border-box;
width: ${props => props && props.view === 'list' ? '35%' : '33%' };
@media(max-width:1590px){ width: ${props => props && props.view === 'list' ? '40%' : '33%'};  }
@media(max-width:1100px){ width:${props => props && props.view === 'list' ? '55%' : '33%'}; }
@media(max-width:878px){ width: ${props => props && props.view === 'list' ? '65%' : '50%'}; }
@media(max-width:510px){
  width:98%;
  margin: 40px auto 0px;
  padding: 10px;
}
.post-wrapper {
  height: 100%;
  opacity: 0;
  transition: opacity 600ms linear;
  &.fade-in {
    opacity: 1;
  }
  .post {
    height: 100%;
    background: var(--bgColor);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
    transition: all 200ms linear;
    overflow: hidden;
    box-shadow: 0 0 0 1px rgba(var(--primaryColorRGB), 0.05), 0 2px 4px rgba(var(--primaryColorRGB), 0.08);      
 
    
    .image-container {
      cursor: pointer;
      flex: 1;
      position: relative;
      overflow: hidden;
      height: 320px;
      max-height: 320px;
      @media(max-width: 520px){ height: 260px}
      .image {
        min-height: 320px;
        transition: all 600ms linear;
        position: relative;
        width: 100%;
        background: url(${props => props.image});
        background-size: cover;
        background-position: center center;
        &.aumented {
          transform:scale(1.1) translateY(10px);
        }
      }
    }
    .post-container { 
      position: relative;
      padding: 20px 20px 40px;
      flex: 1;
      .post-icon {
        width: 22px;
        height: 44px;
        background: url(${props=> props.icon});
        border-radius: 50%/25%;
        position: absolute;
        top: -26px;
        left:20px;
        background-size: 130%;
        background-position:center 1px;
        background-repeat: no-repeat;
        box-shadow: 0px 1px 1px 1px rgba(var(--primaryColorRGB),0.2), 0 2px 4px rgba(var(--primaryColorRGB),0.08); 
        overflow: hidden;    
        background-color: transparent; 
        z-index: 10;
      }
      .post-date {
        display: block;
        margin: 25px 0px 5px;
        font-size: 15px;
        letter-spacing: 1px;
        opacity: .6;
        color:  var(--primaryColor);
        font-weight: bolder;
      } 
      .post-title {
        margin: 20px 0px 10px;
        padding: 0px;
        font-size: 30px;
        line-height: 1;
        letter-spacing: 1px;
        color: var(--primaryColor);
        -webkit-text-stroke: 0.5px var(--primaryColor);
        @media(max-width:510px){ font-size: 30px }
   
        a {
          text-decoration: none;
          color: var(--primaryColor) !important;
        }
      }
      .post-excerpt {
        display: block;
        font-size: 18px;
        margin-bottom: 0px;
        line-height:1.5;
        color:  var(--primaryColor);
        font-weight: normal;
      } 
    }
  }
}
`

const PostItem = (props) => {
  const { frontmatter, view, listPath } = props;


  return (
  <PostItemView view={view} image={ frontmatter.thumbnail.childImageSharp.fluid.src } icon={ frontmatter.icon.childImageSharp.fluid.src }>
    <Controller>
      <Scene classToggle={'fade-in'} triggerHook={0.85}>
        <div className="post-wrapper" >
          <div className="post">
            <div className="image-container" onClick={() => navigate(frontmatter.path) }>
              <div className="image aumented"></div>
            </div>
            <div className="post-container">
              <Link to={`/category/${frontmatter.category}`}><div className="post-icon"></div></Link>
              <h2 className="post-title">
                <Link to={frontmatter.path} state={{prevPath: listPath }}> {frontmatter.title} </Link>
              </h2>
              <div className="post-date">
                {frontmatter.date}
              </div>
              <div className="post-excerpt">
                {frontmatter.excerpt}
              </div>
            </div>
          </div>
        </div>
      </Scene>
    </Controller>
  </PostItemView>
)};

export default PostItem;