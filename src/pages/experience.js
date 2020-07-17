import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Job from "../components/Job"
import EXPERIENCE from "../data/index"

import {ContentContainer} from './about.styles'

const ExperiencePage = () => 
<Layout>
    <ContentContainer id="experience" class="content-container">
    {EXPERIENCE['experience'].map(job => 
      <Job job={job} key={job.company} />
    )}
  </ContentContainer>
</Layout>

export default ExperiencePage