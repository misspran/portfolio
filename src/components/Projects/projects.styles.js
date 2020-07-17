import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const ProjectCard = styled.div`
    max-width: 90%;
    color: 	#656565;
    padding-left: 25px;
    @media(max-width: 767px){
        padding-left: 10px;
      }
`
const ProjectTitle = styled.a`
    color: 		#444444;
    text-decoration: none;
    font-weight: 400;
`
const Task = styled.span`
padding-left: 10px;
`


export {
    ProjectCard,
    ProjectTitle,
    Task
}