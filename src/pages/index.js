import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Presentation from './../components/index/presentation';

const IndexPage = () => (
  <Layout>
    <SEO title="Encapsulated" 
         description="Personal Website by Juanma Perez, Front End developer at Colossus Bets, London" 
         keywords={[`Juanma Perez`, `javascript`, `developer`, ``]} 
    />
    
    <Presentation/>
   
  </Layout>
)

export default IndexPage
