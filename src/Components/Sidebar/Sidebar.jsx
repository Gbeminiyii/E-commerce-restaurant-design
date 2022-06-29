import React from 'react'
import { Sidebarcontainer, SidebarLinks, SidebarList,CloseIcon, SidebarButton } from './SidebarComponents'

const Sidebar = ({toggle, isOpen}) => {
  return (
    <Sidebarcontainer isOpen={isOpen} >
        <CloseIcon onClick={toggle} />
        <SidebarList>
            <SidebarLinks to='/'>Pizzas</SidebarLinks>
            <SidebarLinks to='/'>Desserts</SidebarLinks>
            <SidebarLinks to='/'>Full Menu</SidebarLinks>
        </SidebarList>
        <SidebarButton>
            Order Now
        </SidebarButton>
    </Sidebarcontainer>
  )
}

export default Sidebar