import React from 'react'
import { CloseIcon, Icon, SidebarContainer,SidebarWrapper,SidebarMenu,SidebarLink } from './SideBarElements';

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>About Me</SidebarLink>
                    <SidebarLink to='portfolio' onClick={toggle}>Portfolio</SidebarLink>
                    <SidebarLink to='resume' onClick={toggle}>Resume</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
export default Sidebar;