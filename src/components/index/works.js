import React from 'react';
import styled from 'styled-components'

const WorksBlockView = styled.div`
`

const WorksBlock = ({ data, height}) => {
  const { edges: works } = data.allMarkdownRemark  

  return (
    <WorksBlockView>
      
    </WorksBlockView>
  )
}


export default WorksBlock;