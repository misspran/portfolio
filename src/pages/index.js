import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import About from './about'
import Experience from './experience'
import Projects from './projects'
import {
  Image,
  ContentContainer,
  ImagesContainer,
  TextContent
} from './about.styles'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Vi's software engineering portoflio" />
    <About/>
    <Experience />
    <Projects />
    <ContentContainer id="resume">
    <iframe src="https://drive.google.com/file/d/1KUhi51HyEqDhlzxgfXs7POMDxXQUz4T8/preview" width="100%" height="700px"></iframe>
    </ContentContainer>
  </Layout>
)

export default IndexPage
