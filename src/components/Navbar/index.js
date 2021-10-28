import React, { useState,useEffect } from 'react'
import {FaBars} from 'react-icons/fa'
import { MobileIcon, Nav,NavbarContainer,NavItem,NavLogo, NavMenu,NavLinks } from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({toggle}) => {

    const [scrollNav,setScrollNav] = useState(false)

    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>German Ramirez</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About Me</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="portfolio" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Portfolio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="resume" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Resume</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar;