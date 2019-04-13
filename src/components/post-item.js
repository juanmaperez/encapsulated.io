import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';

const PostItemView = styled.div`
margin: 0px auto;
padding: 25px;
box-sizing: border-box;
width: 60%;
@media(max-width:878px){
  width:75%;
}
@media(max-width:510px){
  width:95%;
  padding:25px 0px;
}
.post {
  background: var(--bgColor);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
  transition: all 200ms linear;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgba(var(--primaryColorRGB), 0.05), 0 2px 4px rgba(var(--primaryColorRGB), 0.08);      
  &:hover {
    0px 3px 5px 5px rgba(var(--primaryColorRGB),0.1), 0 2px 4px rgba(var(--primaryColorRGB),0.08);
    transform: translateY(-2px);
    .image-container {
      .image {
        transform: scale(1.1);
      }
    }
  }
  .image-container {
    box-shadow: 0 0 0 1px rgba(var(--primaryColorRGB), 0.05), 0 2px 4px rgba(var(--primaryColorRGB), 0.08);      
    flex: 1;
    position: relative;
    overflow: hidden;
    height: 260px;
    .image {
      transition: all 300ms linear;
      position: relative;
      height: 100%;
      width: 100%;
      background: url(${props => props.image});
      background-size: cover;
      background-position: center center;
     
    }
  }
  .post-container { 
    position: relative;
    padding: 20px 20px 25px;
    flex: 1;
    .post-icon {
      width: 25px;
      height: 50px;
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
    }
    .post-date {
      display: block;
      margin: 25px 0px 0px;
      font-size: 15px;
      letter-spacing: 1px;
      margin-bottom: 0px;
      color:  var(--primaryColor);
      opacity: .7;
    } 
    .post-title {
      margin: 2px 0px 10px;
      padding: 0px;
      font-size: 32px;
      line-height: 1.2;
      letter-spacing: 1.2px;
      color: var(--secondaryColor);
      -webkit-text-stroke: 0.2px var(--secondaryColor); 
      a {
        text-decoration: none;
      }
    }
    .post-excerpt {
      display: block;
      font-size: 15px;
      margin-bottom: 0px;
      line-height:1.5;
      color:  var(--primaryColor);
    } 
  }
}`

const PostItem = (props) => {
  const { frontmatter } = props;
  return (
  <PostItemView image={ frontmatter.thumbnail.childImageSharp.fluid.src } icon={ frontmatter.icon.childImageSharp.fluid.src }>
    <div className="post-wrapper">
      <div className="post">
        <div className="image-container">
          <div className="image"></div>
        </div>
        <div className="post-container">
          <div className="post-icon"></div>
          <div className="post-date">
            {frontmatter.date}
          </div>
          <h2 className="post-title">
          <Link to={frontmatter.path}> {frontmatter.title} </Link>
           </h2>
           <div className="post-excerpt">
            {frontmatter.excerpt}
          </div>
        </div>
      </div>
    </div>
  </PostItemView>
)};

export default PostItem;