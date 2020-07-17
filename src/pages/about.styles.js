import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
    border-radius: 15px;
    height: 200px;
    width: 200px;
    margin: 0 15px 0 0;
    @media(min-width: 768px) and (max-width: 1024px){
        width: 145px;
        height: 145px;
    }
    @media(max-width: 767px){
        width: 135px;
        height: 135px;
        margin: 5px;
    }
`
const ContentContainer = styled.div`
    padding: 20px 20px 20px 350px;
    height: 100%;
    width: 100%;
    @media(max-width: 767px){
       display: flex;
       padding: 20px;
       margin-bottom: 40px;
       flex-wrap: wrap;
    }

`
const ImagesContainer = styled.div`
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    @media(max-width: 767px){
        justify-content: center;
        margin: 0 auto;
     }
`
const TextContent = styled.p``

export {
    Image,
    ImagesContainer,
    ContentContainer,
    TextContent,
}