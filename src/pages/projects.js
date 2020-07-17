import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Organization from "../components/Job"
import EXPERIENCE from "../data/index"

import {ContentContainer} from './about.styles'

const Projects = () => 
    <ContentContainer id="projects" class="content-container">
    {EXPERIENCE['projects'].map(proj => 
      <Organization job={proj} key={proj.title} />
    )}
  </ContentContainer>

export default Projects