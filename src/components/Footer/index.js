import React from 'react'
import { FaGithub, FaLinkedin, FaStackOverflow,FaPhone, FaEnvelopeOpenText, FaFilePdf } from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialIconLinks, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>German Ramirez</SocialLogo>
                        <WebsiteRights>German Ramirez &copy; {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLinks href="https://github.com/izaack89" target="_blank" aria-label="Github"><FaGithub/></SocialIconLinks>
                            <SocialIconLinks href="https://www.linkedin.com/in/german-isaac-ramirez-casta%C3%B1on-4835b030/" target="_blank" aria-label="LinkedIn"><FaLinkedin/></SocialIconLinks>
                            <SocialIconLinks href="tel:+525527117864" target="_blank" aria-label="Phone"><FaPhone/></SocialIconLinks>
                            <SocialIconLinks href="mailto:mitsuominagi@gmail.com" target="_blank" aria-label="Email"><FaEnvelopeOpenText/></SocialIconLinks>
                            <SocialIconLinks href="https://stackexchange.com/users/20052148/german-ramirez" target="_blank" aria-label="StackOverflow"><FaStackOverflow/></SocialIconLinks>
                            <SocialIconLinks href="https://stackexchange.com/users/20052148/german-ramirez" target="_blank" aria-label="CV-German-Ramirez"><FaFilePdf/></SocialIconLinks>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>            
        </FooterContainer>
    )
}

export default Footer
