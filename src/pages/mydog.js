import React from "react"

import Layout from "../components/layout"
import {
    Image,
    ContentContainer,
    ImagesContainer
} from './about.styles'

const MyDog = () =>
    <Layout>
        <ContentContainer>
            <ImagesContainer>
                <Image src="https://instagram.fphl1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/100775808_639940066597770_1330467751458671593_n.jpg?_nc_ht=instagram.fphl1-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=5L8BMgQ6iYsAX_h79I1&oh=f4bf981875b5bab952c13497d9b05201&oe=5F3C314F" />
                <Image src="https://instagram.fphl1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/66284692_149149752898437_5498807796429329920_n.jpg?_nc_ht=instagram.fphl1-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=l9iHD32fEpMAX-mKgti&oh=a0cc7b649ed2fd28dae46adc076dec07&oe=5F396AB2"/>
                <Image src="https://instagram.fphl1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/75392890_620740518668676_3699553036766188914_n.jpg?_nc_ht=instagram.fphl1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=v-pEDv0WlyEAX8uY5SJ&oh=0bf208ff83da6f004d7e64f4b15529fe&oe=5F390CEF" />
                <Image src="https://instagram.fphl1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/28158999_1977867535798478_1532981588671856640_n.jpg?_nc_ht=instagram.fphl1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=MYkXJRqcH54AX_Znuds&oh=878aa4b5f7a8ee7f05634d61d1e7f134&oe=5F3A99A4" />
            </ImagesContainer>
        </ContentContainer>
    </Layout>

export default MyDog;