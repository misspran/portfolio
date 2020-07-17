import React from 'react'
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import {
    NavbarContainer,
    MyPhoto,
    Title,
    IndexLink,
    IndexLinkContainer,
    SiteDetail,
    Description,
    InfoContainer,
    SocialButton,
    SocialButtons
} from './navbar.styles'


const Navbar = () => 
<NavbarContainer>
<InfoContainer>
    <MyPhoto src="https://pbs.twimg.com/profile_images/466739513717690368/Tbl0f6GC_400x400.jpeg" alt="Vi Tran photo"/>
        <Description>I'm Vi.
            <br/> I write mostly Javascript.
        </Description> 
    <SocialButtons>
        <SocialButton><FaEnvelope/></SocialButton>
        <SocialButton><FaGithub/></SocialButton>
        <SocialButton><FaTwitter/></SocialButton>
        <SocialButton><FaLinkedin/></SocialButton>
    </SocialButtons>
    </InfoContainer>
        < IndexLinkContainer>
            <IndexLink to="/about">About</IndexLink>
            <IndexLink to="/experience">Experience</IndexLink>
            <IndexLink to="/#projects">Projects</IndexLink>
            <IndexLink to='/resume'>Resume</IndexLink>
            <IndexLink to="/mydog">My Dog</IndexLink>
        </IndexLinkContainer>
    <SiteDetail>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
  </SiteDetail>
</NavbarContainer>


export default Navbar;