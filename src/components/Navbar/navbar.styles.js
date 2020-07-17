import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  height: 100%;
  width: 250px;
  background: linear-gradient(to bottom right, rgb(0,47,75, 0.8), rgb(220,66,37, 0.8)), url("https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80");
  background-size: 600px;
  padding: 3rem 2rem 2rem 2rem;
  margin: 0;
  color: #D4D4D4;
  font-size: 14px;
  text-align: right;
  justify-content: space-between;
  @media(max-width: 767px){
    width: 100%;
    background-size: 100%;
    align-items: center;
    height: 60%;
    justify-content: center;
    position: static;
    text-align: center;
  }
`
const Title = styled.span`
    font-size: 16px;
    color: #ECECEC;
`
const Description = styled.p`
    width: 85%;
`
const MyPhoto = styled.img`
    border-radius: 100px;
    width: 130px;
    height: 130px;
    margin: 0;
    display: inline-flex;
    padding: 0;
    -webkit-filter: drop-shadow(12px 12px 25px rgba(255,255,255,0.3));
    border: 1px solid #FFF;
    @media(max-width: 767px){
        width: 100px;
        height: 100px;
    }
`
const IndexLink = styled(Link)`
    text-decoration: none;
    color: #ECECEC;
    line-height: inherit;
    font-size: inherit;
    text-transform: uppercase;
    &::after {
        content: '';
        display: block;
        height: 4px;
        background: #FFF;
        transform: scaleX(0);
        transition: transform .3s ease-in-out;
    }
    &:hover {
        &::after {
            transform: scaleX(1);
        }
    }
   
`
const IndexLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 55%;
    line-height: 1.75rem;
    font-size: 1.15rem;
    @media(max-width: 1024px){
        height: auto;
        flex-direction: row;
        line-height: 1rem;
        font-size: 0.75rem;
        justify-content: space-between;
        width: 98%;
    }

`
const SiteDetail = styled.footer`
    font-size: 12px;
    position: fixed;
    width: 170px;
    bottom: 25px;
    a {
        color: #ECECEC;
        text-decoration: none;
    }
    @media(max-width: 767px){
        width: 100%;
        background: linear-gradient(to bottom right, rgb(0,47,75, 0.8), rgb(220,66,37, 0.8)), url("https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80");
        bottom: 0;
        padding: 20px;
    }
`
const SocialButtons = styled.div`
    display: flex;
    width: 150px;
    font-size: 30px;
    justify-content: space-between;
    @media(max-width: 768px){
        width: 130px;
        font-size: 20px;
        margin-bottom: 20px;
    }
`
const SocialButton = styled.a`
&::after {
    content: '';
    display: block;
    height: 4px;
    background: #FFF;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
}
&:hover {
    line-height: 2rem;
    &::after {
        transform: scaleX(1);
    }
}
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media(max-width: 767px){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
`

export {
    NavbarContainer,
    MyPhoto,
    Title,
    IndexLink,
    IndexLinkContainer,
    SiteDetail,
    Description,
    SocialButton,
    SocialButtons,
    InfoContainer
}