import React from "react"

import Layout from "../components/layout"
import {
    Image,
    ContentContainer,
    ImagesContainer,
    TextContent
} from './about.styles'

const About = () =>
    <Layout>
        <ContentContainer>
            <ImagesContainer>
                <Image src="https://instagram.fphl1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/17332540_1133448220117800_4922387611932164096_n.jpg?_nc_ht=instagram.fphl1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=n4dKNASkCIcAX-MyAZd&oh=b91649b1ddffa4c4214c7259f24069da&oe=5F3AB744" />
                <Image src="https://instagram.fphl1-1.fna.fbcdn.net/v/t51.2885-15/e35/14714603_801382623338186_4252767008933806080_n.jpg?_nc_ht=instagram.fphl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=-knMICjHzi0AX_7erbG&oh=1d479f0a563cdd19cff8db143db6bd01&oe=5F39F7AD"/>
                <Image src="https://instagram.fphl1-1.fna.fbcdn.net/v/t51.2885-15/e35/13320051_560947264107032_818129337_n.jpg?_nc_ht=instagram.fphl1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=rj7B2U7QtD4AX_iB1G4&oh=7708027c78ea85a21a7261392c50888a&oe=5F3A8F2B" />
                <Image src="https://instagram.fphl1-1.fna.fbcdn.net/v/t51.2885-15/e35/106629719_596255967930987_87904389920822852_n.jpg?_nc_ht=instagram.fphl1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=2mlsrBtQlbAAX8uliF-&oh=10dc711cd3b3fc66bcc5c2cb36d3e1c1&oe=5F3AB1B8" />
            </ImagesContainer>
            <TextContent>
            Hello,
            <br/>
            <br/>
            I'm a software engineer currently residing in Somerville, MA. 
            </TextContent>
        </ContentContainer>
    </Layout>

export default About;