import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from './../components/post-item'

const TagView = styled.div`
  margin: 150px auto 80px;
  width: 100%;
  min-height: 10px;
`

const TagTemplate = ({ pathContext }) => {
  const {posts, tagName} = pathContext;
  if(posts) {
    return (
      <Layout>
        <SEO title={`Encapsulated Blog: ${ tagName }`}   />
        <TagView>
          <h2 className="tagTitle">Posts about {tagName}:</h2>
          {posts.map(({node: post})=>{
            const { frontmatter } = post;
            return (
              <PostItem key={frontmatter.path} frontmatter={frontmatter}/>
            )
          })}
        </TagView>
      </Layout>
    )
  }

}


export default TagTemplate
