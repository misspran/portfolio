import React from 'react'
import styled from 'styled-components'

const JobCardContainer = styled.div`
  display: block;
`
const JobTitle = styled.div`
  font-weight: 600;
`
const Company = styled.a`
  font-weight: 600;
  color: #444444;
  text-decoration: none;
  padding-left: 5px;
`
const JobLocation = styled.div`
`
const Divider = styled.div`
margin: 0 10px;
border-right: 1px solid #444444;
height: 1.10rem;
`

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Date = styled.div`
  text-transform: uppercase;
`
const CompanyLogo = styled.img`
  width: 100px;
  height: auto;
  margin: 0 10px 10px 0;
  @media(max-width: 767px){
    width: 75px;
    height: auto;
  }
`
const JobHeader = styled.div`
  display: flex;
  align-items: center;
`
const HeaderLine = styled.div`
width: 70%;
display: inline-flex;
@media(max-width: 767px){
  width: 100%;
  font-size: 14px;
}
`



export {
    JobCardContainer,
    JobTitle,
    JobHeader,
    HeaderLine,
    Date,
    Company,
    CompanyLogo,
    JobLocation,
    TitleSection,
    Divider
}